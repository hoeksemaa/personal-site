import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  [key: string]: string;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

export function getContentList(type: 'projects' | 'blog'): ContentMeta[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  return files
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      return { slug, ...data } as ContentMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getContentBySlug(type: 'projects' | 'blog', slug: string): ContentItem | null {
  const filePath = path.join(contentDir, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    meta: { slug, ...data } as ContentMeta,
    content,
  };
}
