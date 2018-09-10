var TopScorers = require('../api/scorer');
module.exports = async (req, res) => {
  var league = req.params.league_slug;
  var result = await TopScorers(league);
  res.send(result).json();
}
