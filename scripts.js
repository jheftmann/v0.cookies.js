$(document).ready(function(){

  v0cookies = function() {
    if (Cookies.get('cookies') == undefined) {
      // no cookies – do this stuff
      $('h1').append('Welcome!');
      // now set cookies
      Cookies.set('cookies', 'seen');
    } else {
      // cookies - do other stuff
      $('h1').append('Hi, again!');
    }
  }

  v0cookies();

});
