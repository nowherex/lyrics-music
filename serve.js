const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
const server = app
    .use(history())
    .use(express.static('dist'))
    // eslint-disable-next-line no-undef
    .listen(process.env.PORT || 5000, () => {
        console.log('Node.js is listening to PORT:' + server.address().port)
    })