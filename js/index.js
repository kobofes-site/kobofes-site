new fullpage('#fullpage', {
  navigation: true,
  anchors: ['home', 'about-us', 'contact'],
  parallax: true,
  onLeave: function (origin, destination, direction) {
    console.log("Leaving section" + origin.index);
  },
});
