const authentication = require("./authentification");
const aircraftSearch = require("./searches/aircraft");
const emptyLegsSearch = require("./searches/emptyLegs");
const scheduleSearch = require("./searches/schedule");

const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require("../package.json").version,
  platformVersion: require("zapier-platform-core").version,

  authentication: authentication.definition,

  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [authentication.attachAccessToken],

  afterResponse: [],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {},

  // If you want your trigger to show up, you better include it here!
  triggers: {},

  // If you want your searches to show up, you better include it here!
  searches: {
    [aircraftSearch.key]: aircraftSearch,
    [emptyLegsSearch.key]: emptyLegsSearch,
    [scheduleSearch.key]: scheduleSearch
  },

  // If you want your creates to show up, you better include it here!
  creates: {}
};

// Finally, export the app.
module.exports = App;
