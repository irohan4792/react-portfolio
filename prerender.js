import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const { html } = render()

// Inline CSS
const assetsDir = toAbsolute('dist/static/assets')
const files = fs.readdirSync(assetsDir)
const cssFile = files.find(f => f.endsWith('.css'))
let finalHtml = template.replace(`<div id="root"></div>`, `<div id="root">${html}</div>`)
if (finalHtml === template) {
  finalHtml = template.replace(`<!--ssr-outlet-->`, html) // Fallback just in case
}

if (cssFile) {
  const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8')
  // Remove the <link rel="stylesheet"> tag for this CSS file
  finalHtml = finalHtml.replace(new RegExp(`<link[^>]+href="[^"]*${cssFile}"[^>]*>`), '')
  
  // Inject a <noscript> style block to override Framer Motion's inline opacity:0 styles
  // This is required so Network Preview (which disables JS) actually shows the content!
  const noscriptStyles = `
<noscript>
  <style>
    /* Force visibility of all animated elements if JS is disabled */
    * {
      opacity: 1 !important;
      transform: none !important;
    }
  </style>
</noscript>
`
  // Inject the CSS into the <head>
  finalHtml = finalHtml.replace('</head>', `<style>\n${cssContent}\n</style>\n${noscriptStyles}</head>`)
}

fs.writeFileSync(toAbsolute('dist/static/index.html'), finalHtml)

console.log('Prerendering completed successfully.')

