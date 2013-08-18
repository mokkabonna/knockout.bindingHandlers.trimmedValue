define(['knockout', 'jquery', 'js/trimmedValue'], function(ko, $, trimmedValue) {
	'use strict';
	var model, input;
	module('General');

	test('does not attach itself to knockout automatically', function() {
		ok(!ko.bindingHandlers.number);
	});

	test('returns update and init functions', function() {
		ok(trimmedValue.update);
		ok(trimmedValue.init);
	});

	//attach it to knockout for the remainder of the test
	ko.bindingHandlers.trimmedValue = trimmedValue;

	module('Binding', {
		fixture: '<input id="input1" data-bind="trimmedValue : value" />',
		setup: function() {
			model = {
				value: ko.observable()
			};

			input = $('#input1');

			ko.applyBindings(model);
		},
		teardown: function() {

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
