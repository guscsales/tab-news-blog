import { Text } from 'thon-ui';

export default function MainFooter() {
  const linkClassName =
    'text-gray-500 hover:text-gray-800 transition-all duration-200ms ease-in-out';

  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-0 pt-4 border-t border-solid border-t-gray-200">
      <div className="flex flex-col">
        <Text className="text-gray-800 italic font-bold">Gus!</Text>
        <Text variant="xs" className="text-gray-500">
          gustavo@gsales.io - Salmo 27:14
        </Text>
      </div>
      <ul className="flex gap-2.5">
        <li>
          <a
            href="https://canal.gsales.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              YouTube
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/guscsales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              Twitter
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/guscsales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              LinkedIn
            </Text>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/guscsales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="xs" className={linkClassName}>
              Instagram
            </Text>
          </a>
        </li>
      </ul>
    </footer>
  );
}
