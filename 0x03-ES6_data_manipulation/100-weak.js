export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const info = weakMap.get(endpoint);
    if (info >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (info + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
