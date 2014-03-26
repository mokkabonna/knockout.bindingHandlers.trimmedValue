define(['knockout', 'jquery', 'src/trimmedValue'], function(ko, $) {

  describe('Trimmedvalue', function() {
    var viewModel;
    var element;
    var root;

    before(function() {
      root = document.createElement('div');
      root.innerHTML = '<input id="input" data-bind="trimmedValue:obs">';
      document.body.appendChild(root);
      element = $('#input');
    });

    beforeEach(function() {
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(element[0])).to.be(viewModel);
    });

    it('the input is trimmed on init if observable value is not', function() {
      viewModel.obs(' foo ');
      expect(element.val()).to.be('foo');
    });

    it('when value is changed the observable is updated and trimmed', function() {
      element.val(' test ');
      element.trigger('change');
      expect(viewModel.obs()).to.be('test');
    });

  });
});
