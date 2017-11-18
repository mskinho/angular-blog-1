export interface BlogComment {
    id?: number;
    postId?: number;
    parent_id?: number|null; // Parent comment for replies, is `null` if top-level comment
    user: string;           // Name of commenter
    date: string;           // Date of comment in YYYY-MM-DD format
    content: string;        // Comment content
};
