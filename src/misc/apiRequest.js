const apiEndpoint = require("./apiEndpoint");
const { print } = require("graphql");

const apiRequest = (z, authData, query, variables) => {
  return z.request({
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    url: apiEndpoint(authData.operatorDomain),
    body: {
      query: print(query),
      variables: variables
    }
  });
};

module.exports = apiRequest;
