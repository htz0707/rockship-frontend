import React, { useEffect, useState } from 'react';
import styles from '@/styles/blogs-detail.module.scss';
import CustomLayout from '@/components/Layout';
import { getAllPublished, getSingleBlogPostBySlug } from '@/lib/notion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import MetaTags from '@/components/MetaTags';
import ShareButton from '@/components/ShareButton';
import moment from 'moment';
import Card from '@/components/Card';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Index({ post, posts }) {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return (
    <>
      <MetaTags title={post?.metadata?.title} image={post?.metadata?.cover} />
      <CustomLayout link={'blogs'}>
        <div className={styles['blogs-detail']}>
          <div className={styles['blogs-container']}>
            <Button
              className={styles['button-back']}
              onClick={() => router.push('/blogs')}
            >
              <img src={'/arrow-left-gray.svg'} alt="back" />
              <p>Back to list</p>
            </Button>
            <div className={styles['blogs-banner']}>
              <img
                src={post.metadata.cover}
                alt={post.metadata.title}
                className={styles['blogs-banner-image']}
              />
              <div className={styles['blogs-banner-date']}>
                <div>{moment(post?.metadata?.createdTime).format('DD')}</div>
                <div>{moment(post?.metadata?.createdTime).format('MMM')}</div>
              </div>
              <div className={styles['blogs-banner-action']}>
                <ShareButton url={currentUrl} />
              </div>
            </div>
            <div className={styles['blogs-title']}>{post.metadata.title}</div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      // eslint-disable-next-line react/no-children-prop
                      children={String(children).replace(/\n$/, '')}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.markdown.parent?.replaceAll('undefined', '')}
            </ReactMarkdown>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              <ShareButton url={currentUrl} />
            </div>
            <div className={styles['blogs-related']}>
              <div className={styles['title']}>Related Blogs</div>
              <Row gutter={[10, 10]}>
                {posts?.map((item, index) => {
                  return (
                    <Col xs={24} sm={12} md={8} key={item.id || index}>
                      <Link href={`/blogs/${item.slug}`}>
                        <Card
                          title={item.title}
                          imageSrc={item.cover}
                          lsValue={item.categories || []}
                        />
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </CustomLayout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);
  const allPosts = await getAllPublished();
  const targetCategories = post?.metadata?.categories?.map(item => item.name);
  const posts = allPosts.filter(
    item =>
      item.categories.some(category =>
        targetCategories.includes(category.name)
      ) && item.slug !== params.slug
  );

  return {
    props: {
      post,
      posts: posts.length > 0 ? posts.slice(0, 3) : allPosts.slice(0, 3),
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};
