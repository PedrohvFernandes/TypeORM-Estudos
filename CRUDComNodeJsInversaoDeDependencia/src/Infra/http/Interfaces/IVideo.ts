export interface IVideo {
  id: string;
  name: string;
  description: string;
  duration: number;
  category_id: string;
  created_at: Date;
}

export type VideoRequestProps = {
  name: string
  description: string
  duration: number
  category_id: string
}