var makeShimmyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeShimmyDancer.prototype = Object.create(makeDancer.prototype);

makeShimmyDancer.prototype.constructor = makeShimmyDancer;

makeShimmyDancer.prototype.step = function() {
  console.log(this);
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};