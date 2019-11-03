//@flow
import type { DocumentNode } from "graphql";

const apiRequest = require("../misc/apiRequest");
const emptyLegsQuery: DocumentNode = require("../fixtures/queries/emptyLegs");

const getEmptyLegs = (z: Zapier, bundle: GetEmptyLegsBundle) => {
  return apiRequest<EmptyLegsQueryVariables, EmptyLegsQuery>(
    z,
    bundle.authData,
    emptyLegsQuery,
    {
      from: bundle.inputData.from
    }
  ).then(response => {
    return [response.aircraftAvailability];
  });
};

module.exports = {
  key: "emptyLegs",

  noun: "Empty Legs",
  display: {
    label: "Finds empty legs`",
    description: "Finds operator future ferry flights",
    hidden: false
  },

  operation: {
    inputFields: [
      {
        key: "from",
        type: "string",
        label: "From date",
        helpText:
          "Starting date time in ISO 8601 format, ex. 2019-06-05, 2019-06-05T12:00:00",
        required: false
      }
    ],

    perform: getEmptyLegs
  }
};
