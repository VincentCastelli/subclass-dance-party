var makeFadedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fadedDancer fade');
  // this.$node.attr('id', 'fade');
};

makeFadedDancer.prototype = Object.create(makeDancer.prototype);

makeFadedDancer.prototype.constructor = makeFadedDancer;

makeFadedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node = $('<img class="fadedDancer" src="/Users/student/code/hrsf95-subclass-dance-party/assets/louiseBelcher1.gif"/>');
  // console.log(this);
};
