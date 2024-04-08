// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cbLdP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signIn", ()=>signIn);
var _core = require("@xatom/core");
var _supbase = require("../supbase");
var _supbaseDefault = parcelHelpers.interopDefault(_supbase);
var _config = require("../../config");
const signIn = ()=>{
    const form = new (0, _core.WFFormComponent)(`[xa-type=main-form]`);
    const googleBtn = form.getChildAsComponent(`[xa-type="google-btn"]`);
    googleBtn.on("click", ()=>{
        (0, _supbaseDefault.default).auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: (0, _config.SUPABASE_REDIRECT_URL)
            }
        });
    });
    form.onFormSubmit((data)=>{
        form.showForm();
        form.disableForm();
        form.updateSubmitButtonText("Please wait...");
        (0, _supbaseDefault.default).auth.signInWithPassword({
            email: data.email,
            password: data.password
        }).then((data)=>{
            if (data.error) {
                form.updateTextViaAttrVar({
                    error: data.error.message || "Unable to login please try again"
                });
                form.showErrorState();
                form.updateSubmitButtonText("Login");
                return;
            }
            form.updateSubmitButtonText("Redirecting...");
            (0, _core.navigate)("/dashboard/task-list");
        }).catch((err)=>{
            form.updateTextViaAttrVar({
                error: err.message || "Unable to login please try again"
            });
            form.showErrorState();
            form.updateSubmitButtonText("Login");
        }).finally(()=>{
            form.enableForm();
        });
    });
};

},{"@xatom/core":"8w4K8","../supbase":"anyOU","../../config":"in6u0","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"in6u0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SUPABASE_REDIRECT_URL", ()=>SUPABASE_REDIRECT_URL);
const SUPABASE_REDIRECT_URL = `${location.protocol}//${location.host}/auth/verify`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire89a0")

//# sourceMappingURL=signIn.e51c192a.js.map
