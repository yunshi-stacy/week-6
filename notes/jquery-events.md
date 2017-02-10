## jQuery Events

This week we're looking more closely at jQuery's abilities and
continuing our exploration of asynchronous (i.e. happening outside the
execution order of the code you're writing) behaviors. Events are one of
the most common ways to wire up applications that respond to input and
their behavior can be understood by analogy to jQuery ajax objects:
because we can't be sure about when (or if) an ajax call will return, we
attach a "callback" using `.done(myCallbackFunction)` (a callback is a
function which will be called upon the completion of a process or
event).

An ajax callback:
```javascript
var callback = function(response) {
  console.log("Got a response:", response);
};

// We attach the callback with .done below
$.ajax("https://myveryseriouswebsite.tv").done(callback)
```

A 'click' event callback will take a bit more setup... Here's the HTML
file our script will reference:
```html
<html>
  <body>
    <button>A boring button</button>
  </body>
</html>
```

In the javascript:
```javascript
var callback = function(event) {
  console.log(event);
};

// We attach the callback with .click below
$("button").click(callback);
```

Whereas the ajax call will fire its callback function only as soon as
it gets a response (or an error, in case the request is taking too
long), event binding will fire its callback only when the bound event
occurs.


## Writing event callbacks

In the examples provided in the previous section, you may have noted
that an `ajax` callback expects response text (which it can then
parse or work with as a string) while the `event` callback expects
something we've labelled 'event'. By design, jQuery has a standardized
[event object](http://api.jquery.com/category/events/event-object/)
which carries useful information about the event being fired. All
event callbacks should expect this object as their first argument.


## Unbinding events

The [unbind method](https://api.jquery.com/unbind/) is particularly interesting
because it allows us to tell our programs that we no longer need a
previously registered event/callback pairing.

This can be useful if you're binding events programmatically and need to
make sure you don't crash your application by firing thousands of them
at once. In general, though, it is best to be conservative in your uses
of event binding - if you are not, it is very likely that you'll see a
marked increase in application complexity.


## Learn more
For a complete list of events made available for binding through the
jQuery API, [see here](https://api.jquery.com/category/events/).

