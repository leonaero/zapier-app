//@flow
const apiEndpoint = (operatorDomain: string) =>
  `https://${operatorDomain}/api/graphql/`;

module.exports = apiEndpoint;
