this.window = this.window || {};
this.window.HanTool = (function (exports) {
  'use strict';

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol = root.Symbol;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$4.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$3.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
  function noop() {
    // No operation performed.
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (-1);

    while ((++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map');

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /* Built-in method references that are verified to be native. */
  var Set = getNative(root, 'Set');

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
    return new Set(values);
  };

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (length >= LARGE_ARRAY_SIZE) {
      var set = createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache;
    }
    else {
      seen = result;
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = value;

      value = (value !== 0) ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      }
      else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  function uniq(array) {
    return (array && array.length) ? baseUniq(array) : [];
  }

  // import Storage from "./storage.ts";
  /**
   * @description 获取rgb随机颜色值，一般用于测试用
   * @type
   * @default
   * @example randomRgbColor()
   */
  const randomRgbColor = () => {
      const r = Math.floor(Math.random() * 100 + 100);
      const g = Math.floor(Math.random() * 100 + 20);
      const b = Math.floor(Math.random() * 255);
      return `rgb(${r},${g},${b})`;
  };
  /**
   * @description rgb的颜色值转为Hex颜色值
   * @type
   * @default
   * @example colorRgbToHex('rgb(255,255,255)') => #ffffff
   */
  const colorRgbToHex = (rgb) => {
      if (!rgb.includes("rgb")) {
          throw new Error('必需包含rgb');
      }
      // split 的参数可以是正则表达式
      const rgbArr = rgb.split(/[^\d]+/);
      const color = (rgbArr[1] << 16) | (rgbArr[2] << 8) | rgbArr[3];
      return "#" + ("00000" + color.toString(16)).slice(-6);
  };
  /**
   * @description rgba的颜色值转为Hex颜色值
   * @type
   * @default
   * @example colorRgbaToHex('rgb(255,255,255)') => #ffffff
   */
  const colorRgbaToHex = (rgba) => {
      if (!rgba.includes("rgba")) {
          throw new Error('必需包含rgba');
      }
      // 将 rgba 颜色值分割为 r、g、b 和 a 的值
      const [r, g, b, a] = rgba.split(",").map(Number);
      // 将 r、g、b 值转换为十六进制字符串
      const hex = "#" + ((((1 << 24) + r) << (16 + g)) << (8 + b)).toString(16).slice(1);
      return hex;
  };
  /**
   * @description rgba的颜色值转为Hex颜色值
   * @type
   * @default
   * @example colorHexToRgb('#ffffff') => rgb(255,255,255)
   */
  const colorHexToRgb = (hex) => {
      if (hex.length !== 7 || hex.charAt(0) !== "#") {
          throw new Error('必需包含#, 且长度为7位的字符');
      }
      // 转为6位的16进制 0xcc00ff
      let newHex = hex.replace("#", "0x"), r = newHex >> 16, g = (newHex >> 8) & 0xff, b = newHex & 0xff;
      return `rgb(${r},${g},${b})`;
  };
  /**
   * @description rgba的颜色值转为Hex颜色值
   * @type
   * @default
   * @example colorHexToRgb('#ffffff', 1) => rgb(255,255,255, 1)
   */
  const colorHexToRgba = (hex, alpha = 1) => {
      if (hex.length !== 7 || hex.charAt(0) !== "#") {
          throw new Error('必需包含#, 且长度为7位的字符');
      }
      // 去除十六进制颜色值的 '#' 符号
      const hexValue = hex.slice(1);
      // 将十六进制颜色值转换为整数
      const r = parseInt(hexValue.substring(0, 2), 16) << 16;
      const g = parseInt(hexValue.substring(2, 4), 16) << 8;
      const b = parseInt(hexValue.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  /**
   * @description 金额逗号分隔
   * @type
   * @default
   * @example 1314520.86 => 1,314,520.86
   */
  const formatPrice = function (number = 0) {
      /* 设置边界值 */
      if (number === 0)
          return "0";
      // 没有则返回undefined
      if (!number)
          return undefined;
      let n = number;
      let r = "";
      let temp;
      do {
          // 求模的值， 用于获取高三位，这里可能有小数
          const mod = n % 1000;
          // 值是不是大于1，是继续的条件
          n = n / 1000;
          // 高三位
          temp = ~~mod;
          // 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
          // 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
          // 2.拼接“,”
          r = (n >= 1 ? "".concat(temp).padStart(3, "0") : temp) + (!!r ? "," + r : "");
      } while (n >= 1);
      const strNumber = number + "";
      const index = strNumber.indexOf(".");
      // 拼接小数部分
      if (index >= 0) {
          r += strNumber.substring(index);
      }
      return r;
  };
  /**
   * @description: 通过文件地址下载文件
   * @param {*} href 下载路径
   * @param {*} fileName 文件名
   */
  const fileDownload = (href, fileName) => {
      const a = document.createElement("a");
      a.style.display = "none";
      a.setAttribute("target", "_self");
      fileName && a.setAttribute("download", fileName);
      a.href = href;
      a.setAttribute("href", href);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return true;
  };
  /**
   * @description: 强制修改稿响应头下载文件
   * @param {*} url 下载路径
   * @param {*} fileName 文件名
   */
  const fileDownloadByType = (url, fileName) => {
      fetch(url, {
          method: "get",
      })
          .then((res) => {
          if (res.status !== 200) {
              return res.json();
          }
          return res.arrayBuffer();
      })
          .then((blobRes) => {
          // 生成 Blob 对象，设置 type 等信息
          const e = new Blob([blobRes], {
              type: "application/octet-stream",
          }); // 将arrayBuffer转为blob对象
          const link = window.URL.createObjectURL(e); // 将 Blob 对象转为 url
          const a = document.createElement("a");
          a.href = link;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(link);
      })
          .catch((err) => {
          console.error(err);
      });
  };
  /**
   * @description: 通过后端接口下载文件
   * @param {*} filename 文件名
   * @param {*} blobContent 后端返回二进制流数据
   * @param {*} type 文件类型
   *
   */
  const fileDownloadByRes = (filename, blobContent, type = "vnd.openxmlformats-officedocument.spreadsheetml.sheet") => {
      const blob = new Blob([blobContent], { type: `application/${type};charset=utf-8` });
      // 获取heads中的filename文件名
      const downloadElement = document.createElement("a");
      // 创建下载的链接
      const href = window.URL.createObjectURL(blob);
      downloadElement.href = href;
      // 下载后文件名
      downloadElement.download = filename;
      document.body.appendChild(downloadElement);
      // 点击下载
      downloadElement.click();
      // 下载完成移除元素
      document.body.removeChild(downloadElement);
      // 释放掉blob对象
      window.URL.revokeObjectURL(href);
  };
  /**
   * @description: 滑滚动页面到顶部
   */
  const scrollToTop = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, scrollTop - scrollTop / 8);
      }
  };
  /**
   * @description: 滚动到页面底部
   */
  const scrollToBottom = () => {
      window.scrollTo(0, document.documentElement.clientHeight);
  };
  /**
   * @description: 根据开始年和结束年获取之间的所有日期(包含开始和结束)
   * @example getBetweenYears(2019, 2024) => [2019, 2020, 2021, 2022, 2023, 2024]
   */
  function getBetweenYears(startYear, endYear) {
      const years = [];
      for (let year = startYear; year <= endYear; year++) {
          years.push(year);
      }
      return [...years].reverse();
  }
  /**
   * @description: 函数睡眠
   */
  const sleep = (time = 10, fn) => {
      return new Promise((resolve) => {
          const timer = setTimeout(() => {
              clearTimeout(timer);
              fn && typeof fn === "function" && fn();
              resolve(true);
          }, time);
      });
  };
  /**
   * @description: 获取文件的后缀名
   * @param {*} filename
   */
  const getExt = (filename) => {
      return filename.split(".").pop().toLocaleLowerCase();
  };
  /**
   * @description: 判断浏览器内核
   */
  const checkBrowser = () => {
      const t = window.navigator.userAgent.toLowerCase();
      return t.indexOf("msie") >= 0
          ? {
              // ie < 11
              type: "IE",
              version: Number(t.match(/msie ([\d]+)/)[1]),
          }
          : t.match(/trident\/.+?rv:(([\d.]+))/)
              ? {
                  // ie 11
                  type: "IE",
                  version: 11,
              }
              : t.indexOf("edge") >= 0
                  ? {
                      type: "Edge",
                      version: Number(t.match(/edge\/([\d]+)/)[1]),
                  }
                  : t.indexOf("firefox") >= 0
                      ? {
                          type: "Firefox",
                          version: Number(t.match(/firefox\/([\d]+)/)[1]),
                      }
                      : t.indexOf("chrome") >= 0
                          ? {
                              type: "Chrome",
                              version: Number(t.match(/chrome\/([\d]+)/)[1]),
                          }
                          : t.indexOf("opera") >= 0
                              ? {
                                  type: "Opera",
                                  version: Number(t.match(/opera.([\d]+)/)[1]),
                              }
                              : t.indexOf("Safari") >= 0
                                  ? {
                                      type: "Safari",
                                      version: Number(t.match(/version\/([\d]+)/)[1]),
                                  }
                                  : {
                                      type: t,
                                      version: -1,
                                  };
  };
  /**
   * @description: 获取随机字符串  len为字符串长度
   * @param {*} len
   */
  const randomString = (len) => {
      const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
      const strLen = chars.length;
      let randomStr = "";
      for (let i = 0; i < len; i++) {
          randomStr += chars.charAt(Math.floor(Math.random() * strLen));
      }
      return randomStr;
  };
  /**
   * @description: 生成指定范围随机数
   * @param {*} min
   * @param {*} max
   */
  const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  /**
   * @description: 数组中获取随机数
   * @param {*} arr
   */
  const randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];
  /**
   * @description: 根据递归数组获取映射的路径
   * @param {*} array 要被递归的数组
   * @param {*} parentSubjectCode，目标
   * @param {*} period 对哪个字段进行映射，默认为value
   * @example [
      {
        value: "a",
        children: [
          {
            value: "g4",
            label: '3',
            children: [
            {
              value: 'yy'
            }
        ]}],
      }] ====> ['a', 'g4', 'yy']
   */
  const findParentNodeArray = (array, parentSubjectCode, period = "value") => {
      if (!isArray(array)) {
          throw "传入的为非数组，请重新传入";
      }
      const parentSubjectStock = []; // 存储父节点
      let going = true; // 是否已找到要查到的节点
      const findParentNode = function (array, code) {
          array.forEach((item) => {
              if (!going) {
                  return;
              }
              parentSubjectStock.push(item);
              if (item[period] === code) {
                  going = false;
              }
              else if (item.children) {
                  findParentNode(item.children, code);
              }
              else {
                  parentSubjectStock.pop();
              }
          });
          if (going)
              parentSubjectStock.pop();
      };
      findParentNode(array, parentSubjectCode);
      return parentSubjectStock.map((item) => item[period]);
  };
  /*
    @param {*} array 要被递归的数组
    @des: 判断数组内是否有元素重复，如果有返回true，没有返回false
  */
  const hasDuplicates = (arr) => {
      if (!isArray(arr)) {
          throw "请传入数组";
      }
      if (arr.length === 1) {
          return false;
      }
      // lodash 数组去重
      return uniq(arr).length !== arr.length;
  };
  /**
   * 手机号码*加密函数
   * @param {string} phone 电话号
   * @returns
   */
  const phoneEncryption = (phone) => {
      return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
  };
  /**
   * 格式化价格数额为字符串
   * 可对小数部分进行填充，默认不填充
   * @param price 价格数额，以分为单位!
   * @param fill 是否填充小数部分 0-不填充 1-填充第一位小数 2-填充两位小数
   */
  const priceFormat = (price, fill = 0) => {
      if (isNaN(price) || price === null || price === Infinity) {
          return price;
      }
      let priceFormatValue = Math.round(parseFloat(`${price}`) * 10 ** 8) / 10 ** 8; // 恢复精度丢失
      priceFormatValue = `${Math.ceil(priceFormatValue) / 100}`; // 向上取整，单位转换为元，转换为字符串
      if (fill > 0) {
          // 补充小数位数
          if (priceFormatValue.indexOf(".") === -1) {
              priceFormatValue = `${priceFormatValue}.`;
          }
          const n = fill - priceFormatValue.split(".")[1]?.length;
          for (let i = 0; i < n; i++) {
              priceFormatValue = `${priceFormatValue}0`;
          }
      }
      return priceFormatValue;
  };
  /**
   * 格式化文件大小，将字节转换为 KB、MB、GB 或 TB。
   * @param {number} sizeInBytes - 文件大小，以字节为单位
   * @returns {string} 格式化后的文件大小，包括单位
   * @example formatFileSize(123456789) => 117.74 MB
   */
  const formatFileSize = (sizeInBytes) => {
      // 如果大小为0，直接返回
      if (sizeInBytes === 0)
          return '0 Bytes';
      // 定义单位数组
      const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      // 计算指数，即单位数组的索引
      const exponent = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
      // 根据指数计算大小，并保留两位小数
      const size = (sizeInBytes / Math.pow(1024, exponent)).toFixed(2);
      // 获取对应的单位
      const unit = units[exponent];
      // 返回格式化后的字符串
      return `${size}${unit}`;
  };
  /**
   * 将文件大小从一个单位转换为另一个单位。
   *
   * @param {number} size 文件大小。
   * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
   * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
   * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
   * @return {string} 转换后的文件大小，带单位。
   * @example console.log(convertFileSize(1, 'GB', 'MB')); // 输出: 1024.00 MB
   */
  const convertFileSize = (size, fromUnit, toUnit, decimalPoint = 2) => {
      // 定义单位与字节之间的转换关系
      const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      // 获取初始单位和目标单位的索引
      const fromIndex = units.indexOf(fromUnit);
      const toIndex = units.indexOf(toUnit);
      // 如果单位不在列表中，抛出错误
      if (fromIndex === -1 || toIndex === -1) {
          throw new Error('Invalid units');
      }
      // 计算初始单位与目标单位之间的转换系数
      const exponent = toIndex - fromIndex;
      // 计算结果大小
      const resultSize = size / Math.pow(1024, exponent);
      // 返回格式化后的结果
      return parseFloat(resultSize.toFixed(decimalPoint)) + ' ' + toUnit;
  };
  // export { Storage };

  exports.checkBrowser = checkBrowser;
  exports.colorHexToRgb = colorHexToRgb;
  exports.colorHexToRgba = colorHexToRgba;
  exports.colorRgbToHex = colorRgbToHex;
  exports.colorRgbaToHex = colorRgbaToHex;
  exports.convertFileSize = convertFileSize;
  exports.fileDownload = fileDownload;
  exports.fileDownloadByRes = fileDownloadByRes;
  exports.fileDownloadByType = fileDownloadByType;
  exports.findParentNodeArray = findParentNodeArray;
  exports.formatFileSize = formatFileSize;
  exports.formatPrice = formatPrice;
  exports.getBetweenYears = getBetweenYears;
  exports.getExt = getExt;
  exports.hasDuplicates = hasDuplicates;
  exports.phoneEncryption = phoneEncryption;
  exports.priceFormat = priceFormat;
  exports.randomNum = randomNum;
  exports.randomRange = randomRange;
  exports.randomRgbColor = randomRgbColor;
  exports.randomString = randomString;
  exports.scrollToBottom = scrollToBottom;
  exports.scrollToTop = scrollToTop;
  exports.sleep = sleep;

  return exports;

})({});
//# sourceMappingURL=index.global.js.map
