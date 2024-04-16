const { Client } = require('@notionhq/client');
const notion = new Client({
  auth: 'secret_Hd41PC90FQ741AK1FjoNWUqJL31lKZo4P3RCP3O75c3',
});

export const getAllPublished = async () => {
  let filter = [
    {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  ];
  const posts = await notion.databases.query({
    database_id: process.env.NEXT_APP_NOTION_BLOG_DATABASE_ID,
    filter: {
      and: filter,
    },
    sorts: [
      {
        property: 'CreatedTime',
        direction: 'descending',
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts.map(post => {
    return getPageMetaData(post);
  });
};
const getPageMetaData = post => {
  return {
    id: post.id,
    title: post?.properties?.Page?.title?.[0]?.plain_text,
    categories: post?.properties?.Category?.multi_select,
    cover:
      post?.properties?.Cover?.files?.[0]?.file?.url ||
      post?.properties?.Cover?.files?.[0]?.name,
    createdTime: post?.properties?.CreatedTime?.created_time,
    slug: post?.properties?.Slug?.formula?.string,
  };
};

const { NotionToMarkdown } = require('notion-to-md');
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSingleBlogPostBySlug = async slug => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_APP_NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    metadata,
    markdown: mdString,
  };
};
