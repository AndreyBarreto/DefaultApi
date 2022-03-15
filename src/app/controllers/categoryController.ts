import { Request, Response } from 'express';
import CategoryRepository from '../repositories/CategoryRepository';


class CategoryController {
    async index(request: Request, response: Response) {
        const orderBy: any = request.query.orderBy
        const contacts = await CategoryRepository.findAll(orderBy);
        response.json(contacts);
        // list all registers
    }


    async store(request: Request, response: Response) {
        const {
            name
        } = request.body;

        if (!name) {
            return response.status(400).json({ error: 'Name is required' });
        }

        const contact = await CategoryRepository.create({
            name
        });
        response.json(contact);
    }
}

// Singleton
export default new CategoryController();
