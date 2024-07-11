const cleanSet = (set, startString) => {
  const str = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      str.push(s.slice(startString.length));
    }
  });
  return str.join('-');
};

export default cleanSet;
