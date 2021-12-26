import { Request, Response } from 'express';
import ContactsRepository from '../repositories/ContactsRepository';

class ContactController {
  async index(request:Request, response:Response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
    // list all registers
  }

  show() {
    // get one register
  }

  store() {
    // create new register
  }

  update() {
    // edit a register
  }

  delete() {
    // delete a register
  }
}

// Singleton
export default new ContactController();
