import { Base } from './base';

export type uuid = string | undefined | null;
type Paitent = {
  id ?: uuid;
  phone: string;
  // email: string;
};

export class Paitents extends Base {

  // Create a new user
  async create(paitent: Paitent): Promise<Paitent> {
    return this.request(`/patients/`, {
      method: 'POST',
      body: JSON.stringify(paitent),
    });
  }

  async getById(paitentId: uuid): Promise<Paitent> {
    return this.request(`/patients/${paitentId}`);
  }

  async Search(): Promise<Paitent[]> {
    return this.request(`/patients/search`);
  }

  async update(paitentId: uuid, paitent: Paitent): Promise<Paitent> {
    return this.request<Paitent>(`/patients/${paitentId}`, {
      method: 'PUT',
      body: JSON.stringify(paitent),
    });
  }

  async delete(paitentId: uuid): Promise<void> {
    return this.request(`/patients/${paitentId}`, {
      method: 'DELETE',
    });
  }

}
