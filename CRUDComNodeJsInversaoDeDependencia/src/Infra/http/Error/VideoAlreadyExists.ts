export class VideoAlreadyExists extends Error {
  constructor() {
    super('Video already exists')
  }
}