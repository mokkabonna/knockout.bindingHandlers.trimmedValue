define(['knockout', 'jquery'], function(ko, $) {
	'use strict';
	return {
		init: function(element, valueAccessor) {
			var observable = valueAccessor();
			$(element).on('change', function() {
				observable(element.value.trim());
			});
		},
		update: function(element, valueAccessor) {
			element.value = (ko.utils.unwrapObservable(valueAccessor()) || '').trim();
		}
	};
});
