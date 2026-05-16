const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

// Standard production-ready setup
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        await handle(req, res)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
  })
  .catch((err) => {
    console.error('Failed to start server:', err)
    process.exit(1)
  })
