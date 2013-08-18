# Trimmed value binding for knockout

[![Build status](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.trimmedValue.png)](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.trimmedValue)

## Usage


```html
<input type="text" data-bind="trimmedValue : myObservable" >
```


```js
ko.applyBindings({
	myObservable : ko.observable()
});
```

This binding is written in AMD. Just require it to init it. It will return the binding object and you will have to attach it to the desired knockout binding name yourself. This is to prevent conflict with another bindings. You can for instance do this in a custom knockout module that combines knockout and your custom bindings.

```js
define('knockout', ['bindings/trimmedValue', 'bindings/otherbinding',  'libs/knockout'], function(trimmedValue, otherbinding, ko){
	ko.bindingHandlers.trimmedValue = trimmedValue;
	ko.bindingHandlers.otherbinding = otherbinding;
	return ko;
});
```

Now you can use your customized knockout in your project.

```js
define(['knockout'], function(ko){
	//use your custom knockout
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

    npm install
    grunt bower //this is to install all bower packages

You can now use grunt to run tests, lint etc.

    grunt
