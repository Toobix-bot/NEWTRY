// Simple Express server with Ollama reverse proxy to avoid mixed content
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 8000;

// Static files
app.use(express.static(path.join(__dirname)));

// Proxy /ollama/* -> http://localhost:11434/*
app.use('/ollama', createProxyMiddleware({
  target: 'http://localhost:11434',
  changeOrigin: true,
  pathRewrite: { '^/ollama': '' },
  onProxyReq: (proxyReq, req, res) => {
    // Ensure JSON content-type for POST
    if (req.method === 'POST' && !proxyReq.getHeader('Content-Type')) {
      proxyReq.setHeader('Content-Type', 'application/json');
    }
  }
}));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Ollama proxy at /ollama');
});
