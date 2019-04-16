const subdomain =  require('express-subdomain')
const express = require('express')

const app = express()

const rootRoutes = express.Router()
rootRoutes.get('/', (req, res) => {
  res.send('This is ROOT')
})

const subdomainRoutes = express.Router()
subdomainRoutes.get('/', (req, res) => {
  res.send('This is "BMW App" subdomain')
})

// app.use(subdomain('bmw', subdomainRoutes))
app.use(subdomain('bmw', express.static('bmw-club-fa-fa')));
app.use(subdomain('slides', express.static('slides')));

app.use('/', rootRoutes)

app.listen(process.env.PORT || 5000)
