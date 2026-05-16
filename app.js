const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// This file is the entry point for cPanel Node.js selector
// It tells cPanel to run your Next.js website
const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on production server')
  })
})
