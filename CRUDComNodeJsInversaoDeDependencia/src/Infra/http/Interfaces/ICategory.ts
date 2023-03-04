export interface ICategory {
  id: string
  name: string
  description: string
  created_at: Date
}

export type CategoryRequestProps = {
  name: string
  description: string
}