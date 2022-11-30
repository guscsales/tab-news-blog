export interface Post {
  slug: string;
  title: string;
  created_at: Date;
  body?: string;
  parent_id?: string;
}
