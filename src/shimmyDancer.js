var makeShimmyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.addClass('shimmyDancer');
  this.$node = $('<img class="shimmyDancer" src="/Users/student/code/hrsf95-subclass-dance-party/assets/tinaBelcher.gif"/>');
  this.setPosition(top, left);
};

makeShimmyDancer.prototype = Object.create(makeDancer.prototype);

makeShimmyDancer.prototype.constructor = makeShimmyDancer;

makeShimmyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
 
  this.$node.animate({ height: '300px'}, 'slow');
  this.$node.animate({ width: '300px'}, 'slow');
  this.$node.animate({ height: '100px'}, 'slow');
  this.$node.animate({ width: '100px'}, 'slow');
};
