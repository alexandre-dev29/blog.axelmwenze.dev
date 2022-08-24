import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { GetServerSideProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/tokyo-night-dark.css';
import { useEffect, useState } from 'react';
import { ssrGetArticleBySlug, TagEntityResponseCollection } from '@next-template-nx/data';
import { motion, useScroll } from 'framer-motion';
import { ShareArticle } from '@next-template-nx/ui';
import { useRouter } from 'next/router';

interface mixedReturnedServerData {
  mdxSource: any;
  dataPage: {
    __typename?: 'ArticleEntity';
    id?: string;
    attributes?: {
      __typename?: 'Article';
      Title: string;
      Slug: string;
      ViewsCount?: number;
      Description: string;
      createdAt?: any;
      Content: string;
      PublishedDate: any;
      Creator?: any;
      ArtImage: any;
      Tags?: TagEntityResponseCollection;
    };
  };
}

const PostPage = ({ mdxSource, dataPage }: mixedReturnedServerData) => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const articleUrl = `${process.env.NEXT_PUBLIC_API_BASE_HOSTNAME}${router.asPath}`;

  return (
    <div className={'px-0  xl:px-[10rem] 2xl:px-[14rem] relative'}>
      <ShareArticle
        articleLink={articleUrl}
        articleTitle={dataPage.attributes.Description}
        hashTags={dataPage.attributes.Tags.data.map((value) => value.attributes.TagText)}
      />
      <motion.div className={'progress-bar'} style={{ scaleX: scrollYProgress }} />
      <h1 className={'text-2xl md:text-5xl default-police font-bold text-slate-700 text-center'}>
        {dataPage.attributes.Title}
      </h1>
      <p
        className={'font-bold  text-slate-400 mt-4 '}
      >{`${dataPage.attributes.Creator.data.attributes.CreatorName} on ${dataPage.attributes.PublishedDate}`}</p>
      <article className="prose lg:prose-xl prose-slate  max-w-none mt-8">
        {!isSSR ? <MDXRemote {...mdxSource} /> : <div>Rendering</div>}
      </article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { props } = await ssrGetArticleBySlug.getServerPage(
    { variables: { slug: { eq: params?.slug?.toString() || '' } } },
    { cookies: undefined }
  );

  const selectedArticle = props.data.articles.data[0];
  const { content } = matter(selectedArticle.attributes.Content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeHighlight],
    },
  });

  return {
    props: {
      mdxSource,
      dataPage: selectedArticle,
    },
  };
};

export default PostPage;
