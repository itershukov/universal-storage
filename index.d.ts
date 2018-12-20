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
export declare class WebStorageDecorator implements IAsyncStorage {
    readonly storage: ISyncStorage;
    constructor(storage: ISyncStorage);
    getItem(key: string): Promise<string>;
    setItem(key: string, value: string): Promise<void>;
}
export declare class MobStorageDecorator implements IAsyncStorage {
    readonly storage: IAsyncStorage;
    constructor(storage: IAsyncStorage);
    getItem(key: string): Promise<string | void>;
    setItem(key: string, value: string): Promise<string | void>;
}
export {};
