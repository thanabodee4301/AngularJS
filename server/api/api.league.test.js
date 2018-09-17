var axios = require('axios');
jest.mock('axios');
var {
  allLeague
} = require('./api.league');

describe("League method test", () => {
  test("should be return expected result", async (done) => {
    var resultExpect = "league";
    var mockResult = {
      data: {
        data: {
          leagues: "league",
          statusCode: 200
        }
      }
    };
    axios.get.mockResolvedValue(mockResult);
    var result = await allLeague();
    expect(result).toEqual(resultExpect);
    done();
  })
})