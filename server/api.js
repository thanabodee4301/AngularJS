const express = require('express');
const router = express.Router();
var score = require('./routes/score.js');
var table = require('./routes/table.js');
var historymatch = require('./routes/historymatch.js');
var overall =require('./routes/overall.js');
var league = require('./routes/league.js');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
/*
router.get('/show', league);
router.get('/show/:league_slug/scorer', score);
router.get('/show/:league_slug', table);
router.get('/round/:league_slug/:team_identifier', historymatch);
router.get('/check/:league_slug/:position', overall);
module.exports = router;
*/
var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345678",
    database:"workshop"
});

var unirest= require('unirest'); 
var token = 'MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1';
var key = 'X-Mashape-Key';




//////////////////////////////////////////////// view table ////////////////////////////////////////
router.Checktable=(id)=>{
     var dataTable = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${id}/seasons/18-19/standings` 
     return dataTable;
}
router.CheckOverallStatus=(leagueCheck,position)=>{
    var Status = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${leagueCheck}/seasons/18-19/standings/${position}`
    return Status;
}
router.CheckHistory=(league,team)=>{
    var history = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league}/seasons/18-19/rounds?team_identifier=${team}`
    return history;
}
router.Checktopscorer=(league)=>{
    var topscorer = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league}/seasons/17-18/topscorers`
    return topscorer;
}
router.showall=()=>{
    var showall = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues`;
    return showall;
}

router.ShowTotalLeague=()=>{
     unirest.get(`https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues`)
     .header('X-Mashape-Key','MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1')
     .header("Accept","application/json") 
     .end(function(result){
     res.send(result.body.data.leagues)
    })
}

router.get('/show/:league_slug',(req,res)=>{
var id = req.params.league_slug;
     unirest.get(router.Checktable(id))
    .header(key, token)
    .header("Accept", "application/json")
    .end(function (result) {
    res.send(result.body.data.standings);
    });
});

////////////////////////////////////////////// view Top Scorer League selected////////////////////////    
router.get('/show/:league_slug/scorer',(req,res) => {
var league = req.params.league_slug;
    unirest.get(router.Checktopscorer(league))
    .header(key, token)
    .header("Accept", "application/json")
    .end(function(result){
        res.send(result.body.data.topscorers);
    });
 });

////////////////////////////////////////////// View History Match for team selected //////////////////////////
router.get('/round/:league_slug/:team_identifier',(req,res)=>{
    var league = req.params.league_slug;
    var team   = req.params.team_identifier;
    unirest.get(router.CheckHistory(league,team))
    .header(key, token)
    .header("Accept", "application/json")
    .end(function(result){
        res.send(result.body.data.rounds);
    });
    });


///////////////////////////////// view detail Team ////////////////////////////////////////// 
router.get('/check/:league_slug/:position',(req,res)=>{
    var leagueCheck = req.params.league_slug;
    var position    = req.params.position;
    unirest.get(router.CheckOverallStatus(leagueCheck,position))
            .header(key,token)
            .header("Accept","application/json")
            .end(function(result){
          res.send(result.body.data.standings)
    });
});

router.get('/show',(req,res)=>{
    unirest.get(router.showall())
   .header(key, token)
   .header("Accept", "application/json")
   .end(function (result) {
       res.send(result.body.data.leagues)
   });
});
router.post('/register2',function(req,res){
var userData = req.body;
var sql = con.query("insert into user set ?",userData,function(err,result){
    if(err)throw err
    res.end();
})
})
router.post('/login2',function(req,res){
    var user = req.body.userEmail;
    var pass = req.body.userPassword;
    var sql = 'SELECT * FROM user WHERE userEmail = ? AND userPassword = ?';
    var mysql = con.query(sql,[user,pass],(err,result)=>{
        if(err) throw err
       res.send(result)
    })
   

})




module.exports = router;