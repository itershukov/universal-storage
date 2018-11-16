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

export class WebStorageDecorator implements IAsyncStorage {
  readonly storage: IAsyncStorage;

  constructor(storage: IAsyncStorage) {
    this.storage = storage;
  }

  async getItem(key: string) {
    return this.storage.getItem(key);
  }

  async setItem(key: string, value: string) {
    return this.storage.setItem(key, value);
  }
}

export class MobStorageDecorator implements IAsyncStorage {
  readonly storage: IAsyncStorage;

  constructor(storage: IAsyncStorage) {
    this.storage = storage;
  }

  async getItem(key: string) {
    return this.storage.getItem(key);
  }

  async setItem(key: string, value: string) {
    return this.storage.setItem(key, value);
  }
}
