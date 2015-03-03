Bustle.HeadlinesController = Ember.Controller.extend({
  displayPicture: "img/man-bun.jpg",
  actions: {
    forwardPicture: function() {
      var images = ["img/man-bun.jpg", "img/facial-hair.jpg", "img/hip.jpg", "img/granola.png"];
      var i = images.indexOf(this.get("displayPicture"));

      if (i < 3) {
        this.set("displayPicture", images[i + 1]);
      } else {
        this.set("displayPicture", "img/man-bun.jpg")
      }
    },
    backPicture: function() {
      var images = ["img/man-bun.jpg", "img/facial-hair.jpg", "img/hip.jpg", "img/granola.png"];
      var i = images.indexOf(this.get("displayPicture"));

      if (i > 0) {
        this.set("displayPicture", images[i - 1]);
      } else {
        this.set("displayPicture", "img/granola.png")
      }
    }
  }
});
