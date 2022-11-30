import Link from 'next/link';
import { Text } from 'thon-ui';
import classNames from 'classnames';
import { format } from 'date-fns';
import { Post } from '../../models/post';

type Props = {
  post: Post;
  headerComplement?: React.ReactNode;
  isLarge?: boolean;
};

export default function PostsListItem({
  post,
  headerComplement,
  isLarge,
}: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={classNames('flex flex-col', {
        'gap-2': isLarge,
      })}
    >
      <Text variant="sm" className="text-gray-500">
        <>
          {format(post.created_at, 'dd.MM.yyyy')}
          {headerComplement}
        </>
      </Text>
      <Text
        variant={isLarge ? '3xl lg:4xl' : '2xl lg:3xl'}
        className="text-gray-800"
      >
        {post.title}
      </Text>
    </Link>
  );
}
