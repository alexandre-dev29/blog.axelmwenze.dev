import { ArticleAttributs, ArticleEntity, GetFeaturedArticleQuery } from '@next-template-nx/data';

export const getArticleFromFeaturedQuery = ({
  featured,
}: GetFeaturedArticleQuery | any): ArticleAttributs => {
  const tags: string[] = [''];
  featured?.data?.attributes?.article?.data?.attributes?.Tags?.data?.forEach((value: any) => {
    tags.push(`${value?.attributes?.TagText}`);
  });
  return {
    title: `${featured?.data?.attributes?.article?.data?.attributes?.Title}`,
    author: `${featured?.data?.attributes?.article?.data?.attributes?.Creator?.data?.attributes?.CreatorName}`,
    dateString: `${featured?.data?.attributes?.article?.data?.attributes?.PublishedDate}`,

    description: `${featured?.data?.attributes?.article?.data?.attributes?.Description}`,
    image: `${featured?.data?.attributes?.article?.data?.attributes?.ArtImage?.data?.attributes?.url}`,
    authorImage: `${featured?.data?.attributes?.article?.data?.attributes?.Creator?.data?.attributes?.CreatorImage?.data?.attributes?.url}`,
    tags: [...tags],
    slug: `${featured?.data?.attributes?.article?.data?.attributes?.Slug}`,
  } as ArticleAttributs;
};

export const getArticleFromArticleEntity = ({ attributes }: ArticleEntity | any): ArticleAttributs => {
  const tags: string[] = [''];
  attributes?.Tags?.data.forEach((value: any) => {
    tags.push(`${value?.attributes?.TagText}`);
  });
  return {
    title: `${attributes?.Title}`,
    author: `${attributes?.Creator?.data?.attributes?.CreatorName}`,
    dateString: `${attributes?.PublishedDate}`,

    description: `${attributes?.Description}`,
    image: `${attributes?.ArtImage?.data?.attributes?.url}`,
    authorImage: `${attributes?.Creator?.data?.attributes?.CreatorImage?.data?.attributes?.url}`,
    tags: [...tags],
    slug: `${attributes?.Slug}`,
  } as ArticleAttributs;
};

export const getArticlesFromCategory = (
  data:
    | Array<{
        __typename?: 'ArticleEntity';
        id?: string | null;
        attributes?: {
          __typename?: 'Article';
          Title: string;
          Slug: string;
          ViewsCount?: number | null;
          Description: string;
          createdAt?: any;
          Content: string;
          PublishedDate: any;
          Creator?: {
            __typename?: 'CreatorEntityResponse';
            data?: {
              __typename?: 'CreatorEntity';
              id?: string | null;
              attributes?: {
                __typename?: 'Creator';
                CreatorName: string;
                Bio: string;
                CreatorImage: {
                  __typename?: 'UploadFileEntityResponse';
                  data?: {
                    __typename?: 'UploadFileEntity';
                    id?: string | null;
                    attributes?: {
                      __typename?: 'UploadFile';
                      url: string;
                      previewUrl?: string | null;
                      name: string;
                      hash: string;
                      mime: string;
                      size: number;
                    } | null;
                  } | null;
                };
              } | null;
            } | null;
          } | null;
          ArtImage: {
            __typename?: 'UploadFileEntityResponse';
            data?: {
              __typename?: 'UploadFileEntity';
              id?: string | null;
              attributes?: {
                __typename?: 'UploadFile';
                url: string;
                previewUrl?: string | null;
                name: string;
                hash: string;
                mime: string;
                size: number;
              } | null;
            } | null;
          };
          Tags?: {
            __typename?: 'TagRelationResponseCollection';
            data: Array<{
              __typename?: 'TagEntity';
              id?: string | null;
              attributes?: { __typename?: 'Tag'; TagText: string } | null;
            }>;
          } | null;
        } | null;
      }>
    | undefined
): ArticleAttributs[] | undefined => {
  return data
    ?.sort((a, b) => parseInt(`${b.id}`) - parseInt(`${a.id}`))
    .slice(0, 2)
    .map(({ attributes }) => {
      const tags: string[] = [];
      attributes?.Tags?.data.forEach((value: any) => {
        tags.push(`${value?.attributes?.TagText}`);
      });
      return {
        title: attributes?.Title,
        authorImage: attributes?.Creator?.data?.attributes?.CreatorImage?.data?.attributes?.url,
        tags: tags,
        image: attributes?.ArtImage?.data?.attributes?.url,
        author: attributes?.Creator?.data?.attributes?.CreatorName,
        description: attributes?.Description,
        dateString: attributes?.PublishedDate,
        slug: attributes?.Slug,
      } as ArticleAttributs;
    });
};
