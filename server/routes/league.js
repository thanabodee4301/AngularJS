var allLeague = require('../api/league.js');
module.exports = async (req, res) => {
  var result = await allLeague();
  res.send(result)
}
