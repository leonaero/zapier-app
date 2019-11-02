const gql = require("graphql-tag");

const getScheduleQuery = gql`
  query getchedule($from: DateTime!, $end: DateTime!) {
    flightList(filter: { timeInterval: { start: $from, end: $end } }) {
      id: flightNid
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

module.exports = getScheduleQuery;
