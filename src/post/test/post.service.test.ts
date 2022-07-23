import 'jest';
import { DataSource, Repository } from 'typeorm';
import Database from '../../database/database';
import initializeEnvironment from '../../environment';
import PostService from '../application/post.service';
import Post from '../domain/post.entity';

describe('postService Test', () => {
  let dataSource: DataSource;
  let postRepository: Repository<Post>;
  let postService: PostService;

  beforeAll(async () => {
    initializeEnvironment();
    await Database.initialize();
    dataSource = Database.getDataSource();
    postRepository = dataSource.getRepository(Post);
    postService = new PostService(postRepository);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('findOneById', async () => {
    const id = 1;
    const post = await postService.getPostById(id);
    expect(post).toEqual(null);
  });
});
