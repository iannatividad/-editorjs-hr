# Hr Tool for Editor.js

Hr Tool for the [Editor.js]

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev @editorjs/hr
```

Include module at your application

```javascript
const Hr = require("@ignweb/hr");
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    hr: Hr,
  }

  ...
});
```

## Config Params

This Tool has no config params

## Output data

This Tool returns empty object.

```json
{
    "type": "hr",
    "data": {}
}
```
