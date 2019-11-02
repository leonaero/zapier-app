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
    .request<GQLRequestBody<V>>(apiEndpoint(authData.operatorDomain), {
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
      return z.JSON.parse<GQLResponse<R>>(response.content).data;
    });
};

module.exports = apiRequest;
