import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['listr-list__listr-item'],
  done: false,
  classNameBindings: ['done:listr-list__listr-item--done'],
  click: function () {
    this.toggleProperty('done');
  }
});
