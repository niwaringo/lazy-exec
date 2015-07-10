<<<<<<< HEAD
To wait for the execution until the specified DOM appears.

## INSTALL
### npm && browserify

```bash
npm install lazy-exec
```

```javascript
var lazyExec = require("lazy-exec");
```

### html script
download hrere.

```html
<script src="path/to/lazyexec.standalone.js"></script>
```

### USAGE
```javascript
lazyExec("script[src^='https://code.jquery.com/']", function(error, element) {
  // element is HTMLScriptElement
  assert.strictEqual(element.src, "https://code.jquery.com/jquery.js");
});

var jquery = document.createElement("script");
jquery.src = "https://code.jquery.com/jquery.js";
document.head.appendChild(jquery);
```
=======
# lazy-exec
To wait for the execution until the specified DOM appears.
>>>>>>> 22790138a66408b95c0ca3cc023f33054607f953
