import { Text } from 'thon-ui';
import { Post } from '../src/domains/posts/models/post';
import { format } from 'date-fns';
import Markdown from '../src/shared/components/markdown';
import Link from 'next/link';

const baseURL = 'https://www.tabnews.com.br/api/v1';
const postsEndpoint = '/contents/guscsales';

async function getLastPost() {
  const postsResponse = await fetch(`${baseURL}${postsEndpoint}`);
  let posts = (await postsResponse.json()) as Post[];

  posts = posts
    .filter((post) => post.title)
    .map((post) => ({
      ...post,
      created_at: new Date(post.created_at),
    }));

  posts.sort(
    (a, b) =>
      (b.created_at as unknown as number) - (a.created_at as unknown as number)
  );

  const [lastPostFromList] = posts;

  const lastPostResponse = await fetch(
    `${baseURL}${postsEndpoint}/${lastPostFromList.slug}`
  );
  const lastPost = (await lastPostResponse.json()) as Post;

  if (lastPost) {
    return { ...lastPost, created_at: new Date(lastPost.created_at) };
  }

  return null;
}

export default async function Home() {
  const lastPost = await getLastPost();

  if (!lastPost) {
    return null;
  }

  return (
    <article>
      <Text variant="sm" className="text-gray-500">
        {format(lastPost?.created_at, 'dd.MM.yyyy')} - Última Postagem...
      </Text>
      <Text as="h1" variant="3xl" className="w-full lg:w-[35rem] mt-2 mb-12">
        {lastPost.title}
      </Text>

      <div className="relative">
        <div
          className={`
          w-[calc(100%+5rem)] h-[5.5rem]
          absolute bottom-0 -left-10
          bg-[linear-gradient(180deg,rgba(249,250,251,0)_0%,#F9FAFB_100%)]
        `}
        />
        <Markdown
          value={lastPost.body}
          className="h-[59vh] overflow-hidden mb-6"
        />
      </div>

      <div className="flex items-center justify-end mt-9 mb-4">
        <Link href="/blog" className="py-2 px-3">
          <Text
            variant="xs"
            className="text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out"
          >
            Ver Outros Posts
          </Text>
        </Link>
        <Link
          href={`/blog/${lastPost.slug}`}
          className="py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-in-out rounded"
        >
          <Text variant="xs" className="font-bold text-gray-800">
            Continuar Lendo
          </Text>
        </Link>
      </div>
    </article>
  );
}
