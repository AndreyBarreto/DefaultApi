import { uuid } from 'uuidv4';

interface IContacts {
    id: string;
    name: string;
    email: string;
    phone: string;
    category_id: string;
}
const contacts: [IContacts] = [
    {
        id: uuid(),
        name: 'dey',
        email: 'dey@hotmai.com',
        phone: '123',
        category_id: uuid(),

    }];

class ContactRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }
}

export default new ContactRepository();
