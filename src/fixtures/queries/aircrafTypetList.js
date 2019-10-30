const gql = require('graphql-tag');

const aircraftTypeListQuery = gql`
  query aircraftTypesList($wildcard: String) {
      aircraftTypeList(wildcard: $wildcard) {
      id: acftTypeId,
      acftTypeId,
      iCAO,
      iATA,
      shortName,
      
    }
  }
`;

module.exports = aircraftTypeListQuery;

