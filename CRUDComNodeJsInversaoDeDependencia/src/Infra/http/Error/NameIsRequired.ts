export class NameIsRequired extends Error {
  constructor() {
    super('Name is required');
  }
}