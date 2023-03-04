export class CategoryAlreadyNotExists extends Error {
  constructor() {
    super('Category already not exists');
  }
}