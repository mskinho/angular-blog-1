export interface Post {
    id: number;
    titlen: string;
    author: string;
    publish_date: string; // Date that post was published in YYYY-MM-DD format
    slug: string;         // Readable URL to use for individual posts
    description: string;  // Short description for blog post listing
    content: string;      // Full blog post content -- may contain markup
};
