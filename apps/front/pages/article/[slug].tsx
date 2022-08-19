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
import { log } from 'next-axiom';

const PostPage = ({ mdxSource }) => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <div className={''}>
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
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  let markdown;
  try {
    markdown = fs.readFileSync(
      path.join(process.cwd(), 'public', 'simple_mdx_file.mdx')
    );
  } catch (e) {
    log.error(e);
  }
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
