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
    async findAll(orderBy = 'ASC') {

        const direction = orderBy.toUpperCase() == 'DESC' ? 'DESC' : 'ASC';

        const rows = await query(`
        SELECT * FROM contacts
        ORDER BY name ${direction}
        `, [])

        return rows
    }

    async findById(id: string) {
        const [row] = await query(`
        SELECT * FROM contacts
        WHERE id = $1
        `, [id])
        return row
    }

    delete(id: string) {
        return new Promise((resolve) => resolve(contacts.filter((contact) => contact.id !== id)));
    }

    async findByEmail(email: string) {
        const [row] = await query(`
        SELECT * FROM contacts
        WHERE email = $1
        `, [email])
        return row
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
