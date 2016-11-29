import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: true,
  localClassNameBindings: ['isSelected:is-selected']
});
