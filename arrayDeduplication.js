function arrayDeduplication(array) {
  if (Object.prototype.toString.call(array) !== '[object Array]') {
    return array;
  }
  // 利用Set
  if (window.Set) {
    return [...new Set(array)]
  }
  // 利用Map
  if (window.Map) {
    var m = new Map();
    var arr = [];
    for (var i = 0 ; i < array.length; i++) {
      if (!m.has(i)) {
        m.set(array[i], true);
        arr.push(array[i]);
      }
    }
    return arr;
  }
  // 利用includes
  if (typeof array.includes !== 'undefined') {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
      if (!arr.includes(array[i])) {
        arr.push(array[i]);
      }
    }
    return arr;
  }
  // 利用indexOf
  if (typeof array.indexOf !== 'undefined') {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
      if (arr.indexOf(array[i]) === -1) {
        arr.push(array[i]);
      }
    }
    return arr;
  }
  // 利用双层for + splice
  if (typeof array.splice !== 'undefined') {
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          array.splice(j, 1);
        }
      }
    }
  }
  // 利用filter
  if (typeof array.filter !== 'undefined') {
    return array.filter(function(item, index){
      return array.indexOf(item) === index;
    })
  }
  // 利用reduce
  if (typeof array.reduce !== 'undefined') {
    return array.reduce(function(arr, currentValue){
      if (!arr.includes(currentValue)) {
        arr.push(currentValue);
      }
      return arr;
    }, [])
  }

}