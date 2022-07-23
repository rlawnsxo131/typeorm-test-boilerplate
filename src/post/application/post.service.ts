import { Repository } from 'typeorm';
import Post from '../domain/post.entity';
import { IPostService } from '../domain/usecase';

export default class PostService implements IPostService {
  private postRepository: Repository<Post>;

  constructor(postRepository: Repository<Post>) {
    this.postRepository = postRepository;
  }

  createPost(
    title: string,
    shortDescription?: string | undefined,
  ): Promise<Post> {
    const post = Post.of(title, shortDescription);
    return this.postRepository.save(post);
  }

  getPostById(id: number): Promise<Post | null> {
    return this.postRepository.findOneBy({ id });
  }
}
