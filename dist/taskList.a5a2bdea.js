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
})({"9fECp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "taskList", ()=>taskList);
var _core = require("@xatom/core");
var _auth = require("../auth");
var _supbase = require("../supbase");
var _supbaseDefault = parcelHelpers.interopDefault(_supbase);
const renderLogoutBtn = ()=>{
    const btn = new (0, _core.WFComponent)(`[xa-type=cta-btn]`);
    btn.on("click", (e)=>{
        btn.setTextContent("Please wait...");
        e.preventDefault();
        (0, _auth.logout)();
    });
    btn.setTextContent("Logout");
};
const taskList = ()=>{
    renderLogoutBtn();
    const form = new (0, _core.WFFormComponent)(`[xa-type="task-list"]`);
    let taskList = [];
    const list = new (0, _core.WFDynamicList)(`[xa-type="list"]`, {
        rowSelector: `[xa-type="item"]`,
        emptySelector: `[xa-type="list-empty"]`,
        loaderSelector: `[xa-type="list-loading"]`
    });
    let isLoading = true;
    const fetch = ()=>{
        isLoading = true;
        form.disableForm();
        list.changeLoadingStatus(true);
        (0, _supbaseDefault.default).from("Task").select().then((data)=>{
            console.log(data);
            form.enableForm();
            taskList = data.data.sort((a, b)=>a.id - b.id);
            list.changeLoadingStatus(false);
            list.setData(taskList);
            isLoading = false;
        });
    };
    const addTask = (task)=>{
        isLoading = true;
        form.disableForm();
        list.changeLoadingStatus(true);
        (0, _supbaseDefault.default).from("Task").insert({
            task: task,
            done: false,
            email: (0, _auth.userAuth).getUser().email
        }).then((data)=>{
            if (data.error) {
                form.enableForm();
                alert(data.error.message || "Something went wrong!");
                isLoading = false;
                return;
            }
            form.resetForm();
            fetch();
        });
    };
    const changeTaskStatus = (taskId, status)=>{
        isLoading = true;
        form.disableForm();
        list.changeLoadingStatus(true);
        (0, _supbaseDefault.default).from("Task").update({
            done: status
        }).eq("id", taskId).eq("email", (0, _auth.userAuth).getUser().email).then((data)=>{
            if (data.error) {
                form.enableForm();
                alert(data.error.message || "Something went wrong!");
                isLoading = false;
                return;
            }
            form.resetForm();
            fetch();
        });
    };
    const deleteTask = (taskId)=>{
        isLoading = true;
        form.disableForm();
        list.changeLoadingStatus(true);
        (0, _supbaseDefault.default).from("Task").delete().eq("id", taskId).eq("email", (0, _auth.userAuth).getUser().email).then((data)=>{
            if (data.error) {
                form.enableForm();
                alert(data.error.message || "Something went wrong!");
                isLoading = false;
                return;
            }
            form.resetForm();
            fetch();
        });
    };
    list.rowRenderer(({ rowData, rowElement })=>{
        const { doneBtn, deleteBtn, taskText } = rowElement.getManyChildAsComponents({
            doneBtn: "[xa-type=done]",
            deleteBtn: "[xa-type=delete]",
            taskText: `[xa-type=item-text]`
        });
        rowElement.updateTextViaAttrVar({
            "task-text": rowData.task
        });
        if (rowData.done) {
            doneBtn.addCssClass("active");
            taskText.addCssClass("active");
        } else {
            doneBtn.removeCssClass("active");
            taskText.removeCssClass("active");
        }
        doneBtn.on("click", ()=>{
            if (isLoading) return;
            changeTaskStatus(rowData.id, !rowData.done);
        });
        deleteBtn.on("click", ()=>{
            if (isLoading) return;
            deleteTask(rowData.id);
        });
        return rowElement;
    });
    list.setData([]);
    form.onFormSubmit((data)=>{
        if (!data.task || data.task.trim().length === 0) return;
        addTask(data.task);
    });
    list.emptyRenderer((el)=>{
        if (isLoading) return null;
        return el;
    });
    fetch();
};

},{"@xatom/core":"8w4K8","../auth":"du3Bh","../supbase":"anyOU","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire89a0")

//# sourceMappingURL=taskList.a5a2bdea.js.map
