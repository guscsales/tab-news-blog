import { Text } from 'thon-ui';
import PostsListItem from '../../src/domains/posts/components/posts-list-item';

export default function BlogPage() {
  return (
    <article>
      <header>
        <Text variant="3xl lg:4xl" as="h1" className="mb-7 lg:mb-12">
          Blog
        </Text>
      </header>

      <ul aria-label="Posts" className="grid gap-6 w-full lg:w-[41.375rem]">
        <li>
          <PostsListItem
            post={{
              slug: 'any-slug',
              title:
                'Uma Boa Maneira de Organizar Suas Branches, Commits e Pull Requests',
              created_at: new Date(2022, 10, 24),
            }}
            isLarge
            headerComplement=" - Última Postagem..."
          />
        </li>
        <li>
          <PostsListItem
            post={{
              slug: 'any-slug-2',
              title: 'Vale a Pena Fazer Faculdade de Programação?',
              created_at: new Date(2022, 10, 24),
            }}
          />
        </li>
        <li>
          <PostsListItem
            post={{
              slug: 'any-slug-3',
              title: 'Vale a Pena Fazer Faculdade de Programação?',
              created_at: new Date(2022, 10, 24),
            }}
          />
        </li>
      </ul>
    </article>
  );
}
