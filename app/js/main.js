(function() {

	// Configure RequireJS so it resolves relative module paths from the `src` folder.
	require.config({
		baseUrl: "",
		paths: {
			knockout: 'vendor/knockout/index'
		}
	});


	require(['knockout', 'js/trimmedValue'], function(ko, trimmedValue) {
		ko.bindingHandlers.trimmedValue = trimmedValue;
		var viewModel = {
			value: ko.observable()
		};

		ko.applyBindings(viewModel);
	});
}());
