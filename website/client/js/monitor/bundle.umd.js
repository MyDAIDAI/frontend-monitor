(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var pref = {
    init: (cb) => {
      cb();
    }
  };

  pref.init(() => {
    console.log('pref init');
  });

})));
//# sourceMappingURL=bundle.umd.js.map
