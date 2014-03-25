require.config({
  baseUrl: '/base',
  paths: {
    knockout: 'bower_components/knockout.js/knockout',
    requirejs: 'bower_components/requirejs/require',
    jquery: 'bower_components/jquery/dist/jquery'
  }
});

require(['spec/trimmedvalue'], window.__karma__.start);
