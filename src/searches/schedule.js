const apiRequest = require('../misc/apiRequest');
const scheduleQuery = require('../fixtures/queries/schedule');

const getSchedule = (z, bundle) => {
  return apiRequest(z, bundle.authData, scheduleQuery, { from: bundle.inputData.from, end: bundle.inputData.end })
    .then(response => {
      const data = z.JSON.parse(response.content).data;
      return data.flightList;
    });
}

module.exports = {
  key: 'schedule',

  noun: 'Schedule',
  display: {
    label: `Get operator's flights`,
    description: 'Finds operator flights between 2 dates',
    hidden: false
  },

  operation: {

    inputFields: [
      {
        key: 'from',
        type: 'string',
        label: 'From',
        helpText: 'Starting date time in ISO 8601 format, ex. 2019-06-05, 2019-06-05T12:00:00',
        required: true
      },
      {
        key: 'end',
        type: 'string',
        label: 'End date time',
        helpText: 'End date time in ISO 8601 format, ex. 2019-06-05, 2019-06-05T12:00:00',
        required: true
      }
    ],

    perform: getSchedule,
  }
};