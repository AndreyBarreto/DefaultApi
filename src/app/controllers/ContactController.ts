import { Request, Response } from 'express';
import ContactsRepository from '../repositories/ContactsRepository';

class ContactController {
    async index(request: Request, response: Response) {
        const orderBy: any = request.query.orderBy
        const contacts = await ContactsRepository.findAll(orderBy);
        response.json(contacts);
        // list all registers
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const contact = await ContactsRepository.findById(id);

        if (!contact) {
            return response.status(404).json({ error: 'User not found' });
        }
        response.json(contact);
        // get one register
    }

    async store(request: Request, response: Response) {
        const {
            name, email, phone, category_id,
        } = request.body;
        const contactExists = await ContactsRepository.findByEmail(email);

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        if (contactExists) {
            return response.status(400).json({ error: 'This e-mail is already in use' });
        }
        const contact = await ContactsRepository.create({
            name, email, phone, category_id,
        });
        response.json(contact);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const {
            name, email, phone, category_id,
        } = request.body;

        const contactExists = await ContactsRepository.findById(id);
        const contactByEmail = await ContactsRepository.findByEmail(email);

        if (!contactExists) {
            return response.status(400).json({ error: 'User not found' });
        }

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        if (contactByEmail && contactByEmail.id !== id) {
            return response.status(400).json({ error: 'This e-mail is already in use' });
        }
        const contact = await ContactsRepository.update(id, {
            name,
            email,
            phone,
            category_id,
        });
        response.json(contact);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await ContactsRepository.delete(id);

        response.sendStatus(204);
    }
}

// Singleton
export default new ContactController();
