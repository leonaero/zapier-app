//@flow
import type { DocumentNode } from "graphql";

const apiRequest = require("../misc/apiRequest");
const scheduleQuery: DocumentNode = require("../fixtures/queries/schedule");

const getSchedule = (z: Zapier, bundle: GetScheduleBundle) => {
  return apiRequest<GetcheduleQueryVariables, GetcheduleQuery>(
    z,
    bundle.authData,
    scheduleQuery,
    {
      from: bundle.inputData.from,
      end: bundle.inputData.end
    }
  ).then(response => {
    return [response];
  });
};

module.exports = {
  key: "schedule",

  noun: "Schedule",
  display: {
    label: `Get operator's flights`,
    description: "Finds operator flights between 2 dates",
    hidden: false
  },

  operation: {
    inputFields: [
      {
        key: "from",
        type: "string",
        label: "From",
        helpText:
          "Starting date time in ISO 8601 format, ex. 2019-06-05, 2019-06-05T12:00:00",
        required: true
      },
      {
        key: "end",
        type: "string",
        label: "End date time",
        helpText:
          "End date time in ISO 8601 format, ex. 2019-06-05, 2019-06-05T12:00:00",
        required: true
      }
    ],

    perform: getSchedule
  }
};
