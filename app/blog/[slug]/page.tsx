import PostDetail from '../../../src/domains/posts/components/post-detail';
import { Post } from '../../../src/domains/posts/models/post';

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostDetailsPage({ params }: Props) {
  const { slug } = params;

  return (
    <PostDetail
      post={{
        slug: 'any-slug',
        title:
          'Uma Boa Maneira de Organizar Suas Branches, Commits e Pull Requests',
        created_at: new Date(2022, 10, 24),
      }}
    />
  );
}
