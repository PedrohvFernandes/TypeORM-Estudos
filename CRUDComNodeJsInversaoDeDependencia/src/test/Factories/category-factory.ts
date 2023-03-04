import {
  ICategory,
  CategoryRequestProps
} from '@infra/http/Interfaces/ICategory'

export function makeCategory({
  name,
  description
}: CategoryRequestProps): ICategory {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: name,
    description: description,
    created_at: new Date()
  }
}
