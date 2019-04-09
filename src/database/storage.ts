const sqlite3 = require('sqlite3').verbose();

interface IUpdateRequest {
  insert?: Map<string, string>;
  delete?: Set<string>;
}

interface IStorageDatabase {
  getItems(): Promise<Map<string, string>>;
  updateItems(request: IUpdateRequest): Promise<void>;

  close(): Promise<void>;
}

interface IStorage {}

export class Storage implements IStorage {
  constructor() {
    console.info('Database connection established.');
  }
}

export class SQLiteStorageDatabase implements IStorageDatabase {
  static IN_MEMORY_PATH = ':memory:';

  getItems(): Promise<Map<string, string>> {
    return new Promise((resolve, reject) => {});
  }

  updateItems(request: IUpdateRequest): Promise<void> {
    return new Promise((resolve, reject) => {});
  }

  close(): Promise<void> {
    return new Promise((resolve, reject) => {});
  }
}

export class InMemoryStorageDatabase implements IStorageDatabase {
  getItems(): Promise<Map<string, string>> {
    return new Promise((resolve, reject) => {});
  }

  updateItems(request: IUpdateRequest): Promise<void> {
    return new Promise((resolve, reject) => {});
  }

  close(): Promise<void> {
    return new Promise((resolve, reject) => {});
  }
}
