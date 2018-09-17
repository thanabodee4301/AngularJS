var Table = require('../api/api.table.js');
module.exports = async(req,res)=>{
var league = req.params.league_slug;
var result = await Table(league); 
 res.send(result);
}