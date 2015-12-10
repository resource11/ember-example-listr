import DS from 'ember-data';
import ENV from 'ember-starter/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.apiHost
});
