const DEFAULT_EXPIRY = 3000000; // 5 minutes

export const setLocalStorageWithExpiry = (key, value, ttl = DEFAULT_EXPIRY) => {
  const now = new Date();
  const newLocalStorageItem = {
    gameSession: value,
    expiry: now.getTime() + ttl
  }

  localStorage.setItem(key, JSON.stringify(newLocalStorageItem));
  return newLocalStorageItem;
}

export const getLocalStorageWithExpiry = (key) => {
  let localStorageItem = localStorage.getItem(key);

  // Return null if item does not exist in localStorage
  if (!localStorageItem) return null;

  localStorageItem = JSON.parse(localStorageItem);
  const now = new Date();

  // Return null and remove from localStorage if expired
  if (now.getTime() > localStorageItem.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return localStorageItem;
}