export interface RichTextChild{
  type: string;
  text: string;
}

export interface RichTextBlock{
  type: string;
  children: RichTextChild[];
}

export interface Programme{
  id: number;
  documentId: string;
  title: string;
  slug: string;
  country: string;
  duration: string;
  requirements: string;
  type: 'work' | 'travel' | 'internship';
  featured: boolean | null;
  description: RichTextBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage?: {
    url: string;
    alternativeText: string | null;
  }
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

export interface Application{
  firstName: string,
  lastName: string,
  email: string,
  phone: string | null,
  startDate: string,
  university: string,
  course: string,
  age: number,
  linkedinURL: string | null,
  statement: string,
  programme: string
}