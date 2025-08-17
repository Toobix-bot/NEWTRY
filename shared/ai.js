// Shared local KI (Ollama) helpers
// Provides: pingOllama(), askOllama(prompt, opts)
// Notes: Works only on http:// contexts due to browser mixed-content rules.
(function(global){
  // Prefer same-origin proxy (/ollama) to avoid mixed content; fallback to localhost
  const PROXY_BASE = '/ollama';
  const DEFAULT_URL = PROXY_BASE + '/api/chat';
  function isHttps(){ try { return location.protocol === 'https:'; } catch { return false; } }

  function localhostUrl(path){ return 'http://localhost:11434' + path; }

  async function pingOllama(url=DEFAULT_URL){
    try {
      const ctrl = new AbortController();
      const t = setTimeout(()=>ctrl.abort(), 1200);
      let res = await fetch(url.replace('/api/chat','/api/tags'), { signal: ctrl.signal });
      clearTimeout(t);
      if (!res.ok) {
        // Try localhost fallback (works only on http pages due to mixed content)
        const res2 = await fetch(localhostUrl('/api/tags'));
        if (!res2.ok) return { ok:false, reason:'http '+res.status };
        const js2 = await res2.json();
        return { ok: Array.isArray(js2), models: js2, via:'localhost' };
      }
      const js = await res.json();
      return { ok: Array.isArray(js), models: js, via:'proxy' };
    } catch (e) {
      // Fallback attempt to localhost when proxy fails
      try {
        const res2 = await fetch(localhostUrl('/api/tags'));
        if (!res2.ok) return { ok:false, reason:'net' };
        const js2 = await res2.json();
        return { ok: Array.isArray(js2), models: js2, via:'localhost' };
      } catch {
        return { ok:false, reason: e && e.name === 'AbortError' ? 'timeout' : 'net' };
      }
    }
  }

  async function askOllama(userText, { model='gemma3:1b', url=DEFAULT_URL }={}){
    const payload = { model, stream:false, messages:[{role:'user', content:userText}] };
    // Try proxy first
    try {
      let res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('bad');
      const data = await res.json();
      return data && data.message ? data.message.content : JSON.stringify(data);
    } catch {
      // Fallback to localhost direct (requires http page)
      const res2 = await fetch(localhostUrl('/api/chat'), { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
      if (!res2.ok) throw new Error('HTTP '+res2.status);
      const data2 = await res2.json();
      return data2 && data2.message ? data2.message.content : JSON.stringify(data2);
    }
  }

  global.VLFL_AI = { pingOllama, askOllama };
})(window);
