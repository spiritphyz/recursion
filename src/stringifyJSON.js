const stringifyJSON = obj => {
  if (typeof obj === 'function' ||
      typeof obj === 'undefined') {
    return null;
  }
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  if (Array.isArray(obj)) {
    let result = obj.map(item => stringifyJSON(item));
    return '[' + result.join(',') + ']';
  }
  if (obj === Object(obj)) {
    let result = [];
    for (let key of Object.keys(obj)) {
      let val = stringifyJSON(obj[key]);
      if (val !== null) {
        result.push('\"' + key + '\":' + val);
      }
    }
    return '{' + result.join(',') + '}';
  }
  return '' + obj;
};