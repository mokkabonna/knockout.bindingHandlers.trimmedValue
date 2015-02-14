require.config({
  baseUrl: '/base',
  paths: {
    knockout: 'bower_components/knockout/dist/knockout',
    requirejs: 'bower_components/requirejs/require',
    jquery: 'bower_components/jquery/dist/jquery'
  }
});

require(['spec/trimmedValue'], window.__karma__.start);
