import { Paitents } from './api/paitent';
import { Posts } from './api/posts';
import { Users } from './api/user';

export class Library {
  posts: Posts;
  users: Users;
  paitents :Paitents

  constructor(config: { apiKey?: string; baseUrl: string }) {
    this.posts = new Posts(config);
    this.users = new Users(config);
    this.paitents = new Paitents(config);
  }
}