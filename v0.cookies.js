v0cookies = function() {

  if (Cookies.get('cookies') == undefined) {
    // no cookies – do this stuff
    // console.log('new visitor');

    $('body').addClass('v0-cookies-new');

    // now set cookies
    Cookies.set('cookies', 'seen');
  } else {
    // yes cookies - do other stuff
    // console.log('returning visitor')

    $('body').addClass('v0-cookies-returning');

  }
}
