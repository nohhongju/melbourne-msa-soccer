
const { write } = require('../controllers/board.controller')

module.exports = (url, app) => app.post(`${url}/write`,write);



