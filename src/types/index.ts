export enum View {
  ALL = 'all',
  BLOGS = 'blogs',
};

export type ArticleType = {
  item: {
    content: string,
    contentSnippet: string,
    feedTitle?: string,
    feedUrl?: string,
    guid: string,
    isoDate: string,
    link: string,
    pubDate: string,
    title: string
  }
};

export interface BlogInterface {
  [key: string]: ArticleType[]
};