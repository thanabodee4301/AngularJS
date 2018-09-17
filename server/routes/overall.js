var OverAll = require('../api/api.overall.js');
module.exports = async (req, res) => {
  var league = req.params.league_slug;
  var position = req.params.position;
  var result = await OverAll(league,position);
  res.send(result);
}