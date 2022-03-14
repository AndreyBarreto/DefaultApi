import { v4 as uuidv4, v4 } from 'uuid';
import query from '../../database';

interface IContacts {
    id?: string;
    name: string;
    email: string;
    phone: string;
    category_id: string;
}
const contacts: [IContacts] = [
    {
        id: uuidv4(),
        name: 'dey',
        email: 'dey@hotmai.com',
        phone: '123',
        category_id: uuidv4(),

    }];

class ContactRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }

    findById(id: string) {
        return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
    }

    delete(id: string) {
        return new Promise((resolve) => resolve(contacts.filter((contact) => contact.id !== id)));
    }

    findByEmail(email: string) {
        return new Promise<IContacts | undefined>((resolve) => resolve(contacts.find((contact) => contact.email === email)));
    }

    async create({
        name, email, phone, category_id,
    }: IContacts) {
        const [row] = await query(`
        INSERT INTO contacts(name,email,phone)
        VALUES ($1,$2,$3)
        RETURNING *
        `, [name, email, phone])
        return row
    }

    update(id: string, {
        name, email, phone, category_id,
    }: IContacts) {
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id,
            };
            const teste = contacts.map((contact) => (
                contact.id === id ? updatedContact : contact
            ));
            teste;
            resolve(updatedContact);
        });
    }
}

export default new ContactRepository();
