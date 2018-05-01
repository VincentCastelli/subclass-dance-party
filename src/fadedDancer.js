var makeFadedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fadedDancer');
  this.$node.attr('id', 'fade');
};

makeFadedDancer.prototype = Object.create(makeDancer.prototype);

makeFadedDancer.prototype.constructor = makeFadedDancer;

makeFadedDancer.prototype.step = function() {
  // console.log(this);
  makeDancer.prototype.step.call(this);
  // $('#fade').fadeTo(1000, 0.4);
};
