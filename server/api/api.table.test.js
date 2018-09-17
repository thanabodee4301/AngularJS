var axios = require('axios');
jest.mock('axios');
var {
  Table
} = require('./api.table.js');

describe("Top Score method test", () => {
  test("should be return expected result", async (done) => {
    var resultExpect = "serie-a";
    var mockResult = {
      data: {
        data: {
          standings: "serie-a",
          statusCode: 200
        }
      }
    };
    axios.get.mockResolvedValue(mockResult);
    var result = await Table('serie-a');
    expect(result).toEqual(resultExpect);
    done();
  })
})