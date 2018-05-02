var makeShimmyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shimmyDancer');
};

makeShimmyDancer.prototype = Object.create(makeDancer.prototype);

makeShimmyDancer.prototype.constructor = makeShimmyDancer;

makeShimmyDancer.prototype.step = function() {
  // console.log(this);
  makeDancer.prototype.step.call(this);
  this.$node = $('<img class="fadedDancer" src="/Users/student/code/hrsf95-subclass-dance-party/assets/tinaBelcher.gif"/>');
  this.$node.animate({ height: '300px'}, "slow");
  this.$node.animate({ width: '300px'}, "slow");
  this.$node.animate({ height: '100px'}, "slow");
  this.$node.animate({ width: '100px'}, "slow");
};
