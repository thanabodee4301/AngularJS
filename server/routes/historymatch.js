var historymatch = require('../api/api.historymatch.js');
module.exports = async (req, res) => {
  var league = req.params.league_slug;
  var team = req.params.team_identifier;
  var result = await historymatch(league,team);
  res.send(result);
}