define('tmplt', [], function() {
  function tmplt(str, data) {
    for (var k in data) {
        if (data.hasOwnProperty(k)) {
            str = str.replace(new RegExp('{'+k+'}', 'g'), data[k]);
        }
    }
    return str;
  }

  return tmplt;
});