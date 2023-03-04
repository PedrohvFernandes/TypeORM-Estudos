import { IVideo, VideoRequestProps } from '@infra/http/Interfaces/IVideo'

export function makeVideo({
  name,
  description,
  duration,
  category_id
}: VideoRequestProps): IVideo {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: name,
    description: description,
    duration: duration,
    category_id: category_id,
    created_at: new Date()
  }
}
