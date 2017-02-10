## Separation of Concerns

Web applications are made of three parts: HTML, CSS, and Javascript.
Organizationally, it is useful to try and respect what has come to be
known as the 'separation of concerns' between these file types. What
is the separation of concerns? A strategy for keeping code of similar
functionality bundled together so that we know where to look if we
need to, e.g., change the look of this element or the behavior of
that field.

Here's a simple web application which adheres to the separation
of concerns:

### HTML defines an application's structure/content/semantics:
> index.html  

```html
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 id="pagehead">Header content which has the ID 'pagehead'</h1>
    <section>
      <p>This is a paragraph element... Paragraphs live here.</p>
      <p>Check out the 'section' tag this is wrapped in! It demarcates a section of the page's content</p>
      <button>some button</button>
    </section>
    <script src="behavior.js"></script>
  </body>
</html>
```

### CSS defines an application's styling/presentation:
> style.css  

```css
/* Here lives the style of any 'body' HTML elements */
body {
  padding: 0px;
}

/* Here lives the style of any 'h1' HTML elements which have the ID 'pagehead' */
h1#pagehead {
  font-family: helvetica, arial, sans-serif;
}
```

### Javascript defines an application's behavior and interactivity:
> behavior.js  

```javascript
/** Create an alert box when any button is clicked which tells us the HTML target of the event */
$("button").click(function(ev) {
  alert(ev.target);
});
```

By making sure to keep the behavioral concerns in javascript, the
styling concerns within CSS and the structural, semantic concerns within
HTML, we make it easier to reason about where we will need to make a
change if something isn't doing what we would like it to.

