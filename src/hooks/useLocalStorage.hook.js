const useLocalStorage = () => {

  const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }

  const setToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeItem = (key) => {
    localStorage.removeItem(key)
  }

  return {
    get: getFromStorage,
    set: setToStorage,
    remove: removeItem,
  }
};

export default useLocalStorage;
