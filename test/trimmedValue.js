define(['knockout', 'jquery', 'js/trimmedValue'], function(ko, $, trimmedValue) {
	'use strict';
	var model, input;
	module('General');

	test('does not attach itself to knockout automatically', function() {
		ok(!ko.bindingHandlers.trimmedValue);
	});

	test('returns update and init functions', function() {
		ok(trimmedValue.update);
		ok(trimmedValue.init);
	});

	//attach it to knockout for the remainder of the test

	module('Binding', {
		fixture: '<input id="input1" data-bind="trimmedValue : value" />',
		setup: function() {
			ko.bindingHandlers.trimmedValue = trimmedValue;
			model = {
				value: ko.observable()
			};

			input = $('#input1');

			ko.applyBindings(model);
		}
	});

	test('the input is trimmed on init if observable value is not', function() {
		model.value(' foo ');
		equal(input.val(), 'foo');
	});

	test('when value is changed the observable is updated and trimmed', function() {
		input.val(' test ');
		input.trigger('change');
		equal(model.value(), 'test');
	});

});
