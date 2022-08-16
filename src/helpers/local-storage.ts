import { LocalStorageKey } from 'model';

export function setValue<T>(key: LocalStorageKey, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getValue<T>(key: LocalStorageKey): T | null {
  const value = window.localStorage.getItem(key);

  return value as T | null;
}

export const removeKey = (key: LocalStorageKey) => window.localStorage.removeItem(key);
