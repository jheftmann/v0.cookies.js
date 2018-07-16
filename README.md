This just saves a step or two and clarifies some assumptions made when using [JavaScript Cookie](https://github.com/js-cookie/js-cookie). You’ll need to go there and download `js-cookie.js`.

[DEMO](https://v0-cookies.netlify.com)


1. First, link to `js-cookies.js` in your `<head>`. For example:
```
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
```

(This specific implementation uses jQuery so include that as well if you want.)


2. Next, link to `v0.cookies.js`.
```
<script src="v0-cookies.js"></script>
```


3. v0 Cookies will add a class to the `<body>` based on cookie status:

- `v0-cookies-new`
- `v0-cookies-returning`

You can use this scope to change the display of elements on your page.

For more complex functionality, you can also write your own functions in the conditionals in `v0.cookies.js`. For example:

```
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
```

4. Finally, in your JavaScript, call `v0cookies();`

5. Chrome doesn’t show cookies locally so run `python -m SimpleHTTPServer 8000` and go to http://localhost:8000/

Voila!

![delete cookies?](delete-cookies.png)
