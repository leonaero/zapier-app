const gql = require("graphql-tag");

const aircraftQuery = gql`
  query aircraft($id: Int!) {
    aircraft(acftNid: $id) {
      id: acftNid
      registration
      acftTypeName
      paxCapacity
      defFltNo
      homeBase {
        code {
          icao
          iata
        }
      }
      yearOfProduction
      notUsed
      note
      isActive
      serialNo
      acftTypeId
      acftType {
        iCAO
        iATA
        name
        manufacturer
        shortName
      }
    }
  }
`;

module.exports = aircraftQuery;
