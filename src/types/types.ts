export interface Author {
  id: string
  name: string
}

export interface Publisher {
  id: string
  name: string
}

export interface News {
  id: string
  title: string
  body: string
  image: string
  created_at: string
  author: Author
  publisher: Publisher
}

export interface Magazine {
  id: string
  title: string
  image: string
  isFollowing: boolean
}
