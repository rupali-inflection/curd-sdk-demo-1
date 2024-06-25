import { Base } from './base';

type User = {
  id ?: number;
  name: string;
  email: string;
};

export class Users extends Base {

  // Create a new user
  async createUser(user: User): Promise<User> {
    return this.request(`/users`, {
      method: 'POST',
      body: JSON.stringify(user),
    });
  }

  async getById(userId: number): Promise<User> {
    return this.request(`/users/${userId}`);
  }

  async searchUsers(): Promise<User[]> {
    return this.request(`/users/search`);
  }

  // Update a user by ID
  async updateUser(userId: number, user: User): Promise<User> {
    return this.request<User>(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  }

  // Delete a user by ID
  async deleteUser(userId: number): Promise<void> {
    return this.request(`/users/${userId}`, {
      method: 'DELETE',
    });
  }
}

// export default UserService;