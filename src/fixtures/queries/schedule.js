const gql = require("graphql-tag");

const scheduleQuery = gql`
  query schedule($from: DateTime!, $end: DateTime!) {
    flightList(filter: { timeInterval: { start: $from, end: $end } }) {
      id: trNid
      acft {
        registration
      }
      startAirport {
        code {
          icao
          iata
        }
      }
      endAirport {
        code {
          icao
          iata
        }
      }
      startTime
      endTime
      flightNo
      dist
      tripNid
      status
      isCnl
      flightRules
      acftTypeId
      icaoType
    }
  }
`;

module.exports = scheduleQuery;
