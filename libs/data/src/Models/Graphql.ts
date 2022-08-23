export enum ErrorTypeGraphQl {
  Network,
  Request,
}
export interface ArticleAttributs {
  title: string;
  image?: string;
  slug: string;
  authorImage?: string;
  description: string;
  author: string;
  dateString: string;
  tags?: string[];
}
