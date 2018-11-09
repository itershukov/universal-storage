interface IAsyncGetter {
  (key: string): Promise<string | void | null>;
}

interface IAsyncSetter {
  (key: string, value: string): Promise<string | void | null>;
}

interface ISyncGetter {
  (key: string): string | null;
}

interface ISyncSetter {
  (key: string, value: string): void;
}

export interface IAsyncStorage {
  getItem: IAsyncGetter;
  setItem: IAsyncSetter;
}

export interface ISyncStorage {
  getItem: ISyncGetter;
  setItem: ISyncSetter;
}

export default class Storage implements IAsyncStorage, Storage {
  readonly storage: IAsyncStorage | ISyncStorage;

  constructor(storage: IAsyncStorage | ISyncStorage) {
    this.storage = storage;
  }

  async getItem(key: string) {
    return this.storage.getItem(key);
  }

  async setItem(key: string, value: string) {
    return this.storage.setItem(key, value);
  }
}
