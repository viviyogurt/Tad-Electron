export enum Exceptions {
  ConnectionError,
  TypeCheckError,
  DuplicatesError,
  IllegalCharacterError,
}

export class Exception extends Error {
  constructor(readonly code: string) {
    super(
      `An unexpected error happened with code ${code}. Please refer to the API documentation for more details.`,
    );
  }
}
