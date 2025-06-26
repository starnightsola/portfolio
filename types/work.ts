export type Work = {
  id: string
  title: string
  description: string
  technologies: string[]
  image: {
    url: string
    width: number
    height: number
  }
  siteUrl: string
  githubUrl: string
}