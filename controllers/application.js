Bustle.ApplicationController = Ember.Controller.extend({
  showMenu: false,
  actions: {
    toggleMenuOn: function() {
      this.set('showMenu', true);
    },    
    toggleMenuOff: function() {
      this.set('showMenu', false);
    }
  }
});
