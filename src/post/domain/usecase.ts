import Post from './post.entity';

export interface IPostService {
  createPost(title: string, shortDescription?: string): Promise<Post>;
  getPostById(id: number): Promise<Post | null>;
}
