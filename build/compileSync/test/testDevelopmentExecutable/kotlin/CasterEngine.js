(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root.CasterEngine = factory(typeof CasterEngine === 'undefined' ? {} : CasterEngine);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function greet() {
    return 'world';
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = greet;
  //endregion
  return _;
}));

//# sourceMappingURL=CasterEngine.js.map
