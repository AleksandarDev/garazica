/**
 * Class represents the local storage service and provides methods for working with
 * local storage.
 *
 * @class LocalStorageService
 */
class LocalStorageService {
  /**
     * Sets item to local storage if it is defined.
     *
     * @static
     * @param {string} itemName Item's name
     * @param {string} itemValue Item's value
     * @memberof LocalStorageService
     */
  static setItem(itemName: string, itemValue: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(itemName, itemValue);
    }
  }

  /**
     * Retrieves the item from local storage if it is defiend.
     *
     * @static
     * @param {string} itemName Item's name
     * @returns item's value or null if local storage is not defined
     * @memberof LocalStorageService
     */
  static getItem(itemName: string): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(itemName);
    }

    return null;
  }

  /**
     * Removes the item from local storage it it is defined.
     *
     * @static
     * @param {string} itemName Item's name
     * @memberof LocalStorageService
     */
  static removeItem(itemName: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(itemName);
    }
  }
}

export default LocalStorageService;
