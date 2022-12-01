import { Text } from 'thon-ui';
import PostsListItem from '../../src/domains/posts/components/posts-list-item';
import { Post } from '../../src/domains/posts/models/post';

async function fetchPosts() {
  const postsResponse = await fetch(
    `${process.env.BLOG_PROVIDER_BASE_API}/contents/guscsales`,
    { next: { revalidate: 30 } }
  );
  let posts = (await postsResponse.json()) as Post[];

  posts = posts
    .filter((post) => !post['parent_id'])
    .map((post) => ({
      ...post,
      created_at: new Date(post.created_at),
    }));

  posts.sort(
    (a, b) =>
      (b.created_at as unknown as number) - (a.created_at as unknown as number)
  );

  return posts ? posts : [];
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <article>
      <header>
        <Text variant="3xl lg:4xl" as="h1" className="mb-7 lg:mb-12">
          Blog
        </Text>
      </header>

      {posts.length > 0 && (
        <ul aria-label="Posts" className="grid gap-6 w-full lg:w-[41.375rem]">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <PostsListItem
                post={post}
                isLarge={index === 0}
                headerComplement={
                  index === 0 ? ' - Última Postagem...' : undefined
                }
              />
            </li>
          ))}
        </ul>
      )}

      {posts.length === 0 && <Text variant="xl">Nenhum post encontrado</Text>}
    </article>
  );
}
