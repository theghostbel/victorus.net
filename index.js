const subdomain =  require('express-subdomain')
const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.send('This is Root homepage')
});

const subdomainRoutes = express.Router()

subdomainRoutes.get('/', function(req, res) {
  res.send('This is "BMW App" subdomain')
});

app.use(subdomain('bmw', subdomainRoutes))
app.listen(process.env.PORT || 5000)
