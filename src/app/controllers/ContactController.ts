import { Request, Response } from 'express';

class ContactController {
  index(request:Request, response:Response) {
    response.send('Send From contact Controller');
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
