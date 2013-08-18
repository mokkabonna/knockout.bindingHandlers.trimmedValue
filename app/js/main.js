(function() {

	// Configure RequireJS so it resolves relative module paths from the `src` folder.
	require.config({
		baseUrl: "",
		paths: {
			knockout: 'vendor/knockout/index',
			jquery: 'js/jquery.noglobals'
		}
	});


	require(['knockout', 'js/trimmedValue'], function(ko, trimmedValue) {
		ko.bindingHandlers.trimmedValue = trimmedValue;
		var viewModel = {
			value: ko.observable('foo ')
		};

		viewModel.json = ko.computed(function() {
			return JSON.stringify(viewModel.value(), null, 2);
		});

		ko.applyBindings(viewModel);
	});
}());
