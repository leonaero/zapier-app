const gql = require('graphql-tag');

const emptyLegsQuery = gql`
  
  query emptyLegs($from: DateTime) {
      aircraftAvailability {
        emptyLegList(startTime: $from) {
          acft {
            registration,
            acftNid
          },
          startTime,
          endTime,
          startAirport {
            code {
              icao
              iata
            }
          },
          endAirport {
            code {
              icao
              iata
            }
          },
          flightNo
          id: trNid
        }
      }
      
    }
`;

module.exports = emptyLegsQuery;

