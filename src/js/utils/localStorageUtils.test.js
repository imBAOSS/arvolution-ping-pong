import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from './localStorageUtils';

describe('localStroageUtils', () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  describe('setLocalStorageWithExpiry', () => {
    it('should call localStorage.setItem', () => {
      setLocalStorageWithExpiry('key', 'value');
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    })
  })
  
  describe('getLocalStorageWithExpiry', () => {
    it('should call localStorage.getItem', () => {
      getLocalStorageWithExpiry('key');
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    })
  })
})