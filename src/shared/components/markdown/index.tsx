import { RenderMarkdown } from 'thon-ui';
import './markdown.css';

type Props = {
  value: string;
};

export default function Markdown({
  value,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  return <RenderMarkdown value={value} {...props} />;
}
