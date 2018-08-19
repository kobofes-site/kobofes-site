/* eslint no-undef: 0, new-cap: 0, no-unused-vars: 0 */
const fp = new fullpage('#fullpage', {
  sectionsColor: ['#000', '#ff9090', '#ffcc99', '#99fd99', '#99ccff', '#aabbcc'],
  parallax: true,
  loopHorizontal: true,
  loopBottom: false,
  loopTop: false,
  recordHistory: false,
  // On mobile, hide controlarrow will be better
  // But on PC, this will be disable to scroll side page
  // Plans:
  //   Split web page; mobile, PC
  // controlArrows: false,
});
