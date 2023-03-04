export class NameOrDescriptionIsRequired extends Error {
  constructor() {
    super('Name or description is required');
  }
}