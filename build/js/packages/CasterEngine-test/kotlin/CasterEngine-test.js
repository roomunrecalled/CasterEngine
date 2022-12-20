(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './CasterEngine.js', './kotlin-kotlin-test-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./CasterEngine.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof CasterEngine === 'undefined') {
      throw new Error("Error loading module 'CasterEngine-test'. Its dependency 'CasterEngine' was not found. Please, check whether 'CasterEngine' is loaded prior to 'CasterEngine-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CasterEngine-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'CasterEngine-test'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CasterEngine-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'CasterEngine-test'.");
    }
    root['CasterEngine-test'] = factory(typeof this['CasterEngine-test'] === 'undefined' ? {} : this['CasterEngine-test'], CasterEngine, this['kotlin-kotlin-test-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_io_itch_roomunrecalled_CasterEngine, kotlin_kotlin_test, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var greet = kotlin_io_itch_roomunrecalled_CasterEngine.$_$.a;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var classMeta = kotlin_kotlin.$_$.d;
  var suite = kotlin_kotlin_test.$_$.b;
  var test = kotlin_kotlin_test.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function TestClient() {
  }
  TestClient.prototype.testGreet_69hefa_k$ = function () {
    var tmp = greet();
    assertEquals$default('world', tmp, null, 4, null);
  };
  TestClient.$metadata$ = classMeta('TestClient');
  function test_fun_izoufj() {
    suite('TestClient', false, test_fun$TestClient_test_fun_5kvb6p);
  }
  function test_fun$TestClient_test_fun_5kvb6p() {
    test('testGreet', false, test_fun$TestClient_test_fun$testGreet_test_fun_xee4jh);
    return Unit_getInstance();
  }
  function test_fun$TestClient_test_fun$testGreet_test_fun_xee4jh() {
    var tmp = new TestClient();
    tmp.testGreet_69hefa_k$();
    return Unit_getInstance();
  }
  //region block: tests
  (function () {
    suite('', false, function () {
      test_fun_izoufj();
    });
  }());
  //endregion
  return _;
}));

//# sourceMappingURL=CasterEngine-test.js.map
