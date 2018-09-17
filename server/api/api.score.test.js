var axios = require('axios');
jest.mock('axios');
var {
  TopScorers
} = require('./api.score.js');

describe("Top Score method test", () => {
  test("should be return expected result", async (done) => {
    var resultExpect = "MyEXPECT123";
    var mockResult = {
      data: {
        data: {
          topscorers: "MyEXPECT123",
          statusCode: 200
        }
      }
    };
    axios.get.mockResolvedValue(mockResult);
    var result = await TopScorers('serie-a');
    expect(result).toEqual(resultExpect);
    done();
  })
})