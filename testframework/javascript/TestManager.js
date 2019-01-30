(function(){

  var jasmineEnv = jasmine.getEnv();
  var reporter = new jasmine.TestReporter();
  jasmineEnv.updateInterval = 250;
  jasmineEnv.addReporter(reporter);

  window.initiateTest = function() {
    var testPanel = document.createElement('div');
    testPanel.setAttribute('id', 'test-panel');
    document.body.appendChild(testPanel);
    reporter.setReportNode(testPanel);
    jasmineEnv.execute();
  }

})();