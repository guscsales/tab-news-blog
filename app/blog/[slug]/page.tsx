import PostDetailComponent from '../../../src/domains/posts/components/post-detail-component';
import { PostDetail } from '../../../src/domains/posts/models/post-detail';
import { Text } from 'thon-ui';

type Props = {
  params: {
    slug: string;
  };
};

async function getPost(slug: string) {
  const postResponse = await fetch(
    `${process.env.BLOG_PROVIDER_BASE_API}/contents/guscsales/${slug}`
  );
  const post = (await postResponse.json()) as PostDetail;

  if (!post) {
    return null;
  }

  post.created_at = new Date(post.created_at);

  return post;
}

export default async function BlogPostDetailsPage({ params }: Props) {
  const { slug } = params;
  const post = await getPost(slug);

  return post ? (
    <PostDetailComponent post={post} />
  ) : (
    <Text variant="xl">Post não encontrado</Text>
  );
}
