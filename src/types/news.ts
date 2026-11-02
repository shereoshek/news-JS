export enum NewsCategory {
    Business = 'business',
    Entertainment = 'entertainment',
    General = 'general',
    Health = 'health',
    Science = 'science',
    Sports = 'sports',
    Technology = 'technology',
}

export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: 'ok';
    totalResults: number;
    articles: Article[];
}

export interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: NewsCategory;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: 'ok';
    sources: NewsSource[];
}
