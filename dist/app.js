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
})({"jeTtx":[function(require,module,exports) {
var _core = require("@xatom/core");
var _routes = require("./routes");
var _supbase = require("./modules/supbase");
window.WFDebug = true;
(0, _core.onReady)(()=>{
    (0, _supbase.initSupabase)(()=>{
        (0, _routes.app)();
    });
});

},{"@xatom/core":"8w4K8","./routes":"fnEL6","./modules/supbase":"anyOU"}],"8w4K8":[function(require,module,exports) {
var $iEn1Z$uuid = require("116fc168c31b637d");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $90b1e0f272b5544a$exports = {};
$parcel$export($90b1e0f272b5544a$exports, "WFAuth", ()=>$90b1e0f272b5544a$export$cb2138cd710ea58a);
class $90b1e0f272b5544a$export$cb2138cd710ea58a {
    constructor(config = {}){
        this.config = config;
    }
    isLoggedIn() {
        return !!this.user;
    }
    getRole() {
        return this.role;
    }
    getUser() {
        return this.user;
    }
    getConfig() {
        return this.config;
    }
    logout() {
        this.user = null;
        this.role = null;
        this.config = null;
    }
    setUser(user) {
        this.user = user;
    }
    setRole(role) {
        this.role = role;
    }
    setConfig(config) {
        this.config = config;
    }
}
var $336c7a32b438dc35$exports = {};
$parcel$export($336c7a32b438dc35$exports, "WFAuthMiddleware", ()=>$336c7a32b438dc35$export$42f600804a30f397);
class $336c7a32b438dc35$export$42f600804a30f397 {
    constructor(auth){
        this.auth = auth;
    }
    allowTo(role) {
        return this.auth.getRole() === role;
    }
    disallowedTo(role) {
        return this.auth.getRole() !== role;
    }
    getAuth() {
        return this.auth;
    }
}
var $5ce0995b4e579efe$exports = {};
$parcel$export($5ce0995b4e579efe$exports, "WFComponent", ()=>$5ce0995b4e579efe$export$b8941e06d24ae728);
var $30d957643bf2e67a$exports = {};
var $62881ab850a57a38$exports = {};
$parcel$export($62881ab850a57a38$exports, "debug", ()=>$62881ab850a57a38$export$1c9f709888824e05);
const $62881ab850a57a38$export$1c9f709888824e05 = (...args)=>{
    if (window.WFDebug) console.log(...args);
};
var $9e73fdbf37a9aa00$exports = {};
$parcel$export($9e73fdbf37a9aa00$exports, "getElementByXPath", ()=>$9e73fdbf37a9aa00$export$7ffef3582c93037b);
function $9e73fdbf37a9aa00$export$7ffef3582c93037b(xpath, parent) {
    const result = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}
var $100caf27c28c32c0$exports = {};
$parcel$export($100caf27c28c32c0$exports, "getRouteQueryParams", ()=>$100caf27c28c32c0$export$1346b4a9ff9b6881);
const $100caf27c28c32c0$export$1346b4a9ff9b6881 = ()=>{
    const _data = {};
    new URLSearchParams(location.search).forEach((val, key)=>{
        _data[key] = val;
    });
    return _data;
};
var $e533c87ae7d96e3e$exports = {};
$parcel$export($e533c87ae7d96e3e$exports, "getXPathForChangedChild", ()=>$e533c87ae7d96e3e$export$5fe4b019801f5ef1);
function $e533c87ae7d96e3e$export$5fe4b019801f5ef1(node, parent) {
    const xpathParts = [];
    // Traverse up the DOM tree from the node and generate an XPath expression for each parent element
    while(node && node !== parent && node.nodeType === Node.ELEMENT_NODE){
        let xpath = node.nodeName.toLowerCase();
        // If the element has an ID attribute, add it to the XPath expression
        if (node.hasAttribute("id")) xpath += '[@id="' + node.getAttribute("id") + '"]';
        else if (node.hasAttribute("class")) xpath += '[@class="' + node.getAttribute("class") + '"]';
        // Add the XPath expression for this element to the list
        xpathParts.unshift(xpath);
        // Move up to the parent element
        node = node.parentNode;
    }
    // Combine the XPath parts into a single XPath expression
    return xpathParts.join("/");
}
var $4117225480b0cc44$exports = {};
$parcel$export($4117225480b0cc44$exports, "navigate", ()=>$4117225480b0cc44$export$ff7962acd6052c28);
const $4117225480b0cc44$export$ff7962acd6052c28 = (arg)=>{
    if (typeof arg === "string") window.location.assign(arg);
    else if (typeof arg === "object" && arg.type === "replace") window.location.replace(arg.to);
    else if (typeof arg === "object" && arg.type === "reload") window.location.reload();
};
var $0b3f70b8f06eedca$exports = {};
$parcel$export($0b3f70b8f06eedca$exports, "parse", ()=>$0b3f70b8f06eedca$export$98e6a39c04603d36);
$parcel$export($0b3f70b8f06eedca$exports, "compile", ()=>$0b3f70b8f06eedca$export$ef7acd7185315e22);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToFunction", ()=>$0b3f70b8f06eedca$export$5b9bad9e403cf3d9);
$parcel$export($0b3f70b8f06eedca$exports, "match", ()=>$0b3f70b8f06eedca$export$4659b591c19bdf3d);
$parcel$export($0b3f70b8f06eedca$exports, "pathToRegexp", ()=>$0b3f70b8f06eedca$export$71304158c7e35877);
$parcel$export($0b3f70b8f06eedca$exports, "regexpToFunction", ()=>$0b3f70b8f06eedca$export$968e97c88708237a);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToRegexp", ()=>$0b3f70b8f06eedca$export$9a9303716def6456);
$parcel$export($0b3f70b8f06eedca$exports, "routeMatch", ()=>$0b3f70b8f06eedca$export$6c50148cf1d992bd);
/**
 * Tokenizer results.
 */ /**
 * Tokenize input string.
 */ function $0b3f70b8f06eedca$var$lexer(str) {
    const tokens = [];
    let i = 0;
    while(i < str.length){
        const char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            let name = "";
            let j = i + 1;
            while(j < str.length){
                const code = str.charCodeAt(j);
                if (code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError(`Missing parameter name at ${i}`);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            let count = 1;
            let pattern = "";
            let j = i + 1;
            if (str[j] === "?") throw new TypeError(`Pattern cannot start with "?" at ${j}`);
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError(`Capturing groups are not allowed at ${j}`);
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
            if (!pattern) throw new TypeError(`Missing pattern at ${i}`);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function $0b3f70b8f06eedca$export$98e6a39c04603d36(str, options = {}) {
    const tokens = $0b3f70b8f06eedca$var$lexer(str);
    const { prefixes: prefixes = "./" } = options;
    const defaultPattern = `[^${$0b3f70b8f06eedca$var$escapeString(options.delimiter || "/#?")}]+?`;
    const result = [];
    let key = 0;
    let i = 0;
    let path = "";
    const tryConsume = (type)=>{
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    const mustConsume = (type)=>{
        const value = tryConsume(type);
        if (value !== undefined) return value;
        const { type: nextType, index: index } = tokens[i];
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = ()=>{
        let result = "";
        let value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        const char = tryConsume("CHAR");
        const name = tryConsume("NAME");
        const pattern = tryConsume("PATTERN");
        if (name || pattern) {
            let prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        const value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        const open = tryConsume("OPEN");
        if (open) {
            const prefix = consumeText();
            const name = tryConsume("NAME") || "";
            const pattern = tryConsume("PATTERN") || "";
            const suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name || (pattern ? key++ : ""),
                pattern: name && !pattern ? defaultPattern : pattern,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function $0b3f70b8f06eedca$export$ef7acd7185315e22(str, options) {
    return $0b3f70b8f06eedca$export$5b9bad9e403cf3d9($0b3f70b8f06eedca$export$98e6a39c04603d36(str, options), options);
}
function $0b3f70b8f06eedca$export$5b9bad9e403cf3d9(tokens, options = {}) {
    const reFlags = $0b3f70b8f06eedca$var$flags(options);
    const { encode: encode = (x)=>x, validate: validate = true } = options;
    // Compile all the tokens into regexps.
    const matches = tokens.map((token)=>{
        if (typeof token === "object") return new RegExp(`^(?:${token.pattern})$`, reFlags);
    });
    return (data)=>{
        let path = "";
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            const value = data ? data[token.name] : undefined;
            const optional = token.modifier === "?" || token.modifier === "*";
            const repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError(`Expected "${token.name}" to not be empty`);
                }
                for(let j = 0; j < value.length; j++){
                    const segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                const segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            const typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
        }
        return path;
    };
}
function $0b3f70b8f06eedca$export$4659b591c19bdf3d(str, options) {
    const keys = [];
    const re = $0b3f70b8f06eedca$export$71304158c7e35877(str, keys, options);
    return $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options);
}
function $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options = {}) {
    const { decode: decode = (x)=>x } = options;
    return function(pathname) {
        const m = re.exec(pathname);
        if (!m) return false;
        const { 0: path, index: index } = m;
        const params = Object.create(null);
        for(let i = 1; i < m.length; i++){
            if (m[i] === undefined) continue;
            const key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map((value)=>{
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function $0b3f70b8f06eedca$var$escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function $0b3f70b8f06eedca$var$flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function $0b3f70b8f06eedca$var$regexpToRegexp(path, keys) {
    if (!keys) return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function $0b3f70b8f06eedca$var$arrayToRegexp(paths, keys, options) {
    const parts = paths.map((path)=>$0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options).source);
    return new RegExp(`(?:${parts.join("|")})`, $0b3f70b8f06eedca$var$flags(options));
}
/**
 * Create a path regexp from string input.
 */ function $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options) {
    return $0b3f70b8f06eedca$export$9a9303716def6456($0b3f70b8f06eedca$export$98e6a39c04603d36(path, options), keys, options);
}
function $0b3f70b8f06eedca$export$9a9303716def6456(tokens, keys, options = {}) {
    const { strict: strict = false, start: start = true, end: end = true, encode: encode = (x)=>x, delimiter: delimiter = "/#?", endsWith: endsWith = "" } = options;
    const endsWithRe = `[${$0b3f70b8f06eedca$var$escapeString(endsWith)}]|$`;
    const delimiterRe = `[${$0b3f70b8f06eedca$var$escapeString(delimiter)}]`;
    let route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (const token of tokens)if (typeof token === "string") route += $0b3f70b8f06eedca$var$escapeString(encode(token));
    else {
        const prefix = $0b3f70b8f06eedca$var$escapeString(encode(token.prefix));
        const suffix = $0b3f70b8f06eedca$var$escapeString(encode(token.suffix));
        if (token.pattern) {
            if (keys) keys.push(token);
            if (prefix || suffix) {
                if (token.modifier === "+" || token.modifier === "*") {
                    const mod = token.modifier === "*" ? "?" : "";
                    route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
                } else route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            } else if (token.modifier === "+" || token.modifier === "*") route += `((?:${token.pattern})${token.modifier})`;
            else route += `(${token.pattern})${token.modifier}`;
        } else route += `(?:${prefix}${suffix})${token.modifier}`;
    }
    if (end) {
        if (!strict) route += `${delimiterRe}?`;
        route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
    } else {
        const endToken = tokens[tokens.length - 1];
        const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
        if (!isEndDelimited) route += `(?=${delimiterRe}|${endsWithRe})`;
    }
    return new RegExp(route, $0b3f70b8f06eedca$var$flags(options));
}
function $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options) {
    if (path instanceof RegExp) return $0b3f70b8f06eedca$var$regexpToRegexp(path, keys);
    if (Array.isArray(path)) return $0b3f70b8f06eedca$var$arrayToRegexp(path, keys, options);
    return $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options);
}
function $0b3f70b8f06eedca$var$pathMatch(options = {}) {
    return function(path) {
        var keys = [];
        var re = $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options);
        return function(pathname, params) {
            var m = re.exec(pathname);
            if (!m) return false;
            params = params || {};
            var key, param;
            for(var i = 0; i < keys.length; i++){
                key = keys[i];
                param = m[i + 1];
                if (!param) continue;
                params[key.name] = $0b3f70b8f06eedca$var$decodeParam(param);
                if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
            }
            return params;
        };
    };
}
const $0b3f70b8f06eedca$export$6c50148cf1d992bd = (routeToMatch, route, defaultParams = {}, options = {})=>{
    return $0b3f70b8f06eedca$var$pathMatch(options)(routeToMatch)(route, defaultParams);
};
function $0b3f70b8f06eedca$var$decodeParam(param) {
    try {
        return decodeURIComponent(param);
    } catch (_) {
        throw new Error('failed to decode param "' + param + '"');
    }
}
var $36bdd128d4111a37$exports = {};
$parcel$export($36bdd128d4111a37$exports, "createComponent", ()=>$36bdd128d4111a37$export$60e54eaca7e7fb38);
const $36bdd128d4111a37$export$60e54eaca7e7fb38 = (type)=>{
    return new $5ce0995b4e579efe$export$b8941e06d24ae728(document.createElement(type));
};
$parcel$exportWildcard($30d957643bf2e67a$exports, $62881ab850a57a38$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $9e73fdbf37a9aa00$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $100caf27c28c32c0$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $e533c87ae7d96e3e$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $4117225480b0cc44$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $0b3f70b8f06eedca$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $36bdd128d4111a37$exports);
class $5ce0995b4e579efe$export$b8941e06d24ae728 {
    constructor(query){
        if (typeof query === "string") {
            const el = document.querySelector(query);
            if (el) {
                this.element = el;
                this.updateClone();
            } else throw new Error(`Could not find ${query}`);
        } else if (typeof query === "object" && query instanceof HTMLElement) {
            this.element = query;
            this.updateClone();
        } else if (typeof query === "object" && query instanceof SVGSVGElement) {
            this.element = query;
            this.updateClone();
        } else if (query instanceof $5ce0995b4e579efe$export$b8941e06d24ae728) {
            this.element = query.getElement();
            this.updateClone();
        } else throw new Error(`Could not find ${query}`);
    }
    updateClone() {
        this.cloneEl = this.element.cloneNode(true);
    }
    getElement() {
        return this.element;
    }
    updateTextViaAttrVar(keyPair) {
        const fields = {};
        const addEl = (key, val)=>{
            if (!(key in fields)) fields[key] = [];
            fields[key].push(val);
        };
        if (this.hasAttribute("xa-var")) addEl(this.getAttribute("xa-var"), this.getElement());
        const _els = this.getChildAsComponents(`[xa-var]`);
        _els.forEach((el)=>{
            addEl(el.getAttribute("xa-var"), el.getElement());
        });
        Object.keys(keyPair).forEach((key)=>{
            if (key in fields) fields[key].forEach((d)=>{
                d.textContent = keyPair[key].toString();
            });
        });
    }
    updateTextVariable(keyPair) {
        if (this.cloneEl.childNodes.length === 1 && this.cloneEl.firstChild instanceof Text) Object.keys(keyPair).forEach((key)=>{
            if (this.cloneEl.textContent.includes(`{{${key}}}`)) this.element.textContent = this.cloneEl.textContent.replace(`{{${key}}}`, keyPair[key].toString());
        });
        else {
            const els = Array.from(this.cloneEl.querySelectorAll("*")).map((el)=>Array.from(el.childNodes).filter((node)=>node instanceof Text && node.textContent.trim().length > 0)).flat();
            // console.log(els, this.cloneEl);
            Object.keys(keyPair).forEach((key)=>{
                els.filter((el)=>el.textContent.includes(`{{${key}}}`)).forEach((el)=>{
                    const path = $e533c87ae7d96e3e$export$5fe4b019801f5ef1(el.parentElement, this.cloneEl);
                    const _el = $9e73fdbf37a9aa00$export$7ffef3582c93037b(path, this.element);
                    // console.log(
                    //   el,
                    //   _el,
                    //   " found",
                    //   path,
                    //   el.parentElement,
                    //   this
                    // );
                    if (_el) _el.textContent = el.textContent.replace(`{{${key}}}`, keyPair[key].toString());
                    else console.log(el, _el, "not found", path, el.parentElement, this);
                });
            });
        }
    }
    setAttribute(key, value) {
        this.element.setAttribute(key, value);
    }
    removeAttribute(key) {
        this.element.removeAttribute(key);
    }
    getAttribute(key) {
        return this.element.getAttribute(key);
    }
    hasAttribute(key) {
        return this.element.hasAttribute(key);
    }
    getChildAsComponents(selector) {
        return Array.from(this.element.querySelectorAll(selector)).map((el)=>new $5ce0995b4e579efe$export$b8941e06d24ae728(el));
    }
    getChildAsComponent(selector) {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selector));
    }
    getManyChildAsComponents(selectors) {
        let _els = {};
        Object.keys(selectors).forEach((key)=>{
            _els[key] = new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selectors[key]));
        });
        return _els;
    }
    getCssClass() {
        return Array.from(this.element.classList);
    }
    addCssClass(className) {
        this.element.classList.add(className);
        this.cloneEl.classList.add(className);
    }
    removeCssClass(className) {
        this.element.classList.remove(className);
        this.cloneEl.classList.remove(className);
    }
    replaceCssClass(className, newClassName) {
        this.element.classList.replace(className, newClassName);
        this.cloneEl.classList.replace(className, newClassName);
    }
    toggleCssClass(className) {
        this.element.classList.toggle(className);
        this.cloneEl.classList.toggle(className);
    }
    on(type, listener, options) {
        this.element.addEventListener(type, listener, options);
    }
    off(type, listener, options) {
        this.element.removeEventListener(type, listener, options);
    }
    setText(text) {
        this.getElement().innerText = text.toString();
    }
    getText() {
        return this.getElement().innerText;
    }
    setTextContent(text) {
        this.getElement().textContent = text;
    }
    getTextContent() {
        return this.getElement().textContent;
    }
    setHTML(htmlText) {
        this.getElement().innerHTML = htmlText;
    }
    getHTML() {
        return this.getElement().innerHTML;
    }
    getCloneAsComponent() {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.cloneEl.cloneNode(true));
    }
    setStyle(style = {}) {
        Object.keys(style).forEach((key)=>{
            this.element.style[key] = style[key];
        });
    }
    getStyle() {
        return window.getComputedStyle(this.element);
    }
    appendChild(child) {
        this.element.appendChild(new $5ce0995b4e579efe$export$b8941e06d24ae728(child).getElement());
    }
    remove() {
        this.element.remove();
    }
    removeAllChildren() {
        this.element.replaceChildren();
    }
}
var $0105599dd5ebe189$exports = {};
$parcel$export($0105599dd5ebe189$exports, "WFDynamicList", ()=>$0105599dd5ebe189$export$688e73055717bd51);
class $0105599dd5ebe189$export$688e73055717bd51 extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    showLoadingState = false;
    constructor(query, config){
        super(query);
        if (typeof config.rowSelector === "string") this.rowComponent = this.getChildAsComponent(config.rowSelector);
        else this.rowComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.rowSelector);
        this.rowComponent.remove();
        if (config.loaderSelector) {
            if (typeof config.loaderSelector === "string") this.loaderComponent = this.getChildAsComponent(config.loaderSelector);
            else this.loaderComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.loaderSelector);
            this.loaderComponent.remove();
        }
        if (config.emptySelector) {
            if (typeof config.emptySelector === "string") this.emptyComponent = this.getChildAsComponent(config.emptySelector);
            else this.emptyComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.emptySelector);
            this.emptyComponent.remove();
        }
    }
    rowRenderer(cb) {
        this.rowRendererCB = cb;
    }
    emptyRenderer(cb) {
        this.emptyRendererCB = cb;
    }
    loaderRenderer(cb) {
        this.loaderRendererCB = cb;
    }
    setData(data) {
        this.data = data;
        this.render();
    }
    render() {
        if (!this.rowRendererCB) throw new Error("Unable to find renderer");
        this.hideLoading();
        this.removeAllChildren();
        if (this.data.length === 0 && this.emptyComponent) this.showEmpty();
        this.data.map((rowData, index, data)=>this.rowRendererCB({
                index: index,
                rowData: rowData,
                rowElement: this.rowComponent.getCloneAsComponent(),
                data: data
            })).filter((d)=>d).forEach((d)=>{
            this.appendChild(d);
        });
        if (this.showLoadingState) this.showLoading();
    }
    changeLoadingStatus(state) {
        this.showLoadingState = state;
        if (state) this.showLoading();
        else this.hideLoading();
    }
    showLoading() {
        this.hideLoading();
        if (!this.loaderComponent) return;
        if (this.loaderRendererCB) {
            this.lastLoadingComponent = this.loaderRendererCB(this.loaderComponent.getCloneAsComponent());
            this.appendChild(this.lastLoadingComponent);
        } else {
            this.lastLoadingComponent = this.loaderComponent.getCloneAsComponent();
            this.appendChild(this.lastLoadingComponent);
        }
    }
    showEmpty() {
        this.hideEmpty();
        if (this.emptyRendererCB) {
            this.lastEmptyComponent = this.emptyRendererCB(this.emptyComponent.getCloneAsComponent());
            this.appendChild(this.lastEmptyComponent);
        } else {
            this.lastEmptyComponent = this.emptyComponent.getCloneAsComponent();
            this.appendChild(this.lastEmptyComponent);
        }
    }
    hideLoading() {
        if (this.lastLoadingComponent) this.lastLoadingComponent.remove();
    }
    hideEmpty() {
        if (this.lastEmptyComponent) this.lastEmptyComponent.remove();
    }
    forceRender() {
        this.render();
    }
}
var $ce18c18667e54846$exports = {};
$parcel$export($ce18c18667e54846$exports, "WFFormComponent", ()=>$ce18c18667e54846$export$e7173e584c7cbeff);
class $ce18c18667e54846$export$e7173e584c7cbeff extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    defaultFormDisplayStyle = "";
    constructor(query){
        super(query);
        this.formComponent = this.getChildAsComponents("form")[0];
        this.defaultFormDisplayStyle = window.getComputedStyle(this.formComponent.getElement()).display;
    }
    getFormData() {
        const _data = {};
        new FormData(this.formComponent.getElement()).forEach((val, key)=>{
            if (_data[key]) _data[key] = [
                _data[key],
                val
            ].flat();
            else _data[key] = val;
        });
        return _data;
    }
    setFromData(data) {
        Object.keys(data).forEach((key)=>{
            this.getFormComponent().getElement().querySelector(`[name="${key}"]`).value = data[key];
        });
    }
    onFormSubmit(cb) {
        this.formComponent.getElement().onsubmit = (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            cb(this.getFormData(), ev);
        };
    }
    submitWebflowForm() {
        const wfForm = Object.keys(this.formComponent.getElement()).filter((d)=>d.includes("jQuery")).map((d)=>this.formComponent.getElement()[d]).filter((d)=>typeof d === "object" && ".wForm" in d).map((d)=>d[".wForm"]).reduce((d)=>d);
        if (wfForm && wfForm.handler) wfForm.handler(wfForm);
        else if (wfForm && wfForm.action) this.formComponent.getElement().submit();
    }
    getFormComponent() {
        return this.formComponent;
    }
    getSuccessComponent() {
        return this.getChildAsComponents(".w-form-done")[0];
    }
    getErrorComponent() {
        return this.getChildAsComponents(".w-form-fail")[0];
    }
    showSuccessState() {
        this.formComponent.getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "block";
    }
    showErrorState() {
        this.getSuccessComponent().getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "block";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    showForm() {
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "none";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    disableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.setAttribute("disabled", "disabled");
        });
    }
    enableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.removeAttribute("disabled");
        });
    }
    getSubmitButton() {
        return this.formComponent.getChildAsComponents(`[type="submit"]`)[0];
    }
    resetForm() {
        this.formComponent.getElement().reset();
    }
    updateSubmitButtonText(text) {
        this.getSubmitButton().setAttribute("value", text);
    }
}
var $b73002af79232c1a$exports = {};
$parcel$export($b73002af79232c1a$exports, "WFRoute", ()=>$b73002af79232c1a$export$4e1b92c1162557be);
class $b73002af79232c1a$export$4e1b92c1162557be {
    middlewareAllowExecutionOnFail = false;
    constructor(route){
        this.route = route;
    }
    withMiddleware(middleware, role, type = "allow", options = {}) {
        this.middleware = middleware;
        this.middlewareRole = role;
        this.middlewareType = type;
        if ("allowExecutionOnFail" in options) this.middlewareAllowExecutionOnFail = options.allowExecutionOnFail === true;
        if ("onError" in options) this.middlewareErrorFn = options.onError;
        return this;
    }
    validateRole() {
        return this.middlewareType === "allow" ? this.middleware.allowTo(this.middlewareRole) : this.middleware.disallowedTo(this.middlewareRole);
    }
    execute(fn) {
        const _match = $0b3f70b8f06eedca$export$6c50148cf1d992bd(this.route, location.pathname);
        if (_match) {
            $62881ab850a57a38$export$1c9f709888824e05("matched fn start", this.route, location.pathname);
            if (this.middleware) {
                const canAccess = this.validateRole();
                $62881ab850a57a38$export$1c9f709888824e05("checking access role", this.route, this.middlewareRole, this.middlewareType, "canAccess", canAccess, this.middlewareAllowExecutionOnFail);
                if (canAccess || this.middlewareAllowExecutionOnFail) fn({
                    ..._match,
                    ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
                }, canAccess, this.middleware.getAuth());
                else this.middlewareErrorFn && this.middlewareErrorFn();
            } else fn({
                ..._match,
                ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
            }, true);
            $62881ab850a57a38$export$1c9f709888824e05("matched fn end", this.route, location.pathname);
        } else $62881ab850a57a38$export$1c9f709888824e05("did not match", this.route, location.pathname);
        return this;
    }
}
var $16d2504bbe4bb459$exports = {};
$parcel$export($16d2504bbe4bb459$exports, "onReady", ()=>$16d2504bbe4bb459$export$ef1639a4b889352d);
/**
 * @description execute code when the page is loaded
 * @param cb callback function
 */ const $16d2504bbe4bb459$export$ef1639a4b889352d = (cb)=>{
    window.Webflow ||= [];
    window.Webflow.push(()=>{
        cb();
    });
};
var $78395a99ad91c494$exports = {};
$parcel$export($78395a99ad91c494$exports, "WFInvisibleForm", ()=>$78395a99ad91c494$export$bc36999d76b95c72);
class $78395a99ad91c494$export$bc36999d76b95c72 {
    loading = false;
    loadingListener = new Map();
    successListener = new Map();
    errorListener = new Map();
    constructor(formName = ""){
        this.fromName = formName;
        this.siteId = document.querySelector("html").getAttribute("data-wf-site") || "";
    }
    setFormName(formName) {
        this.fromName = formName;
    }
    getFormName() {
        return this.fromName;
    }
    setFormData(data) {
        this.data = data;
    }
    getFormData() {
        return this.data;
    }
    isLoading() {
        return this.loading;
    }
    onLoadingChange(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.loadingListener.set(_id, fn);
        return ()=>{
            this.loadingListener.delete(_id);
        };
    }
    onSuccess(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.successListener.set(_id, fn);
        return ()=>{
            this.successListener.delete(_id);
        };
    }
    onError(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.errorListener.set(_id, fn);
        return ()=>{
            this.errorListener.delete(_id);
        };
    }
    updateLoadingState(state) {
        this.loading = state;
        this.loadingListener.forEach((fn)=>{
            fn(this.loading);
        });
    }
    formSubmitted() {
        this.successListener.forEach((fn)=>{
            fn();
        });
    }
    formFailed() {
        this.errorListener.forEach((fn)=>{
            fn();
        });
    }
    submitForm() {
        const _updateStatus = (state)=>{
            this.updateLoadingState(state);
        };
        const onFailed = ()=>{
            this.formFailed();
        };
        const onDone = ()=>{
            this.formSubmitted();
        };
        _updateStatus(true);
        window["jQuery"].ajax({
            url: `https://webflow.com/api/v1/form/${this.siteId}`,
            type: "POST",
            data: {
                name: this.fromName || "Untitled Form",
                source: location.href,
                test: false,
                fields: this.data,
                dolphin: false
            },
            dataType: "json",
            crossDomain: true
        }).done(function(response) {
            _updateStatus(false);
            if (response && response.code === 200) onDone();
            else onFailed();
        }).fail(function() {
            _updateStatus(false);
            onFailed();
        });
    }
}
$parcel$exportWildcard(module.exports, $90b1e0f272b5544a$exports);
$parcel$exportWildcard(module.exports, $336c7a32b438dc35$exports);
$parcel$exportWildcard(module.exports, $5ce0995b4e579efe$exports);
$parcel$exportWildcard(module.exports, $0105599dd5ebe189$exports);
$parcel$exportWildcard(module.exports, $ce18c18667e54846$exports);
$parcel$exportWildcard(module.exports, $b73002af79232c1a$exports);
$parcel$exportWildcard(module.exports, $30d957643bf2e67a$exports);
$parcel$exportWildcard(module.exports, $16d2504bbe4bb459$exports);
$parcel$exportWildcard(module.exports, $78395a99ad91c494$exports);

},{"116fc168c31b637d":"ggZPL"}],"ggZPL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"jG1dk","./v3.js":"ap9Ro","./v4.js":"6RfIs","./v5.js":"eBz2t","./nil.js":"8sEtz","./version.js":"4vEj5","./validate.js":"dfZI5","./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jG1dk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cHt7R":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bFRkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dfZI5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"5bk3T","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5bk3T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ap9Ro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)("v3", 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"asOV2","./md5.js":"ieSzG","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"asOV2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") value = stringToBytes(value);
        if (typeof namespace === "string") namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1KoND":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ieSzG":[function(require,module,exports) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = "0123456789abcdef";
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6RfIs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"8mdcZ","./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8mdcZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eBz2t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)("v5", 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"asOV2","./sha1.js":"lger1","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lger1":[function(require,module,exports) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8sEtz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "00000000-0000-0000-0000-000000000000";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4vEj5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fnEL6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "app", ()=>app);
var _core = require("@xatom/core");
var _auth = require("../modules/auth");
const app = ()=>{
    //will trigger route matches /auth/*
    new (0, _core.WFRoute)("/auth/(.*)").withMiddleware((0, _auth.userMiddleware), "GUEST", "allow", {
        onError () {
            (0, _core.navigate)("/dashboard/task-list");
        }
    }).execute(()=>{
        //will trigger route matches /auth/sign-up
        new (0, _core.WFRoute)("/auth/sign-up").execute(()=>{
            //lazy loading route
            require("8dff4a7369311fc").then(({ signUp })=>signUp()).catch(console.error);
        });
        //will trigger route matches /auth/sign-in
        new (0, _core.WFRoute)("/auth/sign-in").execute(()=>{
            //lazy loading route
            require("9b9ca3d1f354f9").then(({ signIn })=>signIn()).catch(console.error);
        });
        //will trigger route matches /auth/verify
        new (0, _core.WFRoute)("/auth/verify").execute(()=>{
            //lazy loading route
            require("d2ff0736bf12c1b5").then(({ verify })=>verify()).catch(console.error);
        });
    });
    //will trigger route matches /dashboard/*
    new (0, _core.WFRoute)("/dashboard/(.*)").withMiddleware((0, _auth.userMiddleware), "USER", "allow", {
        onError () {
            (0, _core.navigate)("/auth/sign-in");
        }
    }).execute(()=>{
        //will trigger route matches /dashboard/task-list
        new (0, _core.WFRoute)("/dashboard/task-list").execute(()=>{
            //lazy loading route
            require("afea6a146fbc403c").then(({ taskList })=>taskList()).catch(console.error);
        });
    });
};

},{"@xatom/core":"8w4K8","../modules/auth":"du3Bh","8dff4a7369311fc":"bNcCE","9b9ca3d1f354f9":"60Ikj","d2ff0736bf12c1b5":"cS9T6","afea6a146fbc403c":"h4qbd","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"du3Bh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userAuth", ()=>userAuth);
parcelHelpers.export(exports, "setUser", ()=>setUser);
parcelHelpers.export(exports, "logout", ()=>logout);
parcelHelpers.export(exports, "userMiddleware", ()=>userMiddleware);
var _core = require("@xatom/core");
var _supbase = require("../supbase");
var _supbaseDefault = parcelHelpers.interopDefault(_supbase);
const userAuth = new (0, _core.WFAuth)();
//setting default role
userAuth.setRole("GUEST");
const setUser = (fullName, email)=>{
    userAuth.setUser({
        email,
        fullName
    });
    userAuth.setRole("USER");
};
const logout = ()=>{
    (0, _supbaseDefault.default).auth.signOut().then(()=>{
        userAuth.logout();
        (0, _core.navigate)("/");
    });
};
const userMiddleware = new (0, _core.WFAuthMiddleware)(userAuth);

},{"@xatom/core":"8w4K8","../supbase":"anyOU","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"anyOU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSupabase", ()=>initSupabase);
var _supabaseJs = require("@supabase/supabase-js");
var _auth = require("../auth");
const options = {
    db: {
        schema: "public"
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
};
const supabaseUrl = "https://xttlirufzajdycfkkflu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0dGxpcnVmemFqZHljZmtrZmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3Nzk5MTcsImV4cCI6MjAyNDM1NTkxN30.RbbPizmpuc4BeCk3V8qi2o746SYujfUKIZo2J3nGe68";
const supabase = (0, _supabaseJs.createClient)(supabaseUrl, supabaseKey, options);
const initSupabase = (cb)=>{
    supabase.auth.getSession().then((data)=>{
        if (!data.error && data.data && data.data.session) (0, _auth.setUser)(data.data.session.user.user_metadata.fullName, data.data.session.user.email);
    }).catch((err)=>{
        console.log(err);
    }).finally(cb);
};
// supabase.auth
//   .getSession()
//   .then(console.log)
//   .catch(console.error);
// supabase.auth.onAuthStateChange((event, session) => {
//   console.log(event, session);
//   if (event === "INITIAL_SESSION") {
//     // handle initial session
//   } else if (event === "SIGNED_IN") {
//     // handle sign in event
//   } else if (event === "SIGNED_OUT") {
//     // handle sign out event
//   } else if (event === "PASSWORD_RECOVERY") {
//     // handle password recovery event
//   } else if (event === "TOKEN_REFRESHED") {
//     // handle token refreshed event
//   } else if (event === "USER_UPDATED") {
//     // handle user updated event
//   }
// });
exports.default = supabase;

},{"@supabase/supabase-js":"jJzpM","../auth":"du3Bh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jJzpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsHttpError", ()=>(0, _functionsJs.FunctionsHttpError));
parcelHelpers.export(exports, "FunctionsFetchError", ()=>(0, _functionsJs.FunctionsFetchError));
parcelHelpers.export(exports, "FunctionsRelayError", ()=>(0, _functionsJs.FunctionsRelayError));
parcelHelpers.export(exports, "FunctionsError", ()=>(0, _functionsJs.FunctionsError));
parcelHelpers.export(exports, "FunctionRegion", ()=>(0, _functionsJs.FunctionRegion));
parcelHelpers.export(exports, "SupabaseClient", ()=>(0, _supabaseClientDefault.default));
parcelHelpers.export(exports, "createClient", ()=>createClient);
var _supabaseClient = require("./SupabaseClient");
var _supabaseClientDefault = parcelHelpers.interopDefault(_supabaseClient);
var _authJs = require("@supabase/auth-js");
parcelHelpers.exportAll(_authJs, exports);
var _functionsJs = require("@supabase/functions-js");
var _realtimeJs = require("@supabase/realtime-js");
parcelHelpers.exportAll(_realtimeJs, exports);
const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new (0, _supabaseClientDefault.default)(supabaseUrl, supabaseKey, options);
};

},{"./SupabaseClient":"8QwKy","@supabase/auth-js":"H9zoK","@supabase/functions-js":false,"@supabase/realtime-js":"d0MPi","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8QwKy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functionsJs = require("@supabase/functions-js");
var _postgrestJs = require("@supabase/postgrest-js");
var _realtimeJs = require("@supabase/realtime-js");
var _storageJs = require("@supabase/storage-js");
var _constants = require("./lib/constants");
var _fetch = require("./lib/fetch");
var _helpers = require("./lib/helpers");
var _supabaseAuthClient = require("./lib/SupabaseAuthClient");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl) throw new Error("supabaseUrl is required.");
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        const _supabaseUrl = (0, _helpers.stripTrailingSlash)(supabaseUrl);
        this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace(/^http/i, "ws");
        this.authUrl = `${_supabaseUrl}/auth/v1`;
        this.storageUrl = `${_supabaseUrl}/storage/v1`;
        this.functionsUrl = `${_supabaseUrl}/functions/v1`;
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`;
        const DEFAULTS = {
            db: (0, _constants.DEFAULT_DB_OPTIONS),
            realtime: (0, _constants.DEFAULT_REALTIME_OPTIONS),
            auth: Object.assign(Object.assign({}, (0, _constants.DEFAULT_AUTH_OPTIONS)), {
                storageKey: defaultStorageKey
            }),
            global: (0, _constants.DEFAULT_GLOBAL_OPTIONS)
        };
        const settings = (0, _helpers.applySettingDefaults)(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_b = (_a = settings.auth) === null || _a === void 0 ? void 0 : _a.storageKey) !== null && _b !== void 0 ? _b : "";
        this.headers = (_d = (_c = settings.global) === null || _c === void 0 ? void 0 : _c.headers) !== null && _d !== void 0 ? _d : {};
        this.auth = this._initSupabaseAuthClient((_e = settings.auth) !== null && _e !== void 0 ? _e : {}, this.headers, (_f = settings.global) === null || _f === void 0 ? void 0 : _f.fetch);
        this.fetch = (0, _fetch.fetchWithAuth)(supabaseKey, this._getAccessToken.bind(this), (_g = settings.global) === null || _g === void 0 ? void 0 : _g.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers
        }, settings.realtime));
        this.rest = new (0, _postgrestJs.PostgrestClient)(`${_supabaseUrl}/rest/v1`, {
            headers: this.headers,
            schema: (_h = settings.db) === null || _h === void 0 ? void 0 : _h.schema,
            fetch: this.fetch
        });
        this._listenForAuthEvents();
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new (0, _functionsJs.FunctionsClient)(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */ get storage() {
        return new (0, _storageJs.StorageClient)(this.storageUrl, this.headers, this.fetch);
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options = {}) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            const { data } = yield this.auth.getSession();
            return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null;
        });
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, storageKey, flowType, debug }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new (0, _supabaseAuthClient.SupabaseAuthClient)({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            flowType,
            debug,
            fetch
        });
    }
    _initRealtimeClient(options) {
        return new (0, _realtimeJs.RealtimeClient)(this.realtimeUrl, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        let data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
            // Token has changed
            this.realtime.setAuth(token !== null && token !== void 0 ? token : null);
            this.changedAccessToken = token;
        } else if (event === "SIGNED_OUT") {
            // Token is removed
            this.realtime.setAuth(this.supabaseKey);
            if (source == "STORAGE") this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
}
exports.default = SupabaseClient;

},{"@supabase/functions-js":"1SHHd","@supabase/postgrest-js":"lIpFd","@supabase/realtime-js":"d0MPi","@supabase/storage-js":"d6HNz","./lib/constants":"iNMpT","./lib/fetch":"bL75C","./lib/helpers":"6daKy","./lib/SupabaseAuthClient":"fhW0J","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1SHHd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsClient", ()=>(0, _functionsClient.FunctionsClient));
parcelHelpers.export(exports, "FunctionsError", ()=>(0, _types.FunctionsError));
parcelHelpers.export(exports, "FunctionsFetchError", ()=>(0, _types.FunctionsFetchError));
parcelHelpers.export(exports, "FunctionsHttpError", ()=>(0, _types.FunctionsHttpError));
parcelHelpers.export(exports, "FunctionsRelayError", ()=>(0, _types.FunctionsRelayError));
parcelHelpers.export(exports, "FunctionRegion", ()=>(0, _types.FunctionRegion));
var _functionsClient = require("./FunctionsClient");
var _types = require("./types");

},{"./FunctionsClient":"kgqNf","./types":false,"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kgqNf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsClient", ()=>FunctionsClient);
var _helper = require("./helper");
var _types = require("./types");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FunctionsClient {
    constructor(url, { headers = {}, customFetch, region = (0, _types.FunctionRegion).Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, _helper.resolveFetch)(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     */ invoke(functionName, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { headers, method, body: functionArgs } = options;
                let _headers = {};
                let { region } = options;
                if (!region) region = this.region;
                if (region && region !== "any") _headers["x-region"] = region;
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
                    if (typeof Blob !== "undefined" && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers["Content-Type"] = "application/octet-stream";
                        body = functionArgs;
                    } else if (typeof functionArgs === "string") {
                        // plain string
                        _headers["Content-Type"] = "text/plain";
                        body = functionArgs;
                    } else if (typeof FormData !== "undefined" && functionArgs instanceof FormData) // don't set content-type headers
                    // Request will automatically add the right boundary value
                    body = functionArgs;
                    else {
                        // default, assume this is JSON
                        _headers["Content-Type"] = "application/json";
                        body = JSON.stringify(functionArgs);
                    }
                }
                const response = yield this.fetch(`${this.url}/${functionName}`, {
                    method: method || "POST",
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body
                }).catch((fetchError)=>{
                    throw new (0, _types.FunctionsFetchError)(fetchError);
                });
                const isRelayError = response.headers.get("x-relay-error");
                if (isRelayError && isRelayError === "true") throw new (0, _types.FunctionsRelayError)(response);
                if (!response.ok) throw new (0, _types.FunctionsHttpError)(response);
                let responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "text/plain").split(";")[0].trim();
                let data;
                if (responseType === "application/json") data = yield response.json();
                else if (responseType === "application/octet-stream") data = yield response.blob();
                else if (responseType === "multipart/form-data") data = yield response.formData();
                else // default to text
                data = yield response.text();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error
                };
            }
        });
    }
}

},{"./helper":"3lyjj","./types":"lzqBJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3lyjj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>require("db8a7a5aa4509164").then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};

},{"db8a7a5aa4509164":"5aZ41","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5aZ41":[function(require,module,exports) {
module.exports = Promise.resolve(module.bundle.root("inpgO"));

},{}],"lzqBJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FunctionsError", ()=>FunctionsError);
parcelHelpers.export(exports, "FunctionsFetchError", ()=>FunctionsFetchError);
parcelHelpers.export(exports, "FunctionsRelayError", ()=>FunctionsRelayError);
parcelHelpers.export(exports, "FunctionsHttpError", ()=>FunctionsHttpError);
parcelHelpers.export(exports, "FunctionRegion", ()=>FunctionRegion);
class FunctionsError extends Error {
    constructor(message, name = "FunctionsError", context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lIpFd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostgrestClient", ()=>(0, _postgrestClientDefault.default));
parcelHelpers.export(exports, "PostgrestQueryBuilder", ()=>(0, _postgrestQueryBuilderDefault.default));
parcelHelpers.export(exports, "PostgrestFilterBuilder", ()=>(0, _postgrestFilterBuilderDefault.default));
parcelHelpers.export(exports, "PostgrestTransformBuilder", ()=>(0, _postgrestTransformBuilderDefault.default));
parcelHelpers.export(exports, "PostgrestBuilder", ()=>(0, _postgrestBuilderDefault.default));
var _postgrestClient = require("./PostgrestClient");
var _postgrestClientDefault = parcelHelpers.interopDefault(_postgrestClient);
var _postgrestQueryBuilder = require("./PostgrestQueryBuilder");
var _postgrestQueryBuilderDefault = parcelHelpers.interopDefault(_postgrestQueryBuilder);
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
var _postgrestTransformBuilder = require("./PostgrestTransformBuilder");
var _postgrestTransformBuilderDefault = parcelHelpers.interopDefault(_postgrestTransformBuilder);
var _postgrestBuilder = require("./PostgrestBuilder");
var _postgrestBuilderDefault = parcelHelpers.interopDefault(_postgrestBuilder);

},{"./PostgrestClient":"id607","./PostgrestQueryBuilder":"iiYGe","./PostgrestFilterBuilder":"8Yor9","./PostgrestTransformBuilder":"bJLIS","./PostgrestBuilder":"lp7k6","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"id607":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestQueryBuilder = require("./PostgrestQueryBuilder");
var _postgrestQueryBuilderDefault = parcelHelpers.interopDefault(_postgrestQueryBuilder);
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
var _constants = require("./constants");
class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */ constructor(url, { headers = {}, schema, fetch } = {}){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, _constants.DEFAULT_HEADERS)), headers);
        this.schemaName = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new (0, _postgrestQueryBuilderDefault.default)(url, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head) {
            method = "HEAD";
            Object.entries(args).forEach(([name, value])=>{
                url.searchParams.append(name, `${value}`);
            });
        } else if (get) {
            method = "GET";
            Object.entries(args).forEach(([name, value])=>{
                url.searchParams.append(name, `${value}`);
            });
        } else {
            method = "POST";
            body = args;
        }
        const headers = Object.assign({}, this.headers);
        if (count) headers["Prefer"] = `count=${count}`;
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
}
exports.default = PostgrestClient;

},{"./PostgrestQueryBuilder":"iiYGe","./PostgrestFilterBuilder":"8Yor9","./constants":"aQ01G","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iiYGe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestFilterBuilder = require("./PostgrestFilterBuilder");
var _postgrestFilterBuilderDefault = parcelHelpers.interopDefault(_postgrestFilterBuilder);
class PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, fetch }){
        this.url = url;
        this.headers = headers;
        this.schema = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, { head = false, count } = {}) {
        const method = head ? "HEAD" : "GET";
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (count) this.headers["Prefer"] = `count=${count}`;
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        const method = "POST";
        const prefersHeaders = [];
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        if (!defaultToNull) prefersHeaders.push("missing=default");
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        const method = "POST";
        const prefersHeaders = [
            `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`
        ];
        if (onConflict !== undefined) this.url.searchParams.set("on_conflict", onConflict);
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        if (!defaultToNull) prefersHeaders.push("missing=default");
        this.headers["Prefer"] = prefersHeaders.join(",");
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set("columns", uniqueColumns.join(","));
            }
        }
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        const method = "PATCH";
        const prefersHeaders = [];
        if (this.headers["Prefer"]) prefersHeaders.push(this.headers["Prefer"]);
        if (count) prefersHeaders.push(`count=${count}`);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        const method = "DELETE";
        const prefersHeaders = [];
        if (count) prefersHeaders.push(`count=${count}`);
        if (this.headers["Prefer"]) prefersHeaders.unshift(this.headers["Prefer"]);
        this.headers["Prefer"] = prefersHeaders.join(",");
        return new (0, _postgrestFilterBuilderDefault.default)({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false
        });
    }
}
exports.default = PostgrestQueryBuilder;

},{"./PostgrestFilterBuilder":"8Yor9","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8Yor9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestTransformBuilder = require("./PostgrestTransformBuilder");
var _postgrestTransformBuilderDefault = parcelHelpers.interopDefault(_postgrestTransformBuilder);
class PostgrestFilterBuilder extends (0, _postgrestTransformBuilderDefault.default) {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === "string" && new RegExp("[,()]").test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(",");
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === "string") // range types can be inclusive '[', ']' or exclusive '(', ')' so just
        // keep it simple and accept a string
        this.url.searchParams.append(column, `cs.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(column, `cs.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(column, `cd.${value}`);
        else if (Array.isArray(value)) // array
        this.url.searchParams.append(column, `cd.{${value.join(",")}}`);
        else // json
        this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === "string") // range
        this.url.searchParams.append(column, `ov.${value}`);
        else // array
        this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = "";
        if (type === "plain") typePart = "pl";
        else if (type === "phrase") typePart = "ph";
        else if (type === "websearch") typePart = "w";
        const configPart = config === undefined ? "" : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : "or";
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder;

},{"./PostgrestTransformBuilder":"bJLIS","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bJLIS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postgrestBuilder = require("./PostgrestBuilder");
var _postgrestBuilderDefault = parcelHelpers.interopDefault(_postgrestBuilder);
class PostgrestTransformBuilder extends (0, _postgrestBuilderDefault.default) {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map((c)=>{
            if (/\s/.test(c) && !quoted) return "";
            if (c === '"') quoted = !quoted;
            return c;
        }).join("");
        this.url.searchParams.set("select", cleanedColumns);
        if (this.headers["Prefer"]) this.headers["Prefer"] += ",";
        this.headers["Prefer"] += "return=representation";
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : "order";
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === undefined ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset (`from`) and ending at the offset (`from + to`).
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers["Accept"] = "application/vnd.pgrst.object+json";
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === "GET") this.headers["Accept"] = "application/json";
        else this.headers["Accept"] = "application/vnd.pgrst.object+json";
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers["Accept"] = "text/csv";
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers["Accept"] = "application/geo+json";
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = "text" } = {}) {
        var _a;
        const options = [
            analyze ? "analyze" : null,
            verbose ? "verbose" : null,
            settings ? "settings" : null,
            buffers ? "buffers" : null,
            wal ? "wal" : null
        ].filter(Boolean).join("|");
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers["Accept"]) !== null && _a !== void 0 ? _a : "application/json";
        this.headers["Accept"] = `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`;
        if (format === "json") return this;
        else return this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        var _a;
        if (((_a = this.headers["Prefer"]) !== null && _a !== void 0 ? _a : "").trim().length > 0) this.headers["Prefer"] += ",tx=rollback";
        else this.headers["Prefer"] = "tx=rollback";
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     */ returns() {
        return this;
    }
}
exports.default = PostgrestTransformBuilder;

},{"./PostgrestBuilder":"lp7k6","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lp7k6":[function(require,module,exports) {
// @ts-ignore
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nodeFetch = require("@supabase/node-fetch");
var _nodeFetchDefault = parcelHelpers.interopDefault(_nodeFetch);
var _postgrestError = require("./PostgrestError");
var _postgrestErrorDefault = parcelHelpers.interopDefault(_postgrestError);
class PostgrestBuilder {
    constructor(builder){
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = builder.headers;
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = builder.shouldThrowOnError;
        this.signal = builder.signal;
        this.isMaybeSingle = builder.isMaybeSingle;
        if (builder.fetch) this.fetch = builder.fetch;
        else if (typeof fetch === "undefined") this.fetch = (0, _nodeFetchDefault.default);
        else this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) ;
        else if ([
            "GET",
            "HEAD"
        ].includes(this.method)) this.headers["Accept-Profile"] = this.schema;
        else this.headers["Content-Profile"] = this.schema;
        if (this.method !== "GET" && this.method !== "HEAD") this.headers["Content-Type"] = "application/json";
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== "HEAD") {
                    const body = await res.text();
                    if (body === "") ;
                    else if (this.headers["Accept"] === "text/csv") data = body;
                    else if (this.headers["Accept"] && this.headers["Accept"].includes("application/vnd.pgrst.plan+text")) data = body;
                    else data = JSON.parse(body);
                }
                const countHeader = (_a = this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.match(/count=(exact|planned|estimated)/);
                const contentRange = (_b = res.headers.get("content-range")) === null || _b === void 0 ? void 0 : _b.split("/");
                if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === "GET" && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: "PGRST116",
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: "JSON object requested, multiple (or no) rows returned"
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = "Not Acceptable";
                    } else if (data.length === 1) data = data[0];
                    else data = null;
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = "OK";
                    }
                } catch (_d) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === "") {
                        status = 204;
                        statusText = "No Content";
                    } else error = {
                        message: body
                    };
                }
                if (error && this.isMaybeSingle && ((_c = error === null || error === void 0 ? void 0 : error.details) === null || _c === void 0 ? void 0 : _c.includes("0 rows"))) {
                    error = null;
                    status = 200;
                    statusText = "OK";
                }
                if (error && this.shouldThrowOnError) throw new (0, _postgrestErrorDefault.default)(error);
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) res = res.catch((fetchError)=>{
            var _a, _b, _c;
            return {
                error: {
                    message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                    details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ""}`,
                    hint: "",
                    code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ""}`
                },
                data: null,
                count: null,
                status: 0,
                statusText: ""
            };
        });
        return res.then(onfulfilled, onrejected);
    }
}
exports.default = PostgrestBuilder;

},{"@supabase/node-fetch":"inpgO","./PostgrestError":"azrrf","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"inpgO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetch", ()=>fetch);
parcelHelpers.export(exports, "Headers", ()=>Headers);
parcelHelpers.export(exports, "Request", ()=>Request);
parcelHelpers.export(exports, "Response", ()=>Response);
var global = arguments[3];
"use strict";
// ref: https://github.com/tc39/proposal-global
var getGlobal = function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw new Error("unable to locate global object");
};
var globalObject = getGlobal();
const fetch = globalObject.fetch;
exports.default = globalObject.fetch.bind(globalObject);
const Headers = globalObject.Headers;
const Request = globalObject.Request;
const Response = globalObject.Response;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"azrrf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PostgrestError extends Error {
    constructor(context){
        super(context.message);
        this.name = "PostgrestError";
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aQ01G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `postgrest-js/${(0, _version.version)}`
};

},{"./version":"eF1zz","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eF1zz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "1.15.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d0MPi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RealtimePresence", ()=>(0, _realtimePresenceDefault.default));
parcelHelpers.export(exports, "RealtimeChannel", ()=>(0, _realtimeChannelDefault.default));
parcelHelpers.export(exports, "RealtimeClient", ()=>(0, _realtimeClientDefault.default));
parcelHelpers.export(exports, "REALTIME_LISTEN_TYPES", ()=>(0, _realtimeChannel.REALTIME_LISTEN_TYPES));
parcelHelpers.export(exports, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", ()=>(0, _realtimeChannel.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT));
parcelHelpers.export(exports, "REALTIME_PRESENCE_LISTEN_EVENTS", ()=>(0, _realtimePresence.REALTIME_PRESENCE_LISTEN_EVENTS));
parcelHelpers.export(exports, "REALTIME_SUBSCRIBE_STATES", ()=>(0, _realtimeChannel.REALTIME_SUBSCRIBE_STATES));
parcelHelpers.export(exports, "REALTIME_CHANNEL_STATES", ()=>(0, _realtimeChannel.REALTIME_CHANNEL_STATES));
var _realtimeClient = require("./RealtimeClient");
var _realtimeClientDefault = parcelHelpers.interopDefault(_realtimeClient);
var _realtimeChannel = require("./RealtimeChannel");
var _realtimeChannelDefault = parcelHelpers.interopDefault(_realtimeChannel);
var _realtimePresence = require("./RealtimePresence");
var _realtimePresenceDefault = parcelHelpers.interopDefault(_realtimePresence);

},{"./RealtimeClient":"eZ0B3","./RealtimeChannel":"kytee","./RealtimePresence":"iOr8b","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eZ0B3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("./lib/constants");
var _timer = require("./lib/timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
var _serializer = require("./lib/serializer");
var _serializerDefault = parcelHelpers.interopDefault(_serializer);
var _realtimeChannel = require("./RealtimeChannel");
var _realtimeChannelDefault = parcelHelpers.interopDefault(_realtimeChannel);
const noop = ()=>{};
const NATIVE_WEBSOCKET_AVAILABLE = typeof WebSocket !== "undefined";
class RealtimeClient {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket.
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers The optional headers to pass when connecting.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     */ constructor(endPoint, options){
        var _a;
        this.accessToken = null;
        this.apiKey = null;
        this.channels = [];
        this.endPoint = "";
        this.headers = (0, _constants.DEFAULT_HEADERS);
        this.params = {};
        this.timeout = (0, _constants.DEFAULT_TIMEOUT);
        this.heartbeatIntervalMs = 30000;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new (0, _serializerDefault.default)();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        /**
         * Use either custom fetch, if provided, or default fetch to make HTTP requests
         *
         * @internal
         */ this._resolveFetch = (customFetch)=>{
            let _fetch;
            if (customFetch) _fetch = customFetch;
            else if (typeof fetch === "undefined") _fetch = (...args)=>require("3ea8640035012c43").then(({ default: fetch1 })=>fetch1(...args));
            else _fetch = fetch;
            return (...args)=>_fetch(...args);
        };
        this.endPoint = `${endPoint}/${(0, _constants.TRANSPORTS).websocket}`;
        if (options === null || options === void 0 ? void 0 : options.transport) this.transport = options.transport;
        else this.transport = null;
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers) this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout) this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        const accessToken = (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey;
        if (accessToken) {
            this.accessToken = accessToken;
            this.apiKey = accessToken;
        }
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : (tries)=>{
            return [
                1000,
                2000,
                5000,
                10000
            ][tries - 1] || 10000;
        };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : (payload, callback)=>{
            return callback(JSON.stringify(payload));
        };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new (0, _timerDefault.default)(async ()=>{
            this.disconnect();
            this.connect();
        }, this.reconnectAfterMs);
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */ connect() {
        if (this.conn) return;
        if (this.transport) {
            this.conn = new this.transport(this._endPointURL(), undefined, {
                headers: this.headers
            });
            return;
        }
        if (NATIVE_WEBSOCKET_AVAILABLE) {
            this.conn = new WebSocket(this._endPointURL());
            this.setupConnection();
            return;
        }
        this.conn = new WSWebSocketDummy(this._endPointURL(), undefined, {
            close: ()=>{
                this.conn = null;
            }
        });
        require("c4dfe9bfdd39a2b7").then(({ default: WS })=>{
            this.conn = new WS(this._endPointURL(), undefined, {
                headers: this.headers
            });
            this.setupConnection();
        });
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */ disconnect(code, reason) {
        if (this.conn) {
            this.conn.onclose = function() {}; // noop
            if (code) this.conn.close(code, reason !== null && reason !== void 0 ? reason : "");
            else this.conn.close();
            this.conn = null;
            // remove open handles
            this.heartbeatTimer && clearInterval(this.heartbeatTimer);
            this.reconnectTimer.reset();
        }
    }
    /**
     * Returns all created channels
     */ getChannels() {
        return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */ async removeChannel(channel) {
        const status = await channel.unsubscribe();
        if (this.channels.length === 0) this.disconnect();
        return status;
    }
    /**
     * Unsubscribes and removes all channels
     */ async removeAllChannels() {
        const values_1 = await Promise.all(this.channels.map((channel)=>channel.unsubscribe()));
        this.disconnect();
        return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */ log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */ connectionState() {
        switch(this.conn && this.conn.readyState){
            case (0, _constants.SOCKET_STATES).connecting:
                return (0, _constants.CONNECTION_STATE).Connecting;
            case (0, _constants.SOCKET_STATES).open:
                return (0, _constants.CONNECTION_STATE).Open;
            case (0, _constants.SOCKET_STATES).closing:
                return (0, _constants.CONNECTION_STATE).Closing;
            default:
                return (0, _constants.CONNECTION_STATE).Closed;
        }
    }
    /**
     * Returns `true` is the connection is open.
     */ isConnected() {
        return this.connectionState() === (0, _constants.CONNECTION_STATE).Open;
    }
    channel(topic, params = {
        config: {}
    }) {
        const chan = new (0, _realtimeChannelDefault.default)(`realtime:${topic}`, params, this);
        this.channels.push(chan);
        return chan;
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */ push(data) {
        const { topic, event, payload, ref } = data;
        const callback = ()=>{
            this.encode(data, (result)=>{
                var _a;
                (_a = this.conn) === null || _a === void 0 || _a.send(result);
            });
        };
        this.log("push", `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) callback();
        else this.sendBuffer.push(callback);
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * @param token A JWT string.
     */ setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel)=>{
            token && channel.updateJoinPayload({
                access_token: token
            });
            if (channel.joinedOnce && channel._isJoined()) channel._push((0, _constants.CHANNEL_EVENTS).access_token, {
                access_token: token
            });
        });
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */ _makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) this.ref = 0;
        else this.ref = newRef;
        return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */ _leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c)=>c.topic === topic && (c._isJoined() || c._isJoining()));
        if (dupChannel) {
            this.log("transport", `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */ _remove(channel) {
        this.channels = this.channels.filter((c)=>c._joinRef() !== channel._joinRef());
    }
    /**
     * Sets up connection handlers.
     *
     * @internal
     */ setupConnection() {
        if (this.conn) {
            this.conn.binaryType = "arraybuffer";
            this.conn.onopen = ()=>this._onConnOpen();
            this.conn.onerror = (error)=>this._onConnError(error);
            this.conn.onmessage = (event)=>this._onConnMessage(event);
            this.conn.onclose = (event)=>this._onConnClose(event);
        }
    }
    /**
     * Returns the URL of the websocket.
     *
     * @internal
     */ _endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: (0, _constants.VSN)
        }));
    }
    /** @internal */ _onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg)=>{
            let { topic, event, payload, ref } = msg;
            if (ref && ref === this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) this.pendingHeartbeatRef = null;
            this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
            this.channels.filter((channel)=>channel._isMember(topic)).forEach((channel)=>channel._trigger(event, payload, ref));
            this.stateChangeCallbacks.message.forEach((callback)=>callback(msg));
        });
    }
    /** @internal */ _onConnOpen() {
        this.log("transport", `connected to ${this._endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(()=>this._sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((callback)=>callback());
    }
    /** @internal */ _onConnClose(event) {
        this.log("transport", "close", event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback)=>callback(event));
    }
    /** @internal */ _onConnError(error) {
        this.log("transport", error.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback)=>callback(error));
    }
    /** @internal */ _triggerChanError() {
        this.channels.forEach((channel)=>channel._trigger((0, _constants.CHANNEL_EVENTS).error));
    }
    /** @internal */ _appendParams(url, params) {
        if (Object.keys(params).length === 0) return url;
        const prefix = url.match(/\?/) ? "&" : "?";
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    /** @internal */ _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback)=>callback());
            this.sendBuffer = [];
        }
    }
    /** @internal */ _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) return;
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            (_a = this.conn) === null || _a === void 0 || _a.close((0, _constants.WS_CLOSE_NORMAL), "hearbeat timeout");
            return;
        }
        this.pendingHeartbeatRef = this._makeRef();
        this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        this.setAuth(this.accessToken);
    }
}
exports.default = RealtimeClient;
class WSWebSocketDummy {
    constructor(address, _protocols, options){
        this.binaryType = "arraybuffer";
        this.onclose = ()=>{};
        this.onerror = ()=>{};
        this.onmessage = ()=>{};
        this.onopen = ()=>{};
        this.readyState = (0, _constants.SOCKET_STATES).connecting;
        this.send = ()=>{};
        this.url = null;
        this.url = address;
        this.close = options.close;
    }
}

},{"./lib/constants":"jMQgQ","./lib/timer":"2jFhh","./lib/serializer":"aXeGH","./RealtimeChannel":"kytee","3ea8640035012c43":"5aZ41","c4dfe9bfdd39a2b7":"grgiq","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jMQgQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "VSN", ()=>VSN);
parcelHelpers.export(exports, "DEFAULT_TIMEOUT", ()=>DEFAULT_TIMEOUT);
parcelHelpers.export(exports, "WS_CLOSE_NORMAL", ()=>WS_CLOSE_NORMAL);
parcelHelpers.export(exports, "SOCKET_STATES", ()=>SOCKET_STATES);
parcelHelpers.export(exports, "CHANNEL_STATES", ()=>CHANNEL_STATES);
parcelHelpers.export(exports, "CHANNEL_EVENTS", ()=>CHANNEL_EVENTS);
parcelHelpers.export(exports, "TRANSPORTS", ()=>TRANSPORTS);
parcelHelpers.export(exports, "CONNECTION_STATE", ()=>CONNECTION_STATE);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `realtime-js/${(0, _version.version)}`
};
const VSN = "1.0.0";
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
var SOCKET_STATES;
(function(SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));

},{"./version":"b78QW","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"b78QW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.9.3";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2jFhh":[function(require,module,exports) {
/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Timer {
    constructor(callback, timerCalc){
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}
exports.default = Timer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aXeGH":[function(require,module,exports) {
// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Serializer {
    constructor(){
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) return callback(this._binaryDecode(rawPayload));
        if (typeof rawPayload === "string") return callback(JSON.parse(rawPayload));
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return {
            ref: null,
            topic: topic,
            event: event,
            payload: data
        };
    }
}
exports.default = Serializer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kytee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", ()=>REALTIME_POSTGRES_CHANGES_LISTEN_EVENT);
parcelHelpers.export(exports, "REALTIME_LISTEN_TYPES", ()=>REALTIME_LISTEN_TYPES);
parcelHelpers.export(exports, "REALTIME_SUBSCRIBE_STATES", ()=>REALTIME_SUBSCRIBE_STATES);
parcelHelpers.export(exports, "REALTIME_CHANNEL_STATES", ()=>REALTIME_CHANNEL_STATES);
var _constants = require("./lib/constants");
var _push = require("./lib/push");
var _pushDefault = parcelHelpers.interopDefault(_push);
var _timer = require("./lib/timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
var _realtimePresence = require("./RealtimePresence");
var _realtimePresenceDefault = parcelHelpers.interopDefault(_realtimePresence);
var _transformers = require("./lib/transformers");
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES) {
    REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
    /**
     * listen to Postgres changes.
     */ REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES) {
    REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
const REALTIME_CHANNEL_STATES = (0, _constants.CHANNEL_STATES);
class RealtimeChannel {
    constructor(/** Topic name can be any string. */ topic, params = {
        config: {}
    }, socket){
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = (0, _constants.CHANNEL_STATES).closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, "");
        this.params.config = Object.assign({
            broadcast: {
                ack: false,
                self: false
            },
            presence: {
                key: ""
            }
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new (0, _pushDefault.default)(this, (0, _constants.CHANNEL_EVENTS).join, this.params, this.timeout);
        this.rejoinTimer = new (0, _timerDefault.default)(()=>this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive("ok", ()=>{
            this.state = (0, _constants.CHANNEL_STATES).joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent)=>pushEvent.send());
            this.pushBuffer = [];
        });
        this._onClose(()=>{
            this.rejoinTimer.reset();
            this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`);
            this.state = (0, _constants.CHANNEL_STATES).closed;
            this.socket._remove(this);
        });
        this._onError((reason)=>{
            if (this._isLeaving() || this._isClosed()) return;
            this.socket.log("channel", `error ${this.topic}`, reason);
            this.state = (0, _constants.CHANNEL_STATES).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", ()=>{
            if (!this._isJoining()) return;
            this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = (0, _constants.CHANNEL_STATES).errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this._on((0, _constants.CHANNEL_EVENTS).reply, {}, (payload, ref)=>{
            this._trigger(this._replyEventName(ref), payload);
        });
        this.presence = new (0, _realtimePresenceDefault.default)(this);
        this.broadcastEndpointURL = this._broadcastEndpointURL();
    }
    /** Subscribe registers your client with the server */ subscribe(callback, timeout = this.timeout) {
        var _a, _b;
        if (!this.socket.isConnected()) this.socket.connect();
        if (this.joinedOnce) throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        else {
            const { config: { broadcast, presence } } = this.params;
            this._onError((e)=>callback && callback("CHANNEL_ERROR", e));
            this._onClose(()=>callback && callback("CLOSED"));
            const accessTokenPayload = {};
            const config = {
                broadcast,
                presence,
                postgres_changes: (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r)=>r.filter)) !== null && _b !== void 0 ? _b : []
            };
            if (this.socket.accessToken) accessTokenPayload.access_token = this.socket.accessToken;
            this.updateJoinPayload(Object.assign({
                config
            }, accessTokenPayload));
            this.joinedOnce = true;
            this._rejoin(timeout);
            this.joinPush.receive("ok", ({ postgres_changes: serverPostgresFilters })=>{
                var _a;
                this.socket.accessToken && this.socket.setAuth(this.socket.accessToken);
                if (serverPostgresFilters === undefined) {
                    callback && callback("SUBSCRIBED");
                    return;
                } else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
                    const newPostgresBindings = [];
                    for(let i = 0; i < bindingsLen; i++){
                        const clientPostgresBinding = clientPostgresBindings[i];
                        const { filter: { event, schema, table, filter } } = clientPostgresBinding;
                        const serverPostgresFilter = serverPostgresFilters && serverPostgresFilters[i];
                        if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                            id: serverPostgresFilter.id
                        }));
                        else {
                            this.unsubscribe();
                            callback && callback("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
                            return;
                        }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback("SUBSCRIBED");
                    return;
                }
            }).receive("error", (error)=>{
                callback && callback("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(error).join(", ") || "error")));
                return;
            }).receive("timeout", ()=>{
                callback && callback("TIMED_OUT");
                return;
            });
        }
        return this;
    }
    presenceState() {
        return this.presence.state;
    }
    async track(payload, opts = {}) {
        return await this.send({
            type: "presence",
            event: "track",
            payload
        }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
        return await this.send({
            type: "presence",
            event: "untrack"
        }, opts);
    }
    on(type, filter, callback) {
        return this._on(type, filter, callback);
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */ async send(args, opts = {}) {
        var _a, _b;
        if (!this._canPush() && args.type === "broadcast") {
            const { event, payload: endpoint_payload } = args;
            const options = {
                method: "POST",
                headers: {
                    apikey: (_a = this.socket.apiKey) !== null && _a !== void 0 ? _a : "",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        {
                            topic: this.subTopic,
                            event,
                            payload: endpoint_payload
                        }
                    ]
                })
            };
            try {
                const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_b = opts.timeout) !== null && _b !== void 0 ? _b : this.timeout);
                if (response.ok) return "ok";
                else return "error";
            } catch (error) {
                if (error.name === "AbortError") return "timed out";
                else return "error";
            }
        } else return new Promise((resolve)=>{
            var _a, _b, _c;
            const push = this._push(args.type, args, opts.timeout || this.timeout);
            if (args.type === "broadcast" && !((_c = (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) resolve("ok");
            push.receive("ok", ()=>resolve("ok"));
            push.receive("timeout", ()=>resolve("timed out"));
        });
    }
    updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */ unsubscribe(timeout = this.timeout) {
        this.state = (0, _constants.CHANNEL_STATES).leaving;
        const onClose = ()=>{
            this.socket.log("channel", `leave ${this.topic}`);
            this._trigger((0, _constants.CHANNEL_EVENTS).close, "leave", this._joinRef());
        };
        this.rejoinTimer.reset();
        // Destroy joinPush to avoid connection timeouts during unscription phase
        this.joinPush.destroy();
        return new Promise((resolve)=>{
            const leavePush = new (0, _pushDefault.default)(this, (0, _constants.CHANNEL_EVENTS).leave, {}, timeout);
            leavePush.receive("ok", ()=>{
                onClose();
                resolve("ok");
            }).receive("timeout", ()=>{
                onClose();
                resolve("timed out");
            }).receive("error", ()=>{
                resolve("error");
            });
            leavePush.send();
            if (!this._canPush()) leavePush.trigger("ok", {});
        });
    }
    /** @internal */ _broadcastEndpointURL() {
        let url = this.socket.endPoint;
        url = url.replace(/^ws/i, "http");
        url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "");
        return url.replace(/\/+$/, "") + "/api/broadcast";
    }
    async _fetchWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeout);
        const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), {
            signal: controller.signal
        }));
        clearTimeout(id);
        return response;
    }
    /** @internal */ _push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let pushEvent = new (0, _pushDefault.default)(this, event, payload, timeout);
        if (this._canPush()) pushEvent.send();
        else {
            pushEvent.startTimeout();
            this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */ _onMessage(_event, payload, _ref) {
        return payload;
    }
    /** @internal */ _isMember(topic) {
        return this.topic === topic;
    }
    /** @internal */ _joinRef() {
        return this.joinPush.ref;
    }
    /** @internal */ _trigger(type, payload, ref) {
        var _a, _b;
        const typeLower = type.toLocaleLowerCase();
        const { close, error, leave, join } = (0, _constants.CHANNEL_EVENTS);
        const events = [
            close,
            error,
            leave,
            join
        ];
        if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) return;
        let handledPayload = this._onMessage(typeLower, payload, ref);
        if (payload && !handledPayload) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        if ([
            "insert",
            "update",
            "delete"
        ].includes(typeLower)) (_a = this.bindings.postgres_changes) === null || _a === void 0 || _a.filter((bind)=>{
            var _a, _b, _c;
            return ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === "*" || ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
        }).map((bind)=>bind.callback(handledPayload, ref));
        else (_b = this.bindings[typeLower]) === null || _b === void 0 || _b.filter((bind)=>{
            var _a, _b, _c, _d, _e, _f;
            if ([
                "broadcast",
                "presence",
                "postgres_changes"
            ].includes(typeLower)) {
                if ("id" in bind) {
                    const bindId = bind.id;
                    const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                    return bindId && ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
                } else {
                    const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                    return bindEvent === "*" || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
                }
            } else return bind.type.toLocaleLowerCase() === typeLower;
        }).map((bind)=>{
            if (typeof handledPayload === "object" && "ids" in handledPayload) {
                const postgresChanges = handledPayload.data;
                const { schema, table, commit_timestamp, type, errors } = postgresChanges;
                const enrichedPayload = {
                    schema: schema,
                    table: table,
                    commit_timestamp: commit_timestamp,
                    eventType: type,
                    new: {},
                    old: {},
                    errors: errors
                };
                handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
            }
            bind.callback(handledPayload, ref);
        });
    }
    /** @internal */ _isClosed() {
        return this.state === (0, _constants.CHANNEL_STATES).closed;
    }
    /** @internal */ _isJoined() {
        return this.state === (0, _constants.CHANNEL_STATES).joined;
    }
    /** @internal */ _isJoining() {
        return this.state === (0, _constants.CHANNEL_STATES).joining;
    }
    /** @internal */ _isLeaving() {
        return this.state === (0, _constants.CHANNEL_STATES).leaving;
    }
    /** @internal */ _replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    /** @internal */ _on(type, filter, callback) {
        const typeLower = type.toLocaleLowerCase();
        const binding = {
            type: typeLower,
            filter: filter,
            callback: callback
        };
        if (this.bindings[typeLower]) this.bindings[typeLower].push(binding);
        else this.bindings[typeLower] = [
            binding
        ];
        return this;
    }
    /** @internal */ _off(type, filter) {
        const typeLower = type.toLocaleLowerCase();
        this.bindings[typeLower] = this.bindings[typeLower].filter((bind)=>{
            var _a;
            return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
        });
        return this;
    }
    /** @internal */ static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
        for(const k in obj1){
            if (obj1[k] !== obj2[k]) return false;
        }
        return true;
    }
    /** @internal */ _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) this._rejoin();
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */ _onClose(callback) {
        this._on((0, _constants.CHANNEL_EVENTS).close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */ _onError(callback) {
        this._on((0, _constants.CHANNEL_EVENTS).error, {}, (reason)=>callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */ _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */ _rejoin(timeout = this.timeout) {
        if (this._isLeaving()) return;
        this.socket._leaveOpenTopic(this.topic);
        this.state = (0, _constants.CHANNEL_STATES).joining;
        this.joinPush.resend(timeout);
    }
    /** @internal */ _getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {}
        };
        if (payload.type === "INSERT" || payload.type === "UPDATE") records.new = _transformers.convertChangeData(payload.columns, payload.record);
        if (payload.type === "UPDATE" || payload.type === "DELETE") records.old = _transformers.convertChangeData(payload.columns, payload.old_record);
        return records;
    }
}
exports.default = RealtimeChannel;

},{"./lib/constants":"jMQgQ","./lib/push":"1ZEEl","./lib/timer":"2jFhh","./RealtimePresence":"iOr8b","./lib/transformers":"30HoB","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1ZEEl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../lib/constants");
class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */ constructor(channel, event, payload = {}, timeout = (0, _constants.DEFAULT_TIMEOUT)){
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = "";
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived("timeout")) return;
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        this.recHooks.push({
            status,
            callback
        });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        this.ref = this.channel.socket._makeRef();
        this.refEvent = this.channel._replyEventName(this.ref);
        const callback = (payload)=>{
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel._on(this.refEvent, {}, callback);
        this.timeoutTimer = setTimeout(()=>{
            this.trigger("timeout", {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent) this.channel._trigger(this.refEvent, {
            status,
            response
        });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) return;
        this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response }) {
        this.recHooks.filter((h)=>h.status === status).forEach((h)=>h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
}
exports.default = Push;

},{"../lib/constants":"jMQgQ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iOr8b":[function(require,module,exports) {
/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "REALTIME_PRESENCE_LISTEN_EVENTS", ()=>REALTIME_PRESENCE_LISTEN_EVENTS);
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS) {
    REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
class RealtimePresence {
    /**
     * Initializes the Presence.
     *
     * @param channel - The RealtimeChannel
     * @param opts - The options,
     *        for example `{events: {state: 'state', diff: 'diff'}}`
     */ constructor(channel, opts){
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.caller = {
            onJoin: ()=>{},
            onLeave: ()=>{},
            onSync: ()=>{}
        };
        const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(events.state, {}, (newState)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            this.joinRef = this.channel._joinRef();
            this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff)=>{
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, (diff)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            if (this.inPendingSyncState()) this.pendingDiffs.push(diff);
            else {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin((key, currentPresences, newPresences)=>{
            this.channel._trigger("presence", {
                event: "join",
                key,
                currentPresences,
                newPresences
            });
        });
        this.onLeave((key, currentPresences, leftPresences)=>{
            this.channel._trigger("presence", {
                event: "leave",
                key,
                currentPresences,
                leftPresences
            });
        });
        this.onSync(()=>{
            this.channel._trigger("presence", {
                event: "sync"
            });
        });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */ static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences)=>{
            if (!transformedState[key]) leaves[key] = presences;
        });
        this.map(transformedState, (key, newPresences)=>{
            const currentPresences = state[key];
            if (currentPresences) {
                const newPresenceRefs = newPresences.map((m)=>m.presence_ref);
                const curPresenceRefs = currentPresences.map((m)=>m.presence_ref);
                const joinedPresences = newPresences.filter((m)=>curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter((m)=>newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) joins[key] = joinedPresences;
                if (leftPresences.length > 0) leaves[key] = leftPresences;
            } else joins[key] = newPresences;
        });
        return this.syncDiff(state, {
            joins,
            leaves
        }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */ static syncDiff(state, diff, onJoin, onLeave) {
        const { joins, leaves } = {
            joins: this.transformState(diff.joins),
            leaves: this.transformState(diff.leaves)
        };
        if (!onJoin) onJoin = ()=>{};
        if (!onLeave) onLeave = ()=>{};
        this.map(joins, (key, newPresences)=>{
            var _a;
            const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
            state[key] = this.cloneDeep(newPresences);
            if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map((m)=>m.presence_ref);
                const curPresences = currentPresences.filter((m)=>joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
            }
            onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences)=>{
            let currentPresences = state[key];
            if (!currentPresences) return;
            const presenceRefsToRemove = leftPresences.map((m)=>m.presence_ref);
            currentPresences = currentPresences.filter((m)=>presenceRefsToRemove.indexOf(m.presence_ref) < 0);
            state[key] = currentPresences;
            onLeave(key, currentPresences, leftPresences);
            if (currentPresences.length === 0) delete state[key];
        });
        return state;
    }
    /** @internal */ static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key)=>func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */ static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key)=>{
            const presences = state[key];
            if ("metas" in presences) newState[key] = presences.metas.map((presence)=>{
                presence["presence_ref"] = presence["phx_ref"];
                delete presence["phx_ref"];
                delete presence["phx_ref_prev"];
                return presence;
            });
            else newState[key] = presences;
            return newState;
        }, {});
    }
    /** @internal */ static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */ onJoin(callback) {
        this.caller.onJoin = callback;
    }
    /** @internal */ onLeave(callback) {
        this.caller.onLeave = callback;
    }
    /** @internal */ onSync(callback) {
        this.caller.onSync = callback;
    }
    /** @internal */ inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
}
exports.default = RealtimePresence;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"30HoB":[function(require,module,exports) {
/**
 * Helpers to convert the change Payload into native JS types.
 */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PostgresTypes", ()=>PostgresTypes);
parcelHelpers.export(exports, "convertChangeData", ()=>convertChangeData);
parcelHelpers.export(exports, "convertColumn", ()=>convertColumn);
parcelHelpers.export(exports, "convertCell", ()=>convertCell);
parcelHelpers.export(exports, "toBoolean", ()=>toBoolean);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toJson", ()=>toJson);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "toTimestampString", ()=>toTimestampString);
var PostgresTypes;
(function(PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
const convertChangeData = (columns, record, options = {})=>{
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key)=>{
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
const convertColumn = (columnName, columns, record, skipTypes)=>{
    const column = columns.find((x)=>x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) return convertCell(colType, value);
    return noop(value);
};
const convertCell = (type, value)=>{
    // if data type is an array
    if (type.charAt(0) === "_") {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch(type){
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            // Return the value for remaining types
            return noop(value);
    }
};
const noop = (value)=>{
    return value;
};
const toBoolean = (value)=>{
    switch(value){
        case "t":
            return true;
        case "f":
            return false;
        default:
            return value;
    }
};
const toNumber = (value)=>{
    if (typeof value === "string") {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) return parsedValue;
    }
    return value;
};
const toJson = (value)=>{
    if (typeof value === "string") try {
        return JSON.parse(value);
    } catch (error) {
        console.log(`JSON parse error: ${error}`);
        return value;
    }
    return value;
};
const toArray = (value, type)=>{
    if (typeof value !== "string") return value;
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === "{" && closeBrace === "}") {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse("[" + valTrim + "]");
        } catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(",") : [];
        }
        return arr.map((val)=>convertCell(type, val));
    }
    return value;
};
const toTimestampString = (value)=>{
    if (typeof value === "string") return value.replace(" ", "T");
    return value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"grgiq":[function(require,module,exports) {
module.exports = require("1afa003d8afc77c0")(require("a9da5da718e42023").getBundleURL("1Q55w") + "browser.aee58857.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("2B5cO"));

},{"1afa003d8afc77c0":"3dDkg","a9da5da718e42023":"jkqJ4"}],"3dDkg":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"khH0r"}],"khH0r":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"jkqJ4":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"d6HNz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageClient", ()=>(0, _storageClient.StorageClient));
var _storageClient = require("./StorageClient");
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _errors = require("./lib/errors");
parcelHelpers.exportAll(_errors, exports);

},{"./StorageClient":"7TTBE","./lib/types":false,"./lib/errors":false,"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7TTBE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageClient", ()=>StorageClient);
var _storageFileApi = require("./packages/StorageFileApi");
var _storageFileApiDefault = parcelHelpers.interopDefault(_storageFileApi);
var _storageBucketApi = require("./packages/StorageBucketApi");
var _storageBucketApiDefault = parcelHelpers.interopDefault(_storageBucketApi);
class StorageClient extends (0, _storageBucketApiDefault.default) {
    constructor(url, headers = {}, fetch){
        super(url, headers, fetch);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */ from(id) {
        return new (0, _storageFileApiDefault.default)(this.url, this.headers, id, this.fetch);
    }
}

},{"./packages/StorageFileApi":"g1oV3","./packages/StorageBucketApi":"fCJfe","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"g1oV3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _errors = require("../lib/errors");
var _fetch = require("../lib/fetch");
var _helpers = require("../lib/helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: false
};
class StorageFileApi {
    constructor(url, headers = {}, bucketId, fetch){
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = (0, _helpers.resolveFetch)(fetch);
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), method === "POST" && {
                    "x-upsert": String(options.upsert)
                });
                if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append("cacheControl", options.cacheControl);
                    body.append("", fileBody);
                } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append("cacheControl", options.cacheControl);
                } else {
                    body = fileBody;
                    headers["cache-control"] = `max-age=${options.cacheControl}`;
                    headers["content-type"] = options.contentType;
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const res = yield this.fetch(`${this.url}/object/${_path}`, Object.assign({
                    method,
                    body: body,
                    headers
                }, (options === null || options === void 0 ? void 0 : options.duplex) ? {
                    duplex: options.duplex
                } : {}));
                const data = yield res.json();
                if (res.ok) return {
                    data: {
                        path: cleanPath,
                        id: data.Id,
                        fullPath: data.Key
                    },
                    error: null
                };
                else {
                    const error = data;
                    return {
                        data: null,
                        error
                    };
                }
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ upload(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("POST", path, fileBody, fileOptions);
        });
    }
    /**
     * Upload a file with a token generated from `createSignedUploadUrl`.
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param token The token generated from `createSignedUploadUrl`
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadToSignedUrl(path, token, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            const cleanPath = this._removeEmptyFolders(path);
            const _path = this._getFinalPath(cleanPath);
            const url = new URL(this.url + `/object/upload/sign/${_path}`);
            url.searchParams.set("token", token);
            try {
                let body;
                const options = Object.assign({
                    upsert: DEFAULT_FILE_OPTIONS.upsert
                }, fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), {
                    "x-upsert": String(options.upsert)
                });
                if (typeof Blob !== "undefined" && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append("cacheControl", options.cacheControl);
                    body.append("", fileBody);
                } else if (typeof FormData !== "undefined" && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append("cacheControl", options.cacheControl);
                } else {
                    body = fileBody;
                    headers["cache-control"] = `max-age=${options.cacheControl}`;
                    headers["content-type"] = options.contentType;
                }
                const res = yield this.fetch(url.toString(), {
                    method: "PUT",
                    body: body,
                    headers
                });
                const data = yield res.json();
                if (res.ok) return {
                    data: {
                        path: cleanPath,
                        fullPath: data.Key
                    },
                    error: null
                };
                else {
                    const error = data;
                    return {
                        data: null,
                        error
                    };
                }
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a signed upload URL.
     * Signed upload URLs can be used to upload files to the bucket without further authentication.
     * They are valid for 2 hours.
     * @param path The file path, including the current file name. For example `folder/image.png`.
     */ createSignedUploadUrl(path) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, {
                    headers: this.headers
                });
                const url = new URL(this.url + data.url);
                const token = url.searchParams.get("token");
                if (!token) throw new (0, _errors.StorageError)("No token returned by API");
                return {
                    data: {
                        signedUrl: url.toString(),
                        path,
                        token
                    },
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
     * @param fileBody The body of the file to be stored in the bucket.
     */ update(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate("PUT", path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     */ move(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/move`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Copies an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */ copy(fromPath, toPath) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/copy`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath
                }, {
                    headers: this.headers
                });
                return {
                    data: {
                        path: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ createSignedUrl(path, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                let data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({
                    expiresIn
                }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                    transform: options.transform
                } : {}), {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
                const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
                data = {
                    signedUrl
                };
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     */ createSignedUrls(paths, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn,
                    paths
                }, {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? "" : options.download}` : "";
                return {
                    data: data.map((datum)=>Object.assign(Object.assign({}, datum), {
                            signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`) : null
                        })),
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
     *
     * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
     * @param options.transform Transform the asset before serving it to the client.
     */ download(path, options) {
        return __awaiter(this, void 0, void 0, function*() {
            const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
            const renderPath = wantsTransformation ? "render/image/authenticated" : "object";
            const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
            const queryString = transformationQuery ? `?${transformationQuery}` : "";
            try {
                const _path = this._getFinalPath(path);
                const res = yield (0, _fetch.get)(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                    headers: this.headers,
                    noResolveJson: true
                });
                const data = yield res.blob();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
     * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
     *
     * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
     * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ getPublicUrl(path, options) {
        const _path = this._getFinalPath(path);
        const _queryString = [];
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? "" : options.download}` : "";
        if (downloadQueryParam !== "") _queryString.push(downloadQueryParam);
        const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
        const renderPath = wantsTransformation ? "render/image" : "object";
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        if (transformationQuery !== "") _queryString.push(transformationQuery);
        let queryString = _queryString.join("&");
        if (queryString !== "") queryString = `?${queryString}`;
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`)
            }
        };
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
     */ remove(paths) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.remove)(this.fetch, `${this.url}/object/${this.bucketId}`, {
                    prefixes: paths
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */ // async getMetadata(
    //   id: string
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */ // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await post(
    //       this.fetch,
    //       `${this.url}/metadata/${id}`,
    //       { ...meta },
    //       { headers: this.headers }
    //     )
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     */ list(path, options, parameters) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                    prefix: path || ""
                });
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(transform) {
        const params = [];
        if (transform.width) params.push(`width=${transform.width}`);
        if (transform.height) params.push(`height=${transform.height}`);
        if (transform.resize) params.push(`resize=${transform.resize}`);
        if (transform.format) params.push(`format=${transform.format}`);
        if (transform.quality) params.push(`quality=${transform.quality}`);
        return params.join("&");
    }
}
exports.default = StorageFileApi;

},{"../lib/errors":"7X8pZ","../lib/fetch":"29QhY","../lib/helpers":"bW2UD","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7X8pZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageError", ()=>StorageError);
parcelHelpers.export(exports, "isStorageError", ()=>isStorageError);
parcelHelpers.export(exports, "StorageApiError", ()=>StorageApiError);
parcelHelpers.export(exports, "StorageUnknownError", ()=>StorageUnknownError);
class StorageError extends Error {
    constructor(message){
        super(message);
        this.__isStorageError = true;
        this.name = "StorageError";
    }
}
function isStorageError(error) {
    return typeof error === "object" && error !== null && "__isStorageError" in error;
}
class StorageApiError extends StorageError {
    constructor(message, status){
        super(message);
        this.name = "StorageApiError";
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status
        };
    }
}
class StorageUnknownError extends StorageError {
    constructor(message, originalError){
        super(message);
        this.name = "StorageUnknownError";
        this.originalError = originalError;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"29QhY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "post", ()=>post);
parcelHelpers.export(exports, "put", ()=>put);
parcelHelpers.export(exports, "remove", ()=>remove);
var _errors = require("./errors");
var _helpers = require("./helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject)=>__awaiter(void 0, void 0, void 0, function*() {
        const Res = yield (0, _helpers.resolveResponse)();
        if (error instanceof Res) error.json().then((err)=>{
            reject(new (0, _errors.StorageApiError)(_getErrorMessage(err), error.status || 500));
        }).catch((err)=>{
            reject(new (0, _errors.StorageUnknownError)(_getErrorMessage(err), err));
        });
        else reject(new (0, _errors.StorageUnknownError)(_getErrorMessage(error), error));
    });
const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher, method, url, options, parameters, body) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            fetcher(url, _getRequestParams(method, options, parameters, body)).then((result)=>{
                if (!result.ok) throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
                return result.json();
            }).then((data)=>resolve(data)).catch((error)=>handleError(error, reject));
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "GET", url, options, parameters);
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "POST", url, options, parameters, body);
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "PUT", url, options, parameters, body);
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, "DELETE", url, options, parameters, body);
    });
}

},{"./errors":"7X8pZ","./helpers":"bW2UD","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bW2UD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
parcelHelpers.export(exports, "resolveResponse", ()=>resolveResponse);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>require("d0262cf6b6e3064e").then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const resolveResponse = ()=>__awaiter(void 0, void 0, void 0, function*() {
        if (typeof Response === "undefined") // @ts-ignore
        return (yield require("d0262cf6b6e3064e")).Response;
        return Response;
    });

},{"d0262cf6b6e3064e":"5aZ41","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fCJfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../lib/constants");
var _errors = require("../lib/errors");
var _fetch = require("../lib/fetch");
var _helpers = require("../lib/helpers");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StorageBucketApi {
    constructor(url, headers = {}, fetch){
        this.url = url;
        this.headers = Object.assign(Object.assign({}, (0, _constants.DEFAULT_HEADERS)), headers);
        this.fetch = (0, _helpers.resolveFetch)(fetch);
    }
    /**
     * Retrieves the details of all Storage buckets within an existing project.
     */ listBuckets() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */ getBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.get)(this.fetch, `${this.url}/bucket/${id}`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     * @returns newly created bucket id
     */ createBucket(id, options = {
        public: false
    }) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/bucket`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Updates a Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     */ updateBucket(id, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.put)(this.fetch, `${this.url}/bucket/${id}`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */ emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.post)(this.fetch, `${this.url}/bucket/${id}/empty`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */ deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, _fetch.remove)(this.fetch, `${this.url}/bucket/${id}`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if ((0, _errors.isStorageError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
}
exports.default = StorageBucketApi;

},{"../lib/constants":"dzylt","../lib/errors":"7X8pZ","../lib/fetch":"29QhY","../lib/helpers":"bW2UD","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dzylt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
var _version = require("./version");
const DEFAULT_HEADERS = {
    "X-Client-Info": `storage-js/${(0, _version.version)}`
};

},{"./version":"htRtt","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"htRtt":[function(require,module,exports) {
// generated by genversion
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.5.5";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iNMpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "DEFAULT_GLOBAL_OPTIONS", ()=>DEFAULT_GLOBAL_OPTIONS);
parcelHelpers.export(exports, "DEFAULT_DB_OPTIONS", ()=>DEFAULT_DB_OPTIONS);
parcelHelpers.export(exports, "DEFAULT_AUTH_OPTIONS", ()=>DEFAULT_AUTH_OPTIONS);
parcelHelpers.export(exports, "DEFAULT_REALTIME_OPTIONS", ()=>DEFAULT_REALTIME_OPTIONS);
var _version = require("./version");
let JS_ENV = "";
// @ts-ignore
if (typeof Deno !== "undefined") JS_ENV = "deno";
else if (typeof document !== "undefined") JS_ENV = "web";
else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") JS_ENV = "react-native";
else JS_ENV = "node";
const DEFAULT_HEADERS = {
    "X-Client-Info": `supabase-js-${JS_ENV}/${(0, _version.version)}`
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
const DEFAULT_DB_OPTIONS = {
    schema: "public"
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "implicit"
};
const DEFAULT_REALTIME_OPTIONS = {};

},{"./version":"kjI7B","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kjI7B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.42.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bL75C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
parcelHelpers.export(exports, "resolveHeadersConstructor", ()=>resolveHeadersConstructor);
parcelHelpers.export(exports, "fetchWithAuth", ()=>fetchWithAuth);
// @ts-ignore
var _nodeFetch = require("@supabase/node-fetch");
var _nodeFetchDefault = parcelHelpers.interopDefault(_nodeFetch);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (0, _nodeFetchDefault.default);
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const resolveHeadersConstructor = ()=>{
    if (typeof Headers === "undefined") return 0, _nodeFetch.Headers;
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = resolveFetch(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return (input, init)=>__awaiter(void 0, void 0, void 0, function*() {
            var _a;
            const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
            let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
            if (!headers.has("apikey")) headers.set("apikey", supabaseKey);
            if (!headers.has("Authorization")) headers.set("Authorization", `Bearer ${accessToken}`);
            return fetch1(input, Object.assign(Object.assign({}, init), {
                headers
            }));
        });
};

},{"@supabase/node-fetch":"inpgO","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6daKy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "stripTrailingSlash", ()=>stripTrailingSlash);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "applySettingDefaults", ()=>applySettingDefaults);
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function stripTrailingSlash(url) {
    return url.replace(/\/$/, "");
}
const isBrowser = ()=>typeof window !== "undefined";
function applySettingDefaults(options, defaults) {
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    return {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fhW0J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SupabaseAuthClient", ()=>SupabaseAuthClient);
var _authJs = require("@supabase/auth-js");
class SupabaseAuthClient extends (0, _authJs.AuthClient) {
    constructor(options){
        super(options);
    }
}

},{"@supabase/auth-js":"H9zoK","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"H9zoK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navigatorLock", ()=>(0, _locks.navigatorLock));
parcelHelpers.export(exports, "NavigatorLockAcquireTimeoutError", ()=>(0, _locks.NavigatorLockAcquireTimeoutError));
parcelHelpers.export(exports, "lockInternals", ()=>(0, _locks.internals));
parcelHelpers.export(exports, "GoTrueAdminApi", ()=>(0, _goTrueAdminApiDefault.default));
parcelHelpers.export(exports, "GoTrueClient", ()=>(0, _goTrueClientDefault.default));
parcelHelpers.export(exports, "AuthAdminApi", ()=>(0, _authAdminApiDefault.default));
parcelHelpers.export(exports, "AuthClient", ()=>(0, _authClientDefault.default));
var _goTrueAdminApi = require("./GoTrueAdminApi");
var _goTrueAdminApiDefault = parcelHelpers.interopDefault(_goTrueAdminApi);
var _goTrueClient = require("./GoTrueClient");
var _goTrueClientDefault = parcelHelpers.interopDefault(_goTrueClient);
var _authAdminApi = require("./AuthAdminApi");
var _authAdminApiDefault = parcelHelpers.interopDefault(_authAdminApi);
var _authClient = require("./AuthClient");
var _authClientDefault = parcelHelpers.interopDefault(_authClient);
var _types = require("./lib/types");
parcelHelpers.exportAll(_types, exports);
var _errors = require("./lib/errors");
parcelHelpers.exportAll(_errors, exports);
var _locks = require("./lib/locks");

},{"./GoTrueAdminApi":"cZOCe","./GoTrueClient":"j7FfD","./AuthAdminApi":"fTHdd","./AuthClient":"gsWfA","./lib/types":"acnk7","./lib/errors":"aGVxJ","./lib/locks":"2HeFx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cZOCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetch = require("./lib/fetch");
var _helpers = require("./lib/helpers");
var _errors = require("./lib/errors");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
class GoTrueAdminApi {
    constructor({ url = "", headers = {}, fetch }){
        this.url = url;
        this.headers = headers;
        this.fetch = (0, _helpers.resolveFetch)(fetch);
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        };
    }
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     * @param scope The logout sope.
     */ async signOut(jwt, scope = "global") {
        try {
            await (0, _fetch._request)(this.fetch, "POST", `${this.url}/logout?scope=${scope}`, {
                headers: this.headers,
                jwt,
                noResolveJson: true
            });
            return {
                data: null,
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param options Additional options to be included when inviting.
     */ async inviteUserByEmail(email, options = {}) {
        try {
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/invite`, {
                body: {
                    email,
                    data: options.data
                },
                headers: this.headers,
                redirectTo: options.redirectTo,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Generates email links and OTPs to be sent via a custom email provider.
     * @param email The user's email.
     * @param options.password User password. For signup only.
     * @param options.data Optional user metadata. For signup only.
     * @param options.redirectTo The redirect url which should be appended to the generated link
     */ async generateLink(params) {
        try {
            const { options } = params, rest = __rest(params, [
                "options"
            ]);
            const body = Object.assign(Object.assign({}, rest), options);
            if ("newEmail" in rest) {
                // replace newEmail with new_email in request body
                body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
                delete body["newEmail"];
            }
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: body,
                headers: this.headers,
                xform: (0, _fetch._generateLinkResponse),
                redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    properties: null,
                    user: null
                },
                error
            };
            throw error;
        }
    }
    // User Admin API
    /**
     * Creates a new user.
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async createUser(attributes) {
        try {
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/admin/users`, {
                body: attributes,
                headers: this.headers,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
     */ async listUsers(params) {
        var _a, _b, _c, _d, _e, _f, _g;
        try {
            const pagination = {
                nextPage: null,
                lastPage: 0,
                total: 0
            };
            const response = await (0, _fetch._request)(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: true,
                query: {
                    page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
                    per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
                },
                xform: (0, _fetch._noResolveJsonResponse)
            });
            if (response.error) throw response.error;
            const users = await response.json();
            const total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
            const links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
            if (links.length > 0) {
                links.forEach((link)=>{
                    const page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
                    const rel = JSON.parse(link.split(";")[1].split("=")[1]);
                    pagination[`${rel}Page`] = page;
                });
                pagination.total = parseInt(total);
            }
            return {
                data: Object.assign(Object.assign({}, users), pagination),
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    users: []
                },
                error
            };
            throw error;
        }
    }
    /**
     * Get user by id.
     *
     * @param uid The user's unique identifier
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async getUserById(uid) {
        try {
            return await (0, _fetch._request)(this.fetch, "GET", `${this.url}/admin/users/${uid}`, {
                headers: this.headers,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Updates the user data.
     *
     * @param attributes The data you want to update.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async updateUserById(uid, attributes) {
        try {
            return await (0, _fetch._request)(this.fetch, "PUT", `${this.url}/admin/users/${uid}`, {
                body: attributes,
                headers: this.headers,
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * @param id The user id you want to remove.
     * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
     * Defaults to false for backward compatibility.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */ async deleteUser(id, shouldSoftDelete = false) {
        try {
            return await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/admin/users/${id}`, {
                headers: this.headers,
                body: {
                    should_soft_delete: shouldSoftDelete
                },
                xform: (0, _fetch._userResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    async _listFactors(params) {
        try {
            const { data, error } = await (0, _fetch._request)(this.fetch, "GET", `${this.url}/admin/users/${params.userId}/factors`, {
                headers: this.headers,
                xform: (factors)=>{
                    return {
                        data: {
                            factors
                        },
                        error: null
                    };
                }
            });
            return {
                data,
                error
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    async _deleteFactor(params) {
        try {
            const data = await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
                headers: this.headers
            });
            return {
                data,
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
}
exports.default = GoTrueAdminApi;

},{"./lib/fetch":"b81us","./lib/helpers":"hg2Fd","./lib/errors":"aGVxJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"b81us":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "_request", ()=>_request);
parcelHelpers.export(exports, "_sessionResponse", ()=>_sessionResponse);
parcelHelpers.export(exports, "_sessionResponsePassword", ()=>_sessionResponsePassword);
parcelHelpers.export(exports, "_userResponse", ()=>_userResponse);
parcelHelpers.export(exports, "_ssoResponse", ()=>_ssoResponse);
parcelHelpers.export(exports, "_generateLinkResponse", ()=>_generateLinkResponse);
parcelHelpers.export(exports, "_noResolveJsonResponse", ()=>_noResolveJsonResponse);
var _constants = require("./constants");
var _helpers = require("./helpers");
var _errors = require("./errors");
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const NETWORK_ERROR_CODES = [
    502,
    503,
    504
];
async function handleError(error) {
    var _a;
    if (!(0, _helpers.looksLikeFetchResponse)(error)) throw new (0, _errors.AuthRetryableFetchError)(_getErrorMessage(error), 0);
    if (NETWORK_ERROR_CODES.includes(error.status)) // status in 500...599 range - server had an error, request might be retryed.
    throw new (0, _errors.AuthRetryableFetchError)(_getErrorMessage(error), error.status);
    let data;
    try {
        data = await error.json();
    } catch (e) {
        throw new (0, _errors.AuthUnknownError)(_getErrorMessage(e), e);
    }
    let errorCode = undefined;
    const responseAPIVersion = (0, _helpers.parseResponseAPIVersion)(error);
    if (responseAPIVersion && responseAPIVersion.getTime() >= (0, _constants.API_VERSIONS)["2024-01-01"].timestamp && typeof data === "object" && data && typeof data.code === "string") errorCode = data.code;
    else if (typeof data === "object" && data && typeof data.error_code === "string") errorCode = data.error_code;
    if (!errorCode) {
        // Legacy support for weak password errors, when there were no error codes
        if (typeof data === "object" && data && typeof data.weak_password === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce((a, i)=>a && typeof i === "string", true)) throw new (0, _errors.AuthWeakPasswordError)(_getErrorMessage(data), error.status, data.weak_password.reasons);
    } else if (errorCode === "weak_password") throw new (0, _errors.AuthWeakPasswordError)(_getErrorMessage(data), error.status, ((_a = data.weak_password) === null || _a === void 0 ? void 0 : _a.reasons) || []);
    throw new (0, _errors.AuthApiError)(_getErrorMessage(data), error.status || 500, errorCode);
}
const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") return params;
    params.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
async function _request(fetcher, method, url, options) {
    var _a;
    const headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
    if (!headers[0, _constants.API_VERSION_HEADER_NAME]) headers[0, _constants.API_VERSION_HEADER_NAME] = (0, _constants.API_VERSIONS)["2024-01-01"].name;
    if (options === null || options === void 0 ? void 0 : options.jwt) headers["Authorization"] = `Bearer ${options.jwt}`;
    const qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
    if (options === null || options === void 0 ? void 0 : options.redirectTo) qs["redirect_to"] = options.redirectTo;
    const queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
    const data = await _handleRequest(fetcher, method, url + queryString, {
        headers,
        noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
    }, {}, options === null || options === void 0 ? void 0 : options.body);
    return (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : {
        data: Object.assign({}, data),
        error: null
    };
}
async function _handleRequest(fetcher, method, url, options, parameters, body) {
    const requestParams = _getRequestParams(method, options, parameters, body);
    let result;
    try {
        result = await fetcher(url, Object.assign(Object.assign({}, requestParams), {
            // UNDER NO CIRCUMSTANCE SHOULD THIS OPTION BE REMOVED, YOU MAY BE OPENING UP A SECURITY HOLE IN NEXT.JS APPS
            // https://nextjs.org/docs/app/building-your-application/caching#opting-out-1
            cache: "no-store"
        }));
    } catch (e) {
        console.error(e);
        // fetch failed, likely due to a network or CORS error
        throw new (0, _errors.AuthRetryableFetchError)(_getErrorMessage(e), 0);
    }
    if (!result.ok) await handleError(result);
    if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
    try {
        return await result.json();
    } catch (e) {
        await handleError(e);
    }
}
function _sessionResponse(data) {
    var _a;
    let session = null;
    if (hasSession(data)) {
        session = Object.assign({}, data);
        if (!data.expires_at) session.expires_at = (0, _helpers.expiresAt)(data.expires_in);
    }
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            session,
            user
        },
        error: null
    };
}
function _sessionResponsePassword(data) {
    const response = _sessionResponse(data);
    if (!response.error && data.weak_password && typeof data.weak_password === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce((a, i)=>a && typeof i === "string", true)) response.data.weak_password = data.weak_password;
    return response;
}
function _userResponse(data) {
    var _a;
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            user
        },
        error: null
    };
}
function _ssoResponse(data) {
    return {
        data,
        error: null
    };
}
function _generateLinkResponse(data) {
    const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = __rest(data, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type"
    ]);
    const properties = {
        action_link,
        email_otp,
        hashed_token,
        redirect_to,
        verification_type
    };
    const user = Object.assign({}, rest);
    return {
        data: {
            properties,
            user
        },
        error: null
    };
}
function _noResolveJsonResponse(data) {
    return data;
}
/**
 * hasSession checks if the response object contains a valid session
 * @param data A response object
 * @returns true if a session is in the response
 */ function hasSession(data) {
    return data.access_token && data.refresh_token && data.expires_in;
}

},{"./constants":"04zmg","./helpers":"hg2Fd","./errors":"aGVxJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"04zmg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GOTRUE_URL", ()=>GOTRUE_URL);
parcelHelpers.export(exports, "STORAGE_KEY", ()=>STORAGE_KEY);
parcelHelpers.export(exports, "AUDIENCE", ()=>AUDIENCE);
parcelHelpers.export(exports, "DEFAULT_HEADERS", ()=>DEFAULT_HEADERS);
parcelHelpers.export(exports, "EXPIRY_MARGIN", ()=>EXPIRY_MARGIN);
parcelHelpers.export(exports, "NETWORK_FAILURE", ()=>NETWORK_FAILURE);
parcelHelpers.export(exports, "API_VERSION_HEADER_NAME", ()=>API_VERSION_HEADER_NAME);
parcelHelpers.export(exports, "API_VERSIONS", ()=>API_VERSIONS);
var _version = require("./version");
const GOTRUE_URL = "http://localhost:9999";
const STORAGE_KEY = "supabase.auth.token";
const AUDIENCE = "";
const DEFAULT_HEADERS = {
    "X-Client-Info": `gotrue-js/${(0, _version.version)}`
};
const EXPIRY_MARGIN = 10; // in seconds
const NETWORK_FAILURE = {
    MAX_RETRIES: 10,
    RETRY_INTERVAL: 2
};
const API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
const API_VERSIONS = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
};

},{"./version":"8lpVC","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8lpVC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
const version = "2.63.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hg2Fd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expiresAt", ()=>expiresAt);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "supportsLocalStorage", ()=>supportsLocalStorage);
/**
 * Extracts parameters encoded in the URL both in the query and fragment.
 */ parcelHelpers.export(exports, "parseParametersFromURL", ()=>parseParametersFromURL);
parcelHelpers.export(exports, "resolveFetch", ()=>resolveFetch);
parcelHelpers.export(exports, "looksLikeFetchResponse", ()=>looksLikeFetchResponse);
parcelHelpers.export(exports, "setItemAsync", ()=>setItemAsync);
parcelHelpers.export(exports, "getItemAsync", ()=>getItemAsync);
parcelHelpers.export(exports, "removeItemAsync", ()=>removeItemAsync);
parcelHelpers.export(exports, "decodeBase64URL", ()=>decodeBase64URL);
/**
 * A deferred represents some asynchronous work that is not yet finished, which
 * may or may not culminate in a value.
 * Taken from: https://github.com/mike-north/types/blob/master/src/async.ts
 */ parcelHelpers.export(exports, "Deferred", ()=>Deferred);
// Taken from: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
parcelHelpers.export(exports, "decodeJWTPayload", ()=>decodeJWTPayload);
/**
 * Creates a promise that resolves to null after some time.
 */ parcelHelpers.export(exports, "sleep", ()=>sleep);
/**
 * Converts the provided async function into a retryable function. Each result
 * or thrown error is sent to the isRetryable function which should return true
 * if the function should run again.
 */ parcelHelpers.export(exports, "retryable", ()=>retryable);
// Functions below taken from: https://stackoverflow.com/questions/63309409/creating-a-code-verifier-and-challenge-for-pkce-auth-on-spotify-api-in-reactjs
parcelHelpers.export(exports, "generatePKCEVerifier", ()=>generatePKCEVerifier);
parcelHelpers.export(exports, "generatePKCEChallenge", ()=>generatePKCEChallenge);
parcelHelpers.export(exports, "getCodeChallengeAndMethod", ()=>getCodeChallengeAndMethod);
parcelHelpers.export(exports, "parseResponseAPIVersion", ()=>parseResponseAPIVersion);
var _constants = require("./constants");
function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
const isBrowser = ()=>typeof document !== "undefined";
const localStorageWriteTests = {
    tested: false,
    writable: false
};
const supportsLocalStorage = ()=>{
    if (!isBrowser()) return false;
    try {
        if (typeof globalThis.localStorage !== "object") return false;
    } catch (e) {
        // DOM exception when accessing `localStorage`
        return false;
    }
    if (localStorageWriteTests.tested) return localStorageWriteTests.writable;
    const randomKey = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(randomKey, randomKey);
        globalThis.localStorage.removeItem(randomKey);
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = true;
    } catch (e) {
        // localStorage can't be written to
        // https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = false;
    }
    return localStorageWriteTests.writable;
};
function parseParametersFromURL(href) {
    const result = {};
    const url = new URL(href);
    if (url.hash && url.hash[0] === "#") try {
        const hashSearchParams = new URLSearchParams(url.hash.substring(1));
        hashSearchParams.forEach((value, key)=>{
            result[key] = value;
        });
    } catch (e) {
    // hash is not a query string
    }
    // search parameters take precedence over hash parameters
    url.searchParams.forEach((value, key)=>{
        result[key] = value;
    });
    return result;
}
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) _fetch = customFetch;
    else if (typeof fetch === "undefined") _fetch = (...args)=>require("b14de0e012a619af").then(({ default: fetch1 })=>fetch1(...args));
    else _fetch = fetch;
    return (...args)=>_fetch(...args);
};
const looksLikeFetchResponse = (maybeResponse)=>{
    return typeof maybeResponse === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
};
const setItemAsync = async (storage, key, data)=>{
    await storage.setItem(key, JSON.stringify(data));
};
const getItemAsync = async (storage, key)=>{
    const value = await storage.getItem(key);
    if (!value) return null;
    try {
        return JSON.parse(value);
    } catch (_a) {
        return value;
    }
};
const removeItemAsync = async (storage, key)=>{
    await storage.removeItem(key);
};
function decodeBase64URL(value) {
    const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let base64 = "";
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    value = value.replace("-", "+").replace("_", "/");
    while(i < value.length){
        enc1 = key.indexOf(value.charAt(i++));
        enc2 = key.indexOf(value.charAt(i++));
        enc3 = key.indexOf(value.charAt(i++));
        enc4 = key.indexOf(value.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        base64 = base64 + String.fromCharCode(chr1);
        if (enc3 != 64 && chr2 != 0) base64 = base64 + String.fromCharCode(chr2);
        if (enc4 != 64 && chr3 != 0) base64 = base64 + String.fromCharCode(chr3);
    }
    return base64;
}
class Deferred {
    constructor(){
        this.promise = new Deferred.promiseConstructor((res, rej)=>{
            this.resolve = res;
            this.reject = rej;
        });
    }
}
Deferred.promiseConstructor = Promise;
function decodeJWTPayload(token) {
    // Regex checks for base64url format
    const base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i;
    const parts = token.split(".");
    if (parts.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
    if (!base64UrlRegex.test(parts[1])) throw new Error("JWT is not valid: payload is not in base64url format");
    const base64Url = parts[1];
    return JSON.parse(decodeBase64URL(base64Url));
}
async function sleep(time) {
    return await new Promise((accept)=>{
        setTimeout(()=>accept(null), time);
    });
}
function retryable(fn, isRetryable) {
    const promise = new Promise((accept, reject)=>{
        (async ()=>{
            for(let attempt = 0; attempt < Infinity; attempt++)try {
                const result = await fn(attempt);
                if (!isRetryable(attempt, null, result)) {
                    accept(result);
                    return;
                }
            } catch (e) {
                if (!isRetryable(attempt, e)) {
                    reject(e);
                    return;
                }
            }
        })();
    });
    return promise;
}
function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
}
function generatePKCEVerifier() {
    const verifierLength = 56;
    const array = new Uint32Array(verifierLength);
    if (typeof crypto === "undefined") {
        const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
        const charSetLen = charSet.length;
        let verifier = "";
        for(let i = 0; i < verifierLength; i++)verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
        return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join("");
}
async function sha256(randomString) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(randomString);
    const hash = await crypto.subtle.digest("SHA-256", encodedData);
    const bytes = new Uint8Array(hash);
    return Array.from(bytes).map((c)=>String.fromCharCode(c)).join("");
}
function base64urlencode(str) {
    return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function generatePKCEChallenge(verifier) {
    const hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
    if (!hasCryptoSupport) {
        console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
        return verifier;
    }
    const hashed = await sha256(verifier);
    return base64urlencode(hashed);
}
async function getCodeChallengeAndMethod(storage, storageKey, isPasswordRecovery = false) {
    const codeVerifier = generatePKCEVerifier();
    let storedCodeVerifier = codeVerifier;
    if (isPasswordRecovery) storedCodeVerifier += "/PASSWORD_RECOVERY";
    await setItemAsync(storage, `${storageKey}-code-verifier`, storedCodeVerifier);
    const codeChallenge = await generatePKCEChallenge(codeVerifier);
    const codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
    return [
        codeChallenge,
        codeChallengeMethod
    ];
}
/** Parses the API version which is 2YYY-MM-DD. */ const API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function parseResponseAPIVersion(response) {
    const apiVersion = response.headers.get((0, _constants.API_VERSION_HEADER_NAME));
    if (!apiVersion) return null;
    if (!apiVersion.match(API_VERSION_REGEX)) return null;
    try {
        const date = new Date(`${apiVersion}T00:00:00.0Z`);
        return date;
    } catch (e) {
        return null;
    }
}

},{"./constants":"04zmg","b14de0e012a619af":"5aZ41","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aGVxJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthError", ()=>AuthError);
parcelHelpers.export(exports, "isAuthError", ()=>isAuthError);
parcelHelpers.export(exports, "AuthApiError", ()=>AuthApiError);
parcelHelpers.export(exports, "isAuthApiError", ()=>isAuthApiError);
parcelHelpers.export(exports, "AuthUnknownError", ()=>AuthUnknownError);
parcelHelpers.export(exports, "CustomAuthError", ()=>CustomAuthError);
parcelHelpers.export(exports, "AuthSessionMissingError", ()=>AuthSessionMissingError);
parcelHelpers.export(exports, "AuthInvalidTokenResponseError", ()=>AuthInvalidTokenResponseError);
parcelHelpers.export(exports, "AuthInvalidCredentialsError", ()=>AuthInvalidCredentialsError);
parcelHelpers.export(exports, "AuthImplicitGrantRedirectError", ()=>AuthImplicitGrantRedirectError);
parcelHelpers.export(exports, "AuthPKCEGrantCodeExchangeError", ()=>AuthPKCEGrantCodeExchangeError);
parcelHelpers.export(exports, "AuthRetryableFetchError", ()=>AuthRetryableFetchError);
parcelHelpers.export(exports, "isAuthRetryableFetchError", ()=>isAuthRetryableFetchError);
/**
 * This error is thrown on certain methods when the password used is deemed
 * weak. Inspect the reasons to identify what password strength rules are
 * inadequate.
 */ parcelHelpers.export(exports, "AuthWeakPasswordError", ()=>AuthWeakPasswordError);
parcelHelpers.export(exports, "isAuthWeakPasswordError", ()=>isAuthWeakPasswordError);
class AuthError extends Error {
    constructor(message, status, code){
        super(message);
        this.__isAuthError = true;
        this.name = "AuthError";
        this.status = status;
        this.code = code;
    }
}
function isAuthError(error) {
    return typeof error === "object" && error !== null && "__isAuthError" in error;
}
class AuthApiError extends AuthError {
    constructor(message, status, code){
        super(message, status, code);
        this.name = "AuthApiError";
        this.status = status;
        this.code = code;
    }
}
function isAuthApiError(error) {
    return isAuthError(error) && error.name === "AuthApiError";
}
class AuthUnknownError extends AuthError {
    constructor(message, originalError){
        super(message);
        this.name = "AuthUnknownError";
        this.originalError = originalError;
    }
}
class CustomAuthError extends AuthError {
    constructor(message, name, status, code){
        super(message, status, code);
        this.name = name;
        this.status = status;
    }
}
class AuthSessionMissingError extends CustomAuthError {
    constructor(){
        super("Auth session missing!", "AuthSessionMissingError", 400, undefined);
    }
}
class AuthInvalidTokenResponseError extends CustomAuthError {
    constructor(){
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, undefined);
    }
}
class AuthInvalidCredentialsError extends CustomAuthError {
    constructor(message){
        super(message, "AuthInvalidCredentialsError", 400, undefined);
    }
}
class AuthImplicitGrantRedirectError extends CustomAuthError {
    constructor(message, details = null){
        super(message, "AuthImplicitGrantRedirectError", 500, undefined);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        };
    }
}
class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
    constructor(message, details = null){
        super(message, "AuthPKCEGrantCodeExchangeError", 500, undefined);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details
        };
    }
}
class AuthRetryableFetchError extends CustomAuthError {
    constructor(message, status){
        super(message, "AuthRetryableFetchError", status, undefined);
    }
}
function isAuthRetryableFetchError(error) {
    return isAuthError(error) && error.name === "AuthRetryableFetchError";
}
class AuthWeakPasswordError extends CustomAuthError {
    constructor(message, status, reasons){
        super(message, "AuthWeakPasswordError", status, "weak_password");
        this.reasons = reasons;
    }
}
function isAuthWeakPasswordError(error) {
    return isAuthError(error) && error.name === "AuthWeakPasswordError";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"j7FfD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goTrueAdminApi = require("./GoTrueAdminApi");
var _goTrueAdminApiDefault = parcelHelpers.interopDefault(_goTrueAdminApi);
var _constants = require("./lib/constants");
var _errors = require("./lib/errors");
var _fetch = require("./lib/fetch");
var _helpers = require("./lib/helpers");
var _localStorage = require("./lib/local-storage");
var _polyfills = require("./lib/polyfills");
var _version = require("./lib/version");
var _locks = require("./lib/locks");
(0, _polyfills.polyfillGlobalThis)(); // Make "globalThis" available
const DEFAULT_OPTIONS = {
    url: (0, _constants.GOTRUE_URL),
    storageKey: (0, _constants.STORAGE_KEY),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: (0, _constants.DEFAULT_HEADERS),
    flowType: "implicit",
    debug: false
};
/** Current session will be checked for refresh at this interval. */ const AUTO_REFRESH_TICK_DURATION = 30000;
/**
 * A token refresh will be attempted this many ticks before the current session expires. */ const AUTO_REFRESH_TICK_THRESHOLD = 3;
async function lockNoOp(name, acquireTimeout, fn) {
    return await fn();
}
class GoTrueClient {
    /**
     * Create a new client for use in the browser.
     */ constructor(options){
        var _a, _b;
        this.memoryStorage = null;
        this.stateChangeEmitters = new Map();
        this.autoRefreshTicker = null;
        this.visibilityChangedCallback = null;
        this.refreshingDeferred = null;
        /**
         * Keeps track of the async client initialization.
         * When null or not yet resolved the auth state is `unknown`
         * Once resolved the the auth state is known and it's save to call any further client methods.
         * Keep extra care to never reject or throw uncaught errors
         */ this.initializePromise = null;
        this.detectSessionInUrl = true;
        this.lockAcquired = false;
        this.pendingInLock = [];
        /**
         * Used to broadcast state change events to other tabs listening.
         */ this.broadcastChannel = null;
        this.logger = console.log;
        this.insecureGetSessionWarningShown = false;
        this.instanceID = GoTrueClient.nextInstanceID;
        GoTrueClient.nextInstanceID += 1;
        if (this.instanceID > 0 && (0, _helpers.isBrowser)()) console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.logDebugMessages = !!settings.debug;
        if (typeof settings.debug === "function") this.logger = settings.debug;
        this.persistSession = settings.persistSession;
        this.storageKey = settings.storageKey;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.admin = new (0, _goTrueAdminApiDefault.default)({
            url: settings.url,
            headers: settings.headers,
            fetch: settings.fetch
        });
        this.url = settings.url;
        this.headers = settings.headers;
        this.fetch = (0, _helpers.resolveFetch)(settings.fetch);
        this.lock = settings.lock || lockNoOp;
        this.detectSessionInUrl = settings.detectSessionInUrl;
        this.flowType = settings.flowType;
        if (settings.lock) this.lock = settings.lock;
        else if ((0, _helpers.isBrowser)() && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.locks)) this.lock = (0, _locks.navigatorLock);
        else this.lock = lockNoOp;
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        };
        if (this.persistSession) {
            if (settings.storage) this.storage = settings.storage;
            else if ((0, _helpers.supportsLocalStorage)()) this.storage = (0, _localStorage.localStorageAdapter);
            else {
                this.memoryStorage = {};
                this.storage = (0, _localStorage.memoryLocalStorageAdapter)(this.memoryStorage);
            }
        } else {
            this.memoryStorage = {};
            this.storage = (0, _localStorage.memoryLocalStorageAdapter)(this.memoryStorage);
        }
        if ((0, _helpers.isBrowser)() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
            } catch (e) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
            }
            (_b = this.broadcastChannel) === null || _b === void 0 || _b.addEventListener("message", async (event)=>{
                this._debug("received broadcast notification from other tab or client", event);
                await this._notifyAllSubscribers(event.data.event, event.data.session, false); // broadcast = false so we don't get an endless loop of messages
            });
        }
        this.initialize();
    }
    _debug(...args) {
        if (this.logDebugMessages) this.logger(`GoTrueClient@${this.instanceID} (${(0, _version.version)}) ${new Date().toISOString()}`, ...args);
        return this;
    }
    /**
     * Initializes the client session either from the url or from storage.
     * This method is automatically called when instantiating the client, but should also be called
     * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
     */ async initialize() {
        if (this.initializePromise) return await this.initializePromise;
        this.initializePromise = (async ()=>{
            return await this._acquireLock(-1, async ()=>{
                return await this._initialize();
            });
        })();
        return await this.initializePromise;
    }
    /**
     * IMPORTANT:
     * 1. Never throw in this method, as it is called from the constructor
     * 2. Never return a session from this method as it would be cached over
     *    the whole lifetime of the client
     */ async _initialize() {
        try {
            const isPKCEFlow = (0, _helpers.isBrowser)() ? await this._isPKCEFlow() : false;
            this._debug("#_initialize()", "begin", "is PKCE flow", isPKCEFlow);
            if (isPKCEFlow || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                const { data, error } = await this._getSessionFromURL(isPKCEFlow);
                if (error) {
                    this._debug("#_initialize()", "error detecting session from URL", error);
                    // hacky workaround to keep the existing session if there's an error returned from identity linking
                    // TODO: once error codes are ready, we should match against it instead of the message
                    if ((error === null || error === void 0 ? void 0 : error.message) === "Identity is already linked" || (error === null || error === void 0 ? void 0 : error.message) === "Identity is already linked to another user") return {
                        error
                    };
                    // failed login attempt via url,
                    // remove old session as in verifyOtp, signUp and signInWith*
                    await this._removeSession();
                    return {
                        error
                    };
                }
                const { session, redirectType } = data;
                this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
                await this._saveSession(session);
                setTimeout(async ()=>{
                    if (redirectType === "recovery") await this._notifyAllSubscribers("PASSWORD_RECOVERY", session);
                    else await this._notifyAllSubscribers("SIGNED_IN", session);
                }, 0);
                return {
                    error: null
                };
            }
            // no login attempt via callback url try to recover session from storage
            await this._recoverAndRefresh();
            return {
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                error
            };
            return {
                error: new (0, _errors.AuthUnknownError)("Unexpected error during initialization", error)
            };
        } finally{
            await this._handleVisibilityChange();
            this._debug("#_initialize()", "end");
        }
    }
    /**
     * Creates a new anonymous user.
     *
     * @returns A session where the is_anonymous claim in the access token JWT set to true
     */ async signInAnonymously(credentials) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            const res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                    data: (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {},
                    gotrue_meta_security: {
                        captcha_token: (_c = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _c === void 0 ? void 0 : _c.captchaToken
                    }
                },
                xform: (0, _fetch._sessionResponse)
            });
            const { data, error } = res;
            if (error || !data) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            const session = data.session;
            const user = data.user;
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Creates a new user.
     *
     * Be aware that if a user account exists in the system you may get back an
     * error message that attempts to hide this information from the user.
     * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */ async signUp(credentials) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            let res;
            if ("email" in credentials) {
                const { email, password, options } = credentials;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    body: {
                        email,
                        password,
                        data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    },
                    xform: (0, _fetch._sessionResponse)
                });
            } else if ("phone" in credentials) {
                const { phone, password, options } = credentials;
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone,
                        password,
                        data: (_b = options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : {},
                        channel: (_c = options === null || options === void 0 ? void 0 : options.channel) !== null && _c !== void 0 ? _c : "sms",
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, _fetch._sessionResponse)
                });
            } else throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number and a password");
            const { data, error } = res;
            if (error || !data) return {
                data: {
                    user: null,
                    session: null
                },
                error: error
            };
            const session = data.session;
            const user = data.user;
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in an existing user with an email and password or phone and password.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or that the
     * email/phone and password combination is wrong or that the account can only
     * be accessed via social login.
     */ async signInWithPassword(credentials) {
        try {
            await this._removeSession();
            let res;
            if ("email" in credentials) {
                const { email, password, options } = credentials;
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email,
                        password,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, _fetch._sessionResponsePassword)
                });
            } else if ("phone" in credentials) {
                const { phone, password, options } = credentials;
                res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone,
                        password,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    xform: (0, _fetch._sessionResponsePassword)
                });
            } else throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number and a password");
            const { data, error } = res;
            if (error) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            else if (!data || !data.session || !data.user) return {
                data: {
                    user: null,
                    session: null
                },
                error: new (0, _errors.AuthInvalidTokenResponseError)()
            };
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", data.session);
            }
            return {
                data: Object.assign({
                    user: data.user,
                    session: data.session
                }, data.weak_password ? {
                    weakPassword: data.weak_password
                } : null),
                error
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in an existing user via a third-party provider.
     * This method supports the PKCE flow.
     */ async signInWithOAuth(credentials) {
        var _a, _b, _c, _d;
        await this._removeSession();
        return await this._handleProviderSignIn(credentials.provider, {
            redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
            scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
            queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
            skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect
        });
    }
    /**
     * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
     */ async exchangeCodeForSession(authCode) {
        await this.initializePromise;
        return this._acquireLock(-1, async ()=>{
            return this._exchangeCodeForSession(authCode);
        });
    }
    async _exchangeCodeForSession(authCode) {
        const storageItem = await (0, _helpers.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        const [codeVerifier, redirectType] = (storageItem !== null && storageItem !== void 0 ? storageItem : "").split("/");
        const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
            headers: this.headers,
            body: {
                auth_code: authCode,
                code_verifier: codeVerifier
            },
            xform: (0, _fetch._sessionResponse)
        });
        await (0, _helpers.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        if (error) return {
            data: {
                user: null,
                session: null,
                redirectType: null
            },
            error
        };
        else if (!data || !data.session || !data.user) return {
            data: {
                user: null,
                session: null,
                redirectType: null
            },
            error: new (0, _errors.AuthInvalidTokenResponseError)()
        };
        if (data.session) {
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("SIGNED_IN", data.session);
        }
        return {
            data: Object.assign(Object.assign({}, data), {
                redirectType: redirectType !== null && redirectType !== void 0 ? redirectType : null
            }),
            error
        };
    }
    /**
     * Allows signing in with an OIDC ID token. The authentication provider used
     * should be enabled and configured.
     */ async signInWithIdToken(credentials) {
        await this._removeSession();
        try {
            const { options, provider, token, access_token, nonce } = credentials;
            const res = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                headers: this.headers,
                body: {
                    provider,
                    id_token: token,
                    access_token,
                    nonce,
                    gotrue_meta_security: {
                        captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                    }
                },
                xform: (0, _fetch._sessionResponse)
            });
            const { data, error } = res;
            if (error) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            else if (!data || !data.session || !data.user) return {
                data: {
                    user: null,
                    session: null
                },
                error: new (0, _errors.AuthInvalidTokenResponseError)()
            };
            if (data.session) {
                await this._saveSession(data.session);
                await this._notifyAllSubscribers("SIGNED_IN", data.session);
            }
            return {
                data,
                error
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in a user using magiclink or a one-time password (OTP).
     *
     * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
     * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
     * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or, that the account
     * can only be accessed via social login.
     *
     * Do note that you will need to configure a Whatsapp sender on Twilio
     * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
     * channel is not supported on other providers
     * at this time.
     * This method supports PKCE when an email is passed.
     */ async signInWithOtp(credentials) {
        var _a, _b, _c, _d, _e;
        try {
            await this._removeSession();
            if ("email" in credentials) {
                const { email, options } = credentials;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
                const { error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email,
                        data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                        create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    },
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error
                };
            }
            if ("phone" in credentials) {
                const { phone, options } = credentials;
                const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        phone,
                        data: (_c = options === null || options === void 0 ? void 0 : options.data) !== null && _c !== void 0 ? _c : {},
                        create_user: (_d = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        },
                        channel: (_e = options === null || options === void 0 ? void 0 : options.channel) !== null && _e !== void 0 ? _e : "sms"
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: data === null || data === void 0 ? void 0 : data.message_id
                    },
                    error
                };
            }
            throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number.");
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
     */ async verifyOtp(params) {
        var _a, _b;
        try {
            if (params.type !== "email_change" && params.type !== "phone_change") // we don't want to remove the authenticated session if the user is performing an email_change or phone_change verification
            await this._removeSession();
            let redirectTo = undefined;
            let captchaToken = undefined;
            if ("options" in params) {
                redirectTo = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo;
                captchaToken = (_b = params.options) === null || _b === void 0 ? void 0 : _b.captchaToken;
            }
            const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, params), {
                    gotrue_meta_security: {
                        captcha_token: captchaToken
                    }
                }),
                redirectTo,
                xform: (0, _fetch._sessionResponse)
            });
            if (error) throw error;
            if (!data) throw new Error("An error occurred on token verification.");
            const session = data.session;
            const user = data.user;
            if (session === null || session === void 0 ? void 0 : session.access_token) {
                await this._saveSession(session);
                await this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session);
            }
            return {
                data: {
                    user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Attempts a single-sign on using an enterprise Identity Provider. A
     * successful SSO attempt will redirect the current page to the identity
     * provider authorization page. The redirect URL is implementation and SSO
     * protocol specific.
     *
     * You can use it by providing a SSO domain. Typically you can extract this
     * domain by asking users for their email address. If this domain is
     * registered on the Auth instance the redirect will use that organization's
     * currently active SSO Identity Provider for the login.
     *
     * If you have built an organization-specific login page, you can use the
     * organization's SSO Identity Provider UUID directly instead.
     */ async signInWithSSO(params) {
        var _a, _b, _c;
        try {
            await this._removeSession();
            let codeChallenge = null;
            let codeChallengeMethod = null;
            if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? {
                    provider_id: params.providerId
                } : null), "domain" in params ? {
                    domain: params.domain
                } : null), {
                    redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : undefined
                }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? {
                    gotrue_meta_security: {
                        captcha_token: params.options.captchaToken
                    }
                } : null), {
                    skip_http_redirect: true,
                    code_challenge: codeChallenge,
                    code_challenge_method: codeChallengeMethod
                }),
                headers: this.headers,
                xform: (0, _fetch._ssoResponse)
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Sends a reauthentication OTP to the user's email or phone number.
     * Requires the user to be signed-in.
     */ async reauthenticate() {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._reauthenticate();
        });
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async (result)=>{
                const { data: { session }, error: sessionError } = result;
                if (sessionError) throw sessionError;
                if (!session) throw new (0, _errors.AuthSessionMissingError)();
                const { error } = await (0, _fetch._request)(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: session.access_token
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
     */ async resend(credentials) {
        try {
            if (credentials.type != "email_change" && credentials.type != "phone_change") await this._removeSession();
            const endpoint = `${this.url}/resend`;
            if ("email" in credentials) {
                const { email, type, options } = credentials;
                const { error } = await (0, _fetch._request)(this.fetch, "POST", endpoint, {
                    headers: this.headers,
                    body: {
                        email,
                        type,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    },
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                });
                return {
                    data: {
                        user: null,
                        session: null
                    },
                    error
                };
            } else if ("phone" in credentials) {
                const { phone, type, options } = credentials;
                const { data, error } = await (0, _fetch._request)(this.fetch, "POST", endpoint, {
                    headers: this.headers,
                    body: {
                        phone,
                        type,
                        gotrue_meta_security: {
                            captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                        }
                    }
                });
                return {
                    data: {
                        user: null,
                        session: null,
                        messageId: data === null || data === void 0 ? void 0 : data.message_id
                    },
                    error
                };
            }
            throw new (0, _errors.AuthInvalidCredentialsError)("You must provide either an email or phone number and a type");
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Returns the session, refreshing it if necessary.
     *
     * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
     *
     * **IMPORTANT:** This method loads values directly from the storage attached
     * to the client. If that storage is based on request cookies for example,
     * the values in it may not be authentic and therefore it's strongly advised
     * against using this method and its results in such circumstances. A warning
     * will be emitted if this is detected. Use {@link #getUser()} instead.
     */ async getSession() {
        await this.initializePromise;
        const result = await this._acquireLock(-1, async ()=>{
            return this._useSession(async (result)=>{
                return result;
            });
        });
        if (result.data && this.storage.isServer) {
            if (!this.insecureGetSessionWarningShown) {
                console.warn("Using supabase.auth.getSession() is potentially insecure as it loads data directly from the storage medium (typically cookies) which may not be authentic. Prefer using supabase.auth.getUser() instead. To suppress this warning call supabase.auth.getUser() before you call supabase.auth.getSession().");
                this.insecureGetSessionWarningShown = true;
            }
        }
        return result;
    }
    /**
     * Acquires a global lock based on the storage key.
     */ async _acquireLock(acquireTimeout, fn) {
        this._debug("#_acquireLock", "begin", acquireTimeout);
        try {
            if (this.lockAcquired) {
                const last = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve();
                const result = (async ()=>{
                    await last;
                    return await fn();
                })();
                this.pendingInLock.push((async ()=>{
                    try {
                        await result;
                    } catch (e) {
                    // we just care if it finished
                    }
                })());
                return result;
            }
            return await this.lock(`lock:${this.storageKey}`, acquireTimeout, async ()=>{
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = true;
                    const result = fn();
                    this.pendingInLock.push((async ()=>{
                        try {
                            await result;
                        } catch (e) {
                        // we just care if it finished
                        }
                    })());
                    await result;
                    // keep draining the queue until there's nothing to wait on
                    while(this.pendingInLock.length){
                        const waitOn = [
                            ...this.pendingInLock
                        ];
                        await Promise.all(waitOn);
                        this.pendingInLock.splice(0, waitOn.length);
                    }
                    return await result;
                } finally{
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey);
                    this.lockAcquired = false;
                }
            });
        } finally{
            this._debug("#_acquireLock", "end");
        }
    }
    /**
     * Use instead of {@link #getSession} inside the library. It is
     * semantically usually what you want, as getting a session involves some
     * processing afterwards that requires only one client operating on the
     * session at once across multiple tabs or processes.
     */ async _useSession(fn) {
        this._debug("#_useSession", "begin");
        try {
            // the use of __loadSession here is the only correct use of the function!
            const result = await this.__loadSession();
            return await fn(result);
        } finally{
            this._debug("#_useSession", "end");
        }
    }
    /**
     * NEVER USE DIRECTLY!
     *
     * Always use {@link #_useSession}.
     */ async __loadSession() {
        this._debug("#__loadSession()", "begin");
        if (!this.lockAcquired) this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let currentSession = null;
            const maybeSession = await (0, _helpers.getItemAsync)(this.storage, this.storageKey);
            this._debug("#getSession()", "session from storage", maybeSession);
            if (maybeSession !== null) {
                if (this._isValidSession(maybeSession)) currentSession = maybeSession;
                else {
                    this._debug("#getSession()", "session from storage is not valid");
                    await this._removeSession();
                }
            }
            if (!currentSession) return {
                data: {
                    session: null
                },
                error: null
            };
            const hasExpired = currentSession.expires_at ? currentSession.expires_at <= Date.now() / 1000 : false;
            this._debug("#__loadSession()", `session has${hasExpired ? "" : " not"} expired`, "expires_at", currentSession.expires_at);
            if (!hasExpired) {
                if (this.storage.isServer) {
                    let user = currentSession.user;
                    delete currentSession.user;
                    Object.defineProperty(currentSession, "user", {
                        enumerable: true,
                        get: ()=>{
                            if (!currentSession.__suppressUserWarning) // do not suppress this warning if insecureGetSessionWarningShown is true, as the data is still not authenticated
                            console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
                            return user;
                        },
                        set: (value)=>{
                            user = value;
                        }
                    });
                }
                return {
                    data: {
                        session: currentSession
                    },
                    error: null
                };
            }
            const { session, error } = await this._callRefreshToken(currentSession.refresh_token);
            if (error) return {
                data: {
                    session: null
                },
                error
            };
            return {
                data: {
                    session
                },
                error: null
            };
        } finally{
            this._debug("#__loadSession()", "end");
        }
    }
    /**
     * Gets the current user details if there is an existing session. This method
     * performs a network request to the Supabase Auth server, so the returned
     * value is authentic and can be used to base authorization rules on.
     *
     * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
     */ async getUser(jwt) {
        if (jwt) return await this._getUser(jwt);
        await this.initializePromise;
        const result = await this._acquireLock(-1, async ()=>{
            return await this._getUser();
        });
        if (result.data && this.storage.isServer) // no longer emit the insecure warning for getSession() as the access_token is now authenticated
        this.insecureGetSessionWarningShown = true;
        return result;
    }
    async _getUser(jwt) {
        try {
            if (jwt) return await (0, _fetch._request)(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: jwt,
                xform: (0, _fetch._userResponse)
            });
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data, error } = result;
                if (error) throw error;
                return await (0, _fetch._request)(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined,
                    xform: (0, _fetch._userResponse)
                });
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Updates user data for a logged in user.
     */ async updateUser(attributes, options = {}) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._updateUser(attributes, options);
        });
    }
    async _updateUser(attributes, options = {}) {
        try {
            return await this._useSession(async (result)=>{
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) throw sessionError;
                if (!sessionData.session) throw new (0, _errors.AuthSessionMissingError)();
                const session = sessionData.session;
                let codeChallenge = null;
                let codeChallengeMethod = null;
                if (this.flowType === "pkce" && attributes.email != null) [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
                const { data, error: userError } = await (0, _fetch._request)(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    body: Object.assign(Object.assign({}, attributes), {
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod
                    }),
                    jwt: session.access_token,
                    xform: (0, _fetch._userResponse)
                });
                if (userError) throw userError;
                session.user = data.user;
                await this._saveSession(session);
                await this._notifyAllSubscribers("USER_UPDATED", session);
                return {
                    data: {
                        user: session.user
                    },
                    error: null
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Decodes a JWT (without performing any validation).
     */ _decodeJWT(jwt) {
        return (0, _helpers.decodeJWTPayload)(jwt);
    }
    /**
     * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
     * If the refresh token or access token in the current session is invalid, an error will be thrown.
     * @param currentSession The current session that minimally contains an access token and refresh token.
     */ async setSession(currentSession) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._setSession(currentSession);
        });
    }
    async _setSession(currentSession) {
        try {
            if (!currentSession.access_token || !currentSession.refresh_token) throw new (0, _errors.AuthSessionMissingError)();
            const timeNow = Date.now() / 1000;
            let expiresAt = timeNow;
            let hasExpired = true;
            let session = null;
            const payload = (0, _helpers.decodeJWTPayload)(currentSession.access_token);
            if (payload.exp) {
                expiresAt = payload.exp;
                hasExpired = expiresAt <= timeNow;
            }
            if (hasExpired) {
                const { session: refreshedSession, error } = await this._callRefreshToken(currentSession.refresh_token);
                if (error) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
                if (!refreshedSession) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                session = refreshedSession;
            } else {
                const { data, error } = await this._getUser(currentSession.access_token);
                if (error) throw error;
                session = {
                    access_token: currentSession.access_token,
                    refresh_token: currentSession.refresh_token,
                    user: data.user,
                    token_type: "bearer",
                    expires_in: expiresAt - timeNow,
                    expires_at: expiresAt
                };
                await this._saveSession(session);
                await this._notifyAllSubscribers("SIGNED_IN", session);
            }
            return {
                data: {
                    user: session.user,
                    session
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    session: null,
                    user: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Returns a new session, regardless of expiry status.
     * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
     * If the current session's refresh token is invalid, an error will be thrown.
     * @param currentSession The current session. If passed in, it must contain a refresh token.
     */ async refreshSession(currentSession) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._refreshSession(currentSession);
        });
    }
    async _refreshSession(currentSession) {
        try {
            return await this._useSession(async (result)=>{
                var _a;
                if (!currentSession) {
                    const { data, error } = result;
                    if (error) throw error;
                    currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : undefined;
                }
                if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) throw new (0, _errors.AuthSessionMissingError)();
                const { session, error } = await this._callRefreshToken(currentSession.refresh_token);
                if (error) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: error
                };
                if (!session) return {
                    data: {
                        user: null,
                        session: null
                    },
                    error: null
                };
                return {
                    data: {
                        user: session.user,
                        session
                    },
                    error: null
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    user: null,
                    session: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Gets the session data from a URL string
     */ async _getSessionFromURL(isPKCEFlow) {
        try {
            if (!(0, _helpers.isBrowser)()) throw new (0, _errors.AuthImplicitGrantRedirectError)("No browser detected.");
            if (this.flowType === "implicit" && !this._isImplicitGrantFlow()) throw new (0, _errors.AuthImplicitGrantRedirectError)("Not a valid implicit grant flow url.");
            else if (this.flowType == "pkce" && !isPKCEFlow) throw new (0, _errors.AuthPKCEGrantCodeExchangeError)("Not a valid PKCE flow url.");
            const params = (0, _helpers.parseParametersFromURL)(window.location.href);
            if (isPKCEFlow) {
                if (!params.code) throw new (0, _errors.AuthPKCEGrantCodeExchangeError)("No code detected.");
                const { data, error } = await this._exchangeCodeForSession(params.code);
                if (error) throw error;
                const url = new URL(window.location.href);
                url.searchParams.delete("code");
                window.history.replaceState(window.history.state, "", url.toString());
                return {
                    data: {
                        session: data.session,
                        redirectType: null
                    },
                    error: null
                };
            }
            if (params.error || params.error_description || params.error_code) throw new (0, _errors.AuthImplicitGrantRedirectError)(params.error_description || "Error in URL with unspecified error_description", {
                error: params.error || "unspecified_error",
                code: params.error_code || "unspecified_code"
            });
            const { provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type } = params;
            if (!access_token || !expires_in || !refresh_token || !token_type) throw new (0, _errors.AuthImplicitGrantRedirectError)("No session defined in URL");
            const timeNow = Math.round(Date.now() / 1000);
            const expiresIn = parseInt(expires_in);
            let expiresAt = timeNow + expiresIn;
            if (expires_at) expiresAt = parseInt(expires_at);
            const actuallyExpiresIn = expiresAt - timeNow;
            if (actuallyExpiresIn * 1000 <= AUTO_REFRESH_TICK_DURATION) console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${actuallyExpiresIn}s, should have been closer to ${expiresIn}s`);
            const issuedAt = expiresAt - expiresIn;
            if (timeNow - issuedAt >= 120) console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt, timeNow);
            else if (timeNow - issuedAt < 0) console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", issuedAt, expiresAt, timeNow);
            const { data, error } = await this._getUser(access_token);
            if (error) throw error;
            const session = {
                provider_token,
                provider_refresh_token,
                access_token,
                expires_in: expiresIn,
                expires_at: expiresAt,
                refresh_token,
                token_type,
                user: data.user
            };
            // Remove tokens from URL
            window.location.hash = "";
            this._debug("#_getSessionFromURL()", "clearing window.location.hash");
            return {
                data: {
                    session,
                    redirectType: params.type
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    session: null,
                    redirectType: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
     */ _isImplicitGrantFlow() {
        const params = (0, _helpers.parseParametersFromURL)(window.location.href);
        return !!((0, _helpers.isBrowser)() && (params.access_token || params.error_description));
    }
    /**
     * Checks if the current URL and backing storage contain parameters given by a PKCE flow
     */ async _isPKCEFlow() {
        const params = (0, _helpers.parseParametersFromURL)(window.location.href);
        const currentStorageContent = await (0, _helpers.getItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
        return !!(params.code && currentStorageContent);
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
     * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
     *
     * If using `others` scope, no `SIGNED_OUT` event is fired!
     */ async signOut(options = {
        scope: "global"
    }) {
        await this.initializePromise;
        return await this._acquireLock(-1, async ()=>{
            return await this._signOut(options);
        });
    }
    async _signOut({ scope } = {
        scope: "global"
    }) {
        return await this._useSession(async (result)=>{
            var _a;
            const { data, error: sessionError } = result;
            if (sessionError) return {
                error: sessionError
            };
            const accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
            if (accessToken) {
                const { error } = await this.admin.signOut(accessToken, scope);
                if (error) {
                    // ignore 404s since user might not exist anymore
                    // ignore 401s since an invalid or expired JWT should sign out the current session
                    if (!((0, _errors.isAuthApiError)(error) && (error.status === 404 || error.status === 401))) return {
                        error
                    };
                }
            }
            if (scope !== "others") {
                await this._removeSession();
                await (0, _helpers.removeItemAsync)(this.storage, `${this.storageKey}-code-verifier`);
                await this._notifyAllSubscribers("SIGNED_OUT", null);
            }
            return {
                error: null
            };
        });
    }
    /**
     * Receive a notification every time an auth event happens.
     * @param callback A callback function to be invoked when an auth event happens.
     */ onAuthStateChange(callback) {
        const id = (0, _helpers.uuid)();
        const subscription = {
            id,
            callback,
            unsubscribe: ()=>{
                this._debug("#unsubscribe()", "state change callback with id removed", id);
                this.stateChangeEmitters.delete(id);
            }
        };
        this._debug("#onAuthStateChange()", "registered callback with id", id);
        this.stateChangeEmitters.set(id, subscription);
        (async ()=>{
            await this.initializePromise;
            await this._acquireLock(-1, async ()=>{
                this._emitInitialSession(id);
            });
        })();
        return {
            data: {
                subscription
            }
        };
    }
    async _emitInitialSession(id) {
        return await this._useSession(async (result)=>{
            var _a, _b;
            try {
                const { data: { session }, error } = result;
                if (error) throw error;
                await ((_a = this.stateChangeEmitters.get(id)) === null || _a === void 0 ? void 0 : _a.callback("INITIAL_SESSION", session));
                this._debug("INITIAL_SESSION", "callback id", id, "session", session);
            } catch (err) {
                await ((_b = this.stateChangeEmitters.get(id)) === null || _b === void 0 ? void 0 : _b.callback("INITIAL_SESSION", null));
                this._debug("INITIAL_SESSION", "callback id", id, "error", err);
                console.error(err);
            }
        });
    }
    /**
     * Sends a password reset request to an email address. This method supports the PKCE flow.
     *
     * @param email The email address of the user.
     * @param options.redirectTo The URL to send the user to after they click the password reset link.
     * @param options.captchaToken Verification token received when the user completes the captcha on the site.
     */ async resetPasswordForEmail(email, options = {}) {
        let codeChallenge = null;
        let codeChallengeMethod = null;
        if (this.flowType === "pkce") [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey, true // isPasswordRecovery
        );
        try {
            return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email,
                    code_challenge: codeChallenge,
                    code_challenge_method: codeChallengeMethod,
                    gotrue_meta_security: {
                        captcha_token: options.captchaToken
                    }
                },
                headers: this.headers,
                redirectTo: options.redirectTo
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Gets all the identities linked to a user.
     */ async getUserIdentities() {
        var _a;
        try {
            const { data, error } = await this.getUser();
            if (error) throw error;
            return {
                data: {
                    identities: (_a = data.user.identities) !== null && _a !== void 0 ? _a : []
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Links an oauth identity to an existing user.
     * This method supports the PKCE flow.
     */ async linkIdentity(credentials) {
        var _a;
        try {
            const { data, error } = await this._useSession(async (result)=>{
                var _a, _b, _c, _d, _e;
                const { data, error } = result;
                if (error) throw error;
                const url = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, credentials.provider, {
                    redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
                    scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
                    queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
                    skipBrowserRedirect: true
                });
                return await (0, _fetch._request)(this.fetch, "GET", url, {
                    headers: this.headers,
                    jwt: (_e = (_d = data.session) === null || _d === void 0 ? void 0 : _d.access_token) !== null && _e !== void 0 ? _e : undefined
                });
            });
            if (error) throw error;
            if ((0, _helpers.isBrowser)() && !((_a = credentials.options) === null || _a === void 0 ? void 0 : _a.skipBrowserRedirect)) window.location.assign(data === null || data === void 0 ? void 0 : data.url);
            return {
                data: {
                    provider: credentials.provider,
                    url: data === null || data === void 0 ? void 0 : data.url
                },
                error: null
            };
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    provider: credentials.provider,
                    url: null
                },
                error
            };
            throw error;
        }
    }
    /**
     * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
     */ async unlinkIdentity(identity) {
        try {
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data, error } = result;
                if (error) throw error;
                return await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/user/identities/${identity.identity_id}`, {
                    headers: this.headers,
                    jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined
                });
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */ async _refreshAccessToken(refreshToken) {
        const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
        this._debug(debugName, "begin");
        try {
            const startedAt = Date.now();
            // will attempt to refresh the token with exponential backoff
            return await (0, _helpers.retryable)(async (attempt)=>{
                await (0, _helpers.sleep)(attempt * 200); // 0, 200, 400, 800, ...
                this._debug(debugName, "refreshing attempt", attempt);
                return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                    body: {
                        refresh_token: refreshToken
                    },
                    headers: this.headers,
                    xform: (0, _fetch._sessionResponse)
                });
            }, (attempt, _, result)=>result && result.error && (0, _errors.isAuthRetryableFetchError)(result.error) && // retryable only if the request can be sent before the backoff overflows the tick duration
                Date.now() + (attempt + 1) * 200 - startedAt < AUTO_REFRESH_TICK_DURATION);
        } catch (error) {
            this._debug(debugName, "error", error);
            if ((0, _errors.isAuthError)(error)) return {
                data: {
                    session: null,
                    user: null
                },
                error
            };
            throw error;
        } finally{
            this._debug(debugName, "end");
        }
    }
    _isValidSession(maybeSession) {
        const isValidSession = typeof maybeSession === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
        return isValidSession;
    }
    async _handleProviderSignIn(provider, options) {
        const url = await this._getUrlForProvider(`${this.url}/authorize`, provider, {
            redirectTo: options.redirectTo,
            scopes: options.scopes,
            queryParams: options.queryParams
        });
        this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
        // try to open on the browser
        if ((0, _helpers.isBrowser)() && !options.skipBrowserRedirect) window.location.assign(url);
        return {
            data: {
                provider,
                url
            },
            error: null
        };
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */ async _recoverAndRefresh() {
        var _a;
        const debugName = "#_recoverAndRefresh()";
        this._debug(debugName, "begin");
        try {
            const currentSession = await (0, _helpers.getItemAsync)(this.storage, this.storageKey);
            this._debug(debugName, "session from storage", currentSession);
            if (!this._isValidSession(currentSession)) {
                this._debug(debugName, "session is not valid");
                if (currentSession !== null) await this._removeSession();
                return;
            }
            const timeNow = Math.round(Date.now() / 1000);
            const expiresWithMargin = ((_a = currentSession.expires_at) !== null && _a !== void 0 ? _a : Infinity) < timeNow + (0, _constants.EXPIRY_MARGIN);
            this._debug(debugName, `session has${expiresWithMargin ? "" : " not"} expired with margin of ${(0, _constants.EXPIRY_MARGIN)}s`);
            if (expiresWithMargin) {
                if (this.autoRefreshToken && currentSession.refresh_token) {
                    const { error } = await this._callRefreshToken(currentSession.refresh_token);
                    if (error) {
                        console.error(error);
                        if (!(0, _errors.isAuthRetryableFetchError)(error)) {
                            this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
                            await this._removeSession();
                        }
                    }
                }
            } else // no need to persist currentSession again, as we just loaded it from
            // local storage; persisting it again may overwrite a value saved by
            // another client with access to the same local storage
            await this._notifyAllSubscribers("SIGNED_IN", currentSession);
        } catch (err) {
            this._debug(debugName, "error", err);
            console.error(err);
            return;
        } finally{
            this._debug(debugName, "end");
        }
    }
    async _callRefreshToken(refreshToken) {
        var _a, _b;
        if (!refreshToken) throw new (0, _errors.AuthSessionMissingError)();
        // refreshing is already in progress
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
        this._debug(debugName, "begin");
        try {
            this.refreshingDeferred = new (0, _helpers.Deferred)();
            const { data, error } = await this._refreshAccessToken(refreshToken);
            if (error) throw error;
            if (!data.session) throw new (0, _errors.AuthSessionMissingError)();
            await this._saveSession(data.session);
            await this._notifyAllSubscribers("TOKEN_REFRESHED", data.session);
            const result = {
                session: data.session,
                error: null
            };
            this.refreshingDeferred.resolve(result);
            return result;
        } catch (error) {
            this._debug(debugName, "error", error);
            if ((0, _errors.isAuthError)(error)) {
                const result = {
                    session: null,
                    error
                };
                if (!(0, _errors.isAuthRetryableFetchError)(error)) {
                    await this._removeSession();
                    await this._notifyAllSubscribers("SIGNED_OUT", null);
                }
                (_a = this.refreshingDeferred) === null || _a === void 0 || _a.resolve(result);
                return result;
            }
            (_b = this.refreshingDeferred) === null || _b === void 0 || _b.reject(error);
            throw error;
        } finally{
            this.refreshingDeferred = null;
            this._debug(debugName, "end");
        }
    }
    async _notifyAllSubscribers(event, session, broadcast = true) {
        const debugName = `#_notifyAllSubscribers(${event})`;
        this._debug(debugName, "begin", session, `broadcast = ${broadcast}`);
        try {
            if (this.broadcastChannel && broadcast) this.broadcastChannel.postMessage({
                event,
                session
            });
            const errors = [];
            const promises = Array.from(this.stateChangeEmitters.values()).map(async (x)=>{
                try {
                    await x.callback(event, session);
                } catch (e) {
                    errors.push(e);
                }
            });
            await Promise.all(promises);
            if (errors.length > 0) {
                for(let i = 0; i < errors.length; i += 1)console.error(errors[i]);
                throw errors[0];
            }
        } finally{
            this._debug(debugName, "end");
        }
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */ async _saveSession(session) {
        this._debug("#_saveSession()", session);
        await (0, _helpers.setItemAsync)(this.storage, this.storageKey, session);
    }
    async _removeSession() {
        this._debug("#_removeSession()");
        await (0, _helpers.removeItemAsync)(this.storage, this.storageKey);
    }
    /**
     * Removes any registered visibilitychange callback.
     *
     * {@see #startAutoRefresh}
     * {@see #stopAutoRefresh}
     */ _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const callback = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            if (callback && (0, _helpers.isBrowser)() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) window.removeEventListener("visibilitychange", callback);
        } catch (e) {
            console.error("removing visibilitychange callback failed", e);
        }
    }
    /**
     * This is the private implementation of {@link #startAutoRefresh}. Use this
     * within the library.
     */ async _startAutoRefresh() {
        await this._stopAutoRefresh();
        this._debug("#_startAutoRefresh()");
        const ticker = setInterval(()=>this._autoRefreshTokenTick(), AUTO_REFRESH_TICK_DURATION);
        this.autoRefreshTicker = ticker;
        if (ticker && typeof ticker === "object" && typeof ticker.unref === "function") // ticker is a NodeJS Timeout object that has an `unref` method
        // https://nodejs.org/api/timers.html#timeoutunref
        // When auto refresh is used in NodeJS (like for testing) the
        // `setInterval` is preventing the process from being marked as
        // finished and tests run endlessly. This can be prevented by calling
        // `unref()` on the returned object.
        ticker.unref();
        else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") // similar like for NodeJS, but with the Deno API
        // https://deno.land/api@latest?unstable&s=Deno.unrefTimer
        // @ts-ignore
        Deno.unrefTimer(ticker);
        // run the tick immediately, but in the next pass of the event loop so that
        // #_initialize can be allowed to complete without recursively waiting on
        // itself
        setTimeout(async ()=>{
            await this.initializePromise;
            await this._autoRefreshTokenTick();
        }, 0);
    }
    /**
     * This is the private implementation of {@link #stopAutoRefresh}. Use this
     * within the library.
     */ async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const ticker = this.autoRefreshTicker;
        this.autoRefreshTicker = null;
        if (ticker) clearInterval(ticker);
    }
    /**
     * Starts an auto-refresh process in the background. The session is checked
     * every few seconds. Close to the time of expiration a process is started to
     * refresh the session. If refreshing fails it will be retried for as long as
     * necessary.
     *
     * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
     * to call this function, it will be called for you.
     *
     * On browsers the refresh process works only when the tab/window is in the
     * foreground to conserve resources as well as prevent race conditions and
     * flooding auth with requests. If you call this method any managed
     * visibility change callback will be removed and you must manage visibility
     * changes on your own.
     *
     * On non-browser platforms the refresh process works *continuously* in the
     * background, which may not be desirable. You should hook into your
     * platform's foreground indication mechanism and call these methods
     * appropriately to conserve resources.
     *
     * {@see #stopAutoRefresh}
     */ async startAutoRefresh() {
        this._removeVisibilityChangedCallback();
        await this._startAutoRefresh();
    }
    /**
     * Stops an active auto refresh process running in the background (if any).
     *
     * If you call this method any managed visibility change callback will be
     * removed and you must manage visibility changes on your own.
     *
     * See {@link #startAutoRefresh} for more details.
     */ async stopAutoRefresh() {
        this._removeVisibilityChangedCallback();
        await this._stopAutoRefresh();
    }
    /**
     * Runs the auto refresh token tick.
     */ async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async ()=>{
                try {
                    const now = Date.now();
                    try {
                        return await this._useSession(async (result)=>{
                            const { data: { session } } = result;
                            if (!session || !session.refresh_token || !session.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return;
                            }
                            // session will expire in this many ticks (or has already expired if <= 0)
                            const expiresInTicks = Math.floor((session.expires_at * 1000 - now) / AUTO_REFRESH_TICK_DURATION);
                            this._debug("#_autoRefreshTokenTick()", `access token expires in ${expiresInTicks} ticks, a tick lasts ${AUTO_REFRESH_TICK_DURATION}ms, refresh threshold is ${AUTO_REFRESH_TICK_THRESHOLD} ticks`);
                            if (expiresInTicks <= AUTO_REFRESH_TICK_THRESHOLD) await this._callRefreshToken(session.refresh_token);
                        });
                    } catch (e) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
                    }
                } finally{
                    this._debug("#_autoRefreshTokenTick()", "end");
                }
            });
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof (0, _locks.LockAcquireTimeoutError)) this._debug("auto refresh token tick lock not available");
            else throw e;
        }
    }
    /**
     * Registers callbacks on the browser / platform, which in-turn run
     * algorithms when the browser window/tab are in foreground. On non-browser
     * platforms it assumes always foreground.
     */ async _handleVisibilityChange() {
        this._debug("#_handleVisibilityChange()");
        if (!(0, _helpers.isBrowser)() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
            if (this.autoRefreshToken) // in non-browser environments the refresh token ticker runs always
            this.startAutoRefresh();
            return false;
        }
        try {
            this.visibilityChangedCallback = async ()=>await this._onVisibilityChanged(false);
            window === null || window === void 0 || window.addEventListener("visibilitychange", this.visibilityChangedCallback);
            // now immediately call the visbility changed callback to setup with the
            // current visbility state
            await this._onVisibilityChanged(true); // initial call
        } catch (error) {
            console.error("_handleVisibilityChange", error);
        }
    }
    /**
     * Callback registered with `window.addEventListener('visibilitychange')`.
     */ async _onVisibilityChanged(calledFromInitialize) {
        const methodName = `#_onVisibilityChanged(${calledFromInitialize})`;
        this._debug(methodName, "visibilityState", document.visibilityState);
        if (document.visibilityState === "visible") {
            if (this.autoRefreshToken) // in browser environments the refresh token ticker runs only on focused tabs
            // which prevents race conditions
            this._startAutoRefresh();
            if (!calledFromInitialize) {
                // called when the visibility has changed, i.e. the browser
                // transitioned from hidden -> visible so we need to see if the session
                // should be recovered immediately... but to do that we need to acquire
                // the lock first asynchronously
                await this.initializePromise;
                await this._acquireLock(-1, async ()=>{
                    if (document.visibilityState !== "visible") {
                        this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                        // visibility has changed while waiting for the lock, abort
                        return;
                    }
                    // recover the session
                    await this._recoverAndRefresh();
                });
            }
        } else if (document.visibilityState === "hidden") {
            if (this.autoRefreshToken) this._stopAutoRefresh();
        }
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param options.scopes A space-separated list of scopes granted to the OAuth application.
     * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
     */ async _getUrlForProvider(url, provider, options) {
        const urlParams = [
            `provider=${encodeURIComponent(provider)}`
        ];
        if (options === null || options === void 0 ? void 0 : options.redirectTo) urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
        if (options === null || options === void 0 ? void 0 : options.scopes) urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
        if (this.flowType === "pkce") {
            const [codeChallenge, codeChallengeMethod] = await (0, _helpers.getCodeChallengeAndMethod)(this.storage, this.storageKey);
            const flowParams = new URLSearchParams({
                code_challenge: `${encodeURIComponent(codeChallenge)}`,
                code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`
            });
            urlParams.push(flowParams.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.queryParams) {
            const query = new URLSearchParams(options.queryParams);
            urlParams.push(query.toString());
        }
        if (options === null || options === void 0 ? void 0 : options.skipBrowserRedirect) urlParams.push(`skip_http_redirect=${options.skipBrowserRedirect}`);
        return `${url}?${urlParams.join("&")}`;
    }
    async _unenroll(params) {
        try {
            return await this._useSession(async (result)=>{
                var _a;
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                return await (0, _fetch._request)(this.fetch, "DELETE", `${this.url}/factors/${params.factorId}`, {
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                });
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * {@see GoTrueMFAApi#enroll}
     */ async _enroll(params) {
        try {
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: sessionData, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/factors`, {
                    body: {
                        friendly_name: params.friendlyName,
                        factor_type: params.factorType,
                        issuer: params.issuer
                    },
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                });
                if (error) return {
                    data: null,
                    error
                };
                if ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code) data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
                return {
                    data,
                    error: null
                };
            });
        } catch (error) {
            if ((0, _errors.isAuthError)(error)) return {
                data: null,
                error
            };
            throw error;
        }
    }
    /**
     * {@see GoTrueMFAApi#verify}
     */ async _verify(params) {
        return this._acquireLock(-1, async ()=>{
            try {
                return await this._useSession(async (result)=>{
                    var _a;
                    const { data: sessionData, error: sessionError } = result;
                    if (sessionError) return {
                        data: null,
                        error: sessionError
                    };
                    const { data, error } = await (0, _fetch._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/verify`, {
                        body: {
                            code: params.code,
                            challenge_id: params.challengeId
                        },
                        headers: this.headers,
                        jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                    });
                    if (error) return {
                        data: null,
                        error
                    };
                    await this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1000) + data.expires_in
                    }, data));
                    await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data);
                    return {
                        data,
                        error
                    };
                });
            } catch (error) {
                if ((0, _errors.isAuthError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challenge}
     */ async _challenge(params) {
        return this._acquireLock(-1, async ()=>{
            try {
                return await this._useSession(async (result)=>{
                    var _a;
                    const { data: sessionData, error: sessionError } = result;
                    if (sessionError) return {
                        data: null,
                        error: sessionError
                    };
                    return await (0, _fetch._request)(this.fetch, "POST", `${this.url}/factors/${params.factorId}/challenge`, {
                        headers: this.headers,
                        jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                    });
                });
            } catch (error) {
                if ((0, _errors.isAuthError)(error)) return {
                    data: null,
                    error
                };
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challengeAndVerify}
     */ async _challengeAndVerify(params) {
        // both _challenge and _verify independently acquire the lock, so no need
        // to acquire it here
        const { data: challengeData, error: challengeError } = await this._challenge({
            factorId: params.factorId
        });
        if (challengeError) return {
            data: null,
            error: challengeError
        };
        return await this._verify({
            factorId: params.factorId,
            challengeId: challengeData.id,
            code: params.code
        });
    }
    /**
     * {@see GoTrueMFAApi#listFactors}
     */ async _listFactors() {
        // use #getUser instead of #_getUser as the former acquires a lock
        const { data: { user }, error: userError } = await this.getUser();
        if (userError) return {
            data: null,
            error: userError
        };
        const factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
        const totp = factors.filter((factor)=>factor.factor_type === "totp" && factor.status === "verified");
        return {
            data: {
                all: factors,
                totp
            },
            error: null
        };
    }
    /**
     * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
     */ async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(-1, async ()=>{
            return await this._useSession(async (result)=>{
                var _a, _b;
                const { data: { session }, error: sessionError } = result;
                if (sessionError) return {
                    data: null,
                    error: sessionError
                };
                if (!session) return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
                const payload = this._decodeJWT(session.access_token);
                let currentLevel = null;
                if (payload.aal) currentLevel = payload.aal;
                let nextLevel = currentLevel;
                const verifiedFactors = (_b = (_a = session.user.factors) === null || _a === void 0 ? void 0 : _a.filter((factor)=>factor.status === "verified")) !== null && _b !== void 0 ? _b : [];
                if (verifiedFactors.length > 0) nextLevel = "aal2";
                const currentAuthenticationMethods = payload.amr || [];
                return {
                    data: {
                        currentLevel,
                        nextLevel,
                        currentAuthenticationMethods
                    },
                    error: null
                };
            });
        });
    }
}
exports.default = GoTrueClient;
GoTrueClient.nextInstanceID = 0;

},{"./GoTrueAdminApi":"cZOCe","./lib/constants":"04zmg","./lib/errors":"aGVxJ","./lib/fetch":"b81us","./lib/helpers":"hg2Fd","./lib/local-storage":"faFf6","./lib/polyfills":"fLnCi","./lib/version":"8lpVC","./lib/locks":"2HeFx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"faFf6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localStorageAdapter", ()=>localStorageAdapter);
/**
 * Returns a localStorage-like object that stores the key-value pairs in
 * memory.
 */ parcelHelpers.export(exports, "memoryLocalStorageAdapter", ()=>memoryLocalStorageAdapter);
var _helpers = require("./helpers");
const localStorageAdapter = {
    getItem: (key)=>{
        if (!(0, _helpers.supportsLocalStorage)()) return null;
        return globalThis.localStorage.getItem(key);
    },
    setItem: (key, value)=>{
        if (!(0, _helpers.supportsLocalStorage)()) return;
        globalThis.localStorage.setItem(key, value);
    },
    removeItem: (key)=>{
        if (!(0, _helpers.supportsLocalStorage)()) return;
        globalThis.localStorage.removeItem(key);
    }
};
function memoryLocalStorageAdapter(store = {}) {
    return {
        getItem: (key)=>{
            return store[key] || null;
        },
        setItem: (key, value)=>{
            store[key] = value;
        },
        removeItem: (key)=>{
            delete store[key];
        }
    };
}

},{"./helpers":"hg2Fd","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fLnCi":[function(require,module,exports) {
/**
 * https://mathiasbynens.be/notes/globalthis
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "polyfillGlobalThis", ()=>polyfillGlobalThis);
function polyfillGlobalThis() {
    if (typeof globalThis === "object") return;
    try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function() {
                return this;
            },
            configurable: true
        });
        // @ts-expect-error 'Allow access to magic'
        __magic__.globalThis = __magic__;
        // @ts-expect-error 'Allow access to magic'
        delete Object.prototype.__magic__;
    } catch (e) {
        if (typeof self !== "undefined") // @ts-expect-error 'Allow access to globals'
        self.globalThis = self;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2HeFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "internals", ()=>internals);
/**
 * An error thrown when a lock cannot be acquired after some amount of time.
 *
 * Use the {@link #isAcquireTimeout} property instead of checking with `instanceof`.
 */ parcelHelpers.export(exports, "LockAcquireTimeoutError", ()=>LockAcquireTimeoutError);
parcelHelpers.export(exports, "NavigatorLockAcquireTimeoutError", ()=>NavigatorLockAcquireTimeoutError);
/**
 * Implements a global exclusive lock using the Navigator LockManager API. It
 * is available on all browsers released after 2022-03-15 with Safari being the
 * last one to release support. If the API is not available, this function will
 * throw. Make sure you check availablility before configuring {@link
 * GoTrueClient}.
 *
 * You can turn on debugging by setting the `supabase.gotrue-js.locks.debug`
 * local storage item to `true`.
 *
 * Internals:
 *
 * Since the LockManager API does not preserve stack traces for the async
 * function passed in the `request` method, a trick is used where acquiring the
 * lock releases a previously started promise to run the operation in the `fn`
 * function. The lock waits for that promise to finish (with or without error),
 * while the function will finally wait for the result anyway.
 *
 * @param name Name of the lock to be acquired.
 * @param acquireTimeout If negative, no timeout. If 0 an error is thrown if
 *                       the lock can't be acquired without waiting. If positive, the lock acquire
 *                       will time out after so many milliseconds. An error is
 *                       a timeout if it has `isAcquireTimeout` set to true.
 * @param fn The operation to run once the lock is acquired.
 */ parcelHelpers.export(exports, "navigatorLock", ()=>navigatorLock);
var _helpers = require("./helpers");
const internals = {
    /**
     * @experimental
     */ debug: !!(globalThis && (0, _helpers.supportsLocalStorage)() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class LockAcquireTimeoutError extends Error {
    constructor(message){
        super(message);
        this.isAcquireTimeout = true;
    }
}
class NavigatorLockAcquireTimeoutError extends LockAcquireTimeoutError {
}
async function navigatorLock(name, acquireTimeout, fn) {
    if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
    const abortController = new globalThis.AbortController();
    if (acquireTimeout > 0) setTimeout(()=>{
        abortController.abort();
        if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
    }, acquireTimeout);
    // MDN article: https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request
    return await globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
        mode: "exclusive",
        ifAvailable: true
    } : {
        mode: "exclusive",
        signal: abortController.signal
    }, async (lock)=>{
        if (lock) {
            if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
            try {
                return await fn();
            } finally{
                if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
            }
        } else if (acquireTimeout === 0) {
            if (internals.debug) console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
            throw new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${name}" immediately failed`);
        } else {
            if (internals.debug) try {
                const result = await globalThis.navigator.locks.query();
                console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
            } catch (e) {
                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
            }
            // Browser is not following the Navigator LockManager spec, it
            // returned a null lock when we didn't use ifAvailable. So we can
            // pretend the lock is acquired in the name of backward compatibility
            // and user experience and just run the function.
            console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
            return await fn();
        }
    });
}

},{"./helpers":"hg2Fd","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fTHdd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goTrueAdminApi = require("./GoTrueAdminApi");
var _goTrueAdminApiDefault = parcelHelpers.interopDefault(_goTrueAdminApi);
const AuthAdminApi = (0, _goTrueAdminApiDefault.default);
exports.default = AuthAdminApi;

},{"./GoTrueAdminApi":"cZOCe","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gsWfA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goTrueClient = require("./GoTrueClient");
var _goTrueClientDefault = parcelHelpers.interopDefault(_goTrueClient);
const AuthClient = (0, _goTrueClientDefault.default);
exports.default = AuthClient;

},{"./GoTrueClient":"j7FfD","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"acnk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bNcCE":[function(require,module,exports) {
module.exports = require("849779deeadc0f31")(require("a61c729798d98a1b").getBundleURL("1Q55w") + "signUp.bcb13ab7.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("gVOPx"));

},{"849779deeadc0f31":"3dDkg","a61c729798d98a1b":"jkqJ4"}],"60Ikj":[function(require,module,exports) {
module.exports = require("e7e211454e76e677")(require("e6d17d9eae66552d").getBundleURL("1Q55w") + "signIn.e51c192a.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("cbLdP"));

},{"e7e211454e76e677":"3dDkg","e6d17d9eae66552d":"jkqJ4"}],"cS9T6":[function(require,module,exports) {
module.exports = require("342507aafdba9b7e")(require("856776aa1aebf4ad").getBundleURL("1Q55w") + "verify.6491b9a1.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("9UBEU"));

},{"342507aafdba9b7e":"3dDkg","856776aa1aebf4ad":"jkqJ4"}],"h4qbd":[function(require,module,exports) {
module.exports = require("7caddbb78564a44")(require("133be8301b94adc3").getBundleURL("1Q55w") + "taskList.a5a2bdea.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("9fECp"));

},{"7caddbb78564a44":"3dDkg","133be8301b94adc3":"jkqJ4"}]},["jeTtx"], "jeTtx", "parcelRequire89a0")

//# sourceMappingURL=app.js.map
