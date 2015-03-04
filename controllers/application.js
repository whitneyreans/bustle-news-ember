Bustle.ApplicationController = Ember.Controller.extend({
  showMenu: false,
  actions: {
    toggleMenu: function() {
      this.set('showMenu', true);
      // if (showMenu = true) {
      //   this.set('showMenu', false);
      // } else {
      //   this.set('showMenu', true);
      // }
    }
  }
});
