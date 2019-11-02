//@flow
import type { ASTNode } from "graphql";

const apiEndpoint = require("./apiEndpoint");
const { print } = require("graphql");

const apiRequest = <V, R>(
  z: Zapier,
  authData: AuthRequestData,
  query: ASTNode,
  variables: V
): Promise<R> => {
  return z
    .request(apiEndpoint(authData.operatorDomain), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        query: print(query),
        variables: variables
      }
    })
    .then(response => {
      return z.JSON.parse(response.content).data;
    });
};

module.exports = apiRequest;
