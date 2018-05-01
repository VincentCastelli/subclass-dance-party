var makeFadedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fadedDancer');
  this.$node.attr('id', 'faid');
};

makeFadedDancer.prototype = Object.create(makeDancer.prototype);

makeFadedDancer.prototype.constructor = makeFadedDancer;

makeFadedDancer.prototype.step = function() {
  // console.log(this);
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
  $('.fadedDancer').mouseover(function() {
    $('#faid').fadeTo(1000, 0.4);
  });
  // $('.fadedDancer').fadeTo(1000, 0.4);

  // $(document).ready(function(){
  //   $("button").click(function(){
  //       $("p").fadeTo(1000, 0.4);
  //   });
};
