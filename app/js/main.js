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
			value: ko.observable(' untrimmed original value '),
			value1: ko.observable('trimmed value')
		};

		viewModel.json = ko.computed(function() {
			var json = ko.toJS(viewModel);
			delete json.json;
			return JSON.stringify(json, null, 2);
		});

		ko.applyBindings(viewModel);
	});
}());
