const createInt8TypedArray = (length, position, value) => {
  const buf = new ArrayBuffer(length);
  const int8arr = new Int8Array(buf);

  if (position > int8arr.length) throw new Error('Position outside range');
  int8arr[position] = value;
  return new DataView(buf);
};

export default createInt8TypedArray;
