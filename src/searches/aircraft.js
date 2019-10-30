const apiRequest = require('../misc/apiRequest');
const aircraftListQuery = require('../fixtures/queries/aircraft.js');

const getAircraft = (z, bundle) => {
  return apiRequest(z, bundle.authData, aircraftListQuery, { id: bundle.inputData.id })
    .then(response => {
      const data = z.JSON.parse(response.content).data;
      return [data.aircraft];
    });
}

module.exports = {
  key: 'aircraft',

  noun: 'Aircraft',
  display: {
    label: 'Find aircraft in the Leon',
    description: 'Finds operator aircraft by unique id',
    hidden: false
  },

  operation: {

    inputFields: [
      {
        key: 'id',
        type: 'number',
        label: 'Aircraft unique id',
        helpText: 'Numeric unique identificator of aircraft in Leon',
        required: true
      }
    ],

    perform: getAircraft,
  }
};