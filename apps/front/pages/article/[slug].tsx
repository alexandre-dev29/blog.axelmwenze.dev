import * as fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'highlight.js/styles/tokyo-night-dark.css';
import { useEffect, useState } from 'react';

const PostPage = ({ mdxSource }) => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <div className={'pt-10 pb-8'}>
      <div
        className={
          'px-12 md:px-28 lg:px-36 xl:px-48 2xl:px-56  hidden md:block'
        }
      >
        <h1 className={'text-3xl font-extrabold default-police '}>
          Axel <span className={'text-secondary'}>Mwenze</span>
        </h1>
        <div
          className={'border-b border-b-2 border-gray-200  mt-1 md:mt-6 flex'}
        >
          <div className={'flex-1 flex gap-8'}>
            <button
              className={
                'py-4 border-b-2 text-md md:text-xl border-[#313bac] text-secondary font-bold '
              }
            >
              Popular
            </button>
            <button
              className={'py-4 text-md md:text-xl font-bold text-gray-600'}
            >
              Engineering{' '}
            </button>
            <button
              className={'py-4 text-sm md:text-xl  font-bold text-gray-600'}
            >
              Growth Marketing{' '}
            </button>
            <button
              className={'py-4 text-md md:text-xl  font-bold text-gray-600'}
            >
              Company
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          'px-10 sm:px-24 md:px-28 lg:px-36 xl:px-48 2xl:px-56  pt-4 md:pt-16'
        }
      >
        <h1
          className={
            'text-2xl md:text-5xl default-police font-bold text-slate-700'
          }
        >
          What tools are used in a Modern Data Stack
        </h1>
        <p className={'font-bold  text-slate-400 mt-4 '}>
          Axel mwenze on August 28th 2022
        </p>
        <article className="prose lg:prose-xl prose-slate  max-w-none mt-8">
          {!isSSR ? <MDXRemote {...mdxSource} /> : <div>Rendering</div>}
        </article>
      </div>
    </div>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const markdown = fs.readFileSync(
    path.join('apps', 'front', 'pages', 'article', 'simple_mdx_file.mdx')
  );
  const { content } = matter(markdown);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: {
      mdxSource,
    },
  };
};

export default PostPage;
