import { Base } from './base';

type Post = {
  // id: number;
  title: string;
  body: string;
  userId: number;
};

export class Posts extends Base {

  async createPost(post: Post): Promise<Post> {
    return this.request(`/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
    });
  }

  async getById(postId: number): Promise<Post> {
    return this.request(`/posts/${postId}`);
  }

  async SearchPosts(): Promise<Post[]> {
    return this.request(`/posts`);
  }

  async deleteUser(postId: number): Promise<void> {
    return this.request(`/posts/${postId}`, {
      method: 'DELETE',
    });
  }

}