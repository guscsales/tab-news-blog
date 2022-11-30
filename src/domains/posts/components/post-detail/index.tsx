import { Text } from 'thon-ui';
import { Post } from '../../models/post';
import Markdown from '../../../../shared/components/markdown';
import { format } from 'date-fns';

type Props = {
  post: Post;
};

export default function PostDetail({ post }: Props) {
  return (
    <>
      <Text variant="sm" className="text-gray-500">
        {format(post?.created_at, 'dd.MM.yyyy')}
      </Text>
      <Text
        as="h1"
        variant="2xl lg:3xl"
        className="w-full lg:w-[35rem] mt-2 mb-12"
      >
        {post.title}
      </Text>

      <section>
        <Markdown value={post.body || ''} />
      </section>
    </>
  );
}
