import React from 'react';
import styles from '@/styles/blogs.module.scss';
import CustomLayout from '@/components/Layout';
import { getAllPublished } from '@/lib/notion';
import Card from '@/components/Card';
import { Col, Row } from 'antd';
import Link from 'next/link';

export default function Index({ blogs }) {
  return (
    <CustomLayout link={'blogs'}>
      <div className={styles['blogs']}>
        <h2 className={styles['title']}>Blogs</h2>
        <Row gutter={[24, 24]}>
          {blogs?.map((item, index) => {
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
    </CustomLayout>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      blogs: data,
    },
    revalidate: 60,
  };
};
