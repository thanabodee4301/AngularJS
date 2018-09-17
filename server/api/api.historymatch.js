var axios = require('axios');
exports.historymatch = async  (league,team)=>  {
    try {
        var url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${league}/seasons/18-19/rounds?team_identifier=${team}`;
        var option = {
            headers: {
                "X-Mashape-Key": "MzaZdz6LaBmshxXxtCHsjiGDl89Dp1qPKkwjsn60GFXVharyV1",
                "Accept": "application/json"
            }
        }
        var result = await axios.get(url, option);
        if (result.data.data.statusCode == "200") {
            return result.data.data.rounds;
        } else {
            return 404;
        }
    } catch (e) {
        return 404
    }
}