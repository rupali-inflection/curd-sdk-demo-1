import { Base } from './base';

type Paitent = {
  // id: number;
  phone: string;
  email: string;
  
};

export class Paitents extends Base {

  // Create a new user
  async createUser(paitent: Paitent): Promise<Paitent> {
    return this.request(`/patients/`, {
      method: 'POST',
      body: JSON.stringify(paitent),
    });
  }

  async getById(paitentId: number): Promise<Paitent> {
    return this.request(`/patients/${paitentId}`);
  }

}
