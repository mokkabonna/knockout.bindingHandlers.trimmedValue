/* jshint boss:true*/
define(['knockout', 'jquery', 'module'], function(ko, $, module) {
  'use strict';

  var bindingName = module.config().name || 'trimmedValue';

  return ko.bindingHandlers[bindingName] = {
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
