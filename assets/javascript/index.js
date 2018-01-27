
//Counters------------------------------------------------------------

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(commaSeparateNumber(Math.floor(this.countNum)));
    },
    complete: function() {
      $this.text(commaSeparateNumber(this.countNum));
      //alert('finished');
    }

  });  

});  

function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}


// number of drops created.
var nbDrop = 1200; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

  for( i=1;i<nbDrop;i++) {
  var dropLeft = randRange(0,1400);
  var dropTop = randRange(-1000,1200);


  $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
  $('#drop'+i).css('left',dropLeft);
  $('#drop'+i).css('top',dropTop);
  }

}
// Make it rain
createRain();

