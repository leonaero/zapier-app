const apiRequest = require("../misc/apiRequest");
const emptyLegsQuery = require("../fixtures/queries/emptyLegs");

const getEmptyLegs = (z, bundle) => {
  return apiRequest(z, bundle.authData, emptyLegsQuery, {
    from: bundle.inputData.from
  }).then(response => {
    const data = z.JSON.parse(response.content).data;
    return data.aircraftAvailability.emptyLegList;
  });
};

module.exports = {
  key: "emptyLegs",

  noun: "Empty Legs",
  display: {
    label: "Find empty legs`",
    description: "Finds operator aircraft by unique id",
    hidden: false
  },

  operation: {
    inputFields: [
      {
        key: "from",
        type: "string",
        label: "From date",
        helpText: "Numeric unique identificator of aircraft in Leon",
        required: false
      }
    ],

    perform: getEmptyLegs
  }
};
