export interface Post {
  slug: string;
  title: string;
  created_at: Date;
  parent_id?: string;
}
