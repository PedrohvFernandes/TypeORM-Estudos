export class CategoriesNotFound extends Error {
  constructor() {
    super('Categories not found');
  }
}