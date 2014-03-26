# Trimmed value binding for knockout

[![Build status](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.trimmedValue.png)](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.trimmedValue)

## Usage

HTML

    <input data-bind="trimmedValue: myobs" >

JS

    ko.applyBindings({
        myobs : ko.observable()
    });


This binding is written in AMD. It returns the binding object. It will attach itself to `knockout.bindingHandlers.trimmedValue` once required for the first time. This can be overridden with a config section in your requirejs config like shown below.

```
requirejs.config({
    config: {
        'bower_components/knockout.bindingHandlers.trimmedValue/src/trimmedValue': {
            name: 'someOtherName'
        }
    }
});
```

## Behaviour

Trims the value in the input before updating the observable.

## Demo

There is a demo at http://mokkabonna.github.io/knockout.bindingHandlers.trimmedValue

## Dependencies

- knockout

For accurate versions check bower.json

## Contributing

Clone, then run (assuming you have node)

    npm install & bower install

You can now use grunt develop for a ready made watch task for development. Tests, linting..

    grunt develop
