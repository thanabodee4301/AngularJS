var allLeague = require('../api/api.league.js');
module.exports = async (req, res) => {
  var result = await allLeague()
  res.send(result);
}