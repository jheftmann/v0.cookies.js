v0cookies = function() {
  if (Cookies.get('cookies') == undefined) {
    // no cookies – do this stuff

    // now set cookies
    Cookies.set('cookies', 'seen');
  } else {
    // cookies - do other stuff

  }
}
