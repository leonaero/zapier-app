//@flow
import type { DocumentNode } from "graphql";

const apiRequest = require("../misc/apiRequest");
const aircraftListQuery: DocumentNode = require("../fixtures/queries/aircraft.js");

const getAircraft = (z: Zapier, bundle: GetAircraftBundle) => {
  return apiRequest<AircraftQueryVariables, AircraftQuery>(
    z,
    bundle.authData,
    aircraftListQuery,
    {
      id: bundle.inputData.id
    }
  ).then(response => {
    return [response.aircraft];
  });
};

module.exports = {
  key: "aircraft",

  noun: "Aircraft",
  display: {
    label: "Find aircraft in the Leon",
    description: "Finds operator aircraft by unique id",
    hidden: false
  },

  operation: {
    inputFields: [
      {
        key: "id",
        type: "number",
        label: "Aircraft unique id",
        helpText: "Numeric unique identificator of aircraft in Leon",
        required: true
      }
    ],

    perform: getAircraft
  }
};
