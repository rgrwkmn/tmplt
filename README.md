# Tmplt
## Bare minimum JS templating.
So far this has only been tested in the browser with RequireJS for AMD.   

### Usage
Get this HTML as text from the page, load it via the RequireJS text plugin or any way you can to get it as a string in your JS. For the purpose of my example below it is magically returned by my undeclared function `getMyTemplateString`.
```html
<div id="tmplt-{id}">
    <h1>{name}</h1>
    <p>{description}</p>
</div>
```

Require the tmplt function, get the template string, declare the template data and run it through tmplt.
```javascript
var tmplt = require('tmplt');

var str = getMyTemplateString();

var data = {
  id: 'yoyoyo',
  name: 'Joey',
  description: 'Eeeeeeeyyyyyyy #thumbsup'
};

var html = tmplt(str, data);
```

Result string in the html variable:
```html
<div id="tmplt-yoyoyo">
    <h1>Joey</h1>
    <p>Eeeeeeeyyyyyyy #thumbsup</p>
</div>
```
