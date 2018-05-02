var makeFadedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="fadedDancer fade" src="/Users/student/code/hrsf95-subclass-dance-party/assets/louiseBelcher1.gif"/>');
  this.setPosition(top, left);
};

makeFadedDancer.prototype = Object.create(makeDancer.prototype);
makeFadedDancer.prototype.constructor = makeFadedDancer;

makeFadedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
