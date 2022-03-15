import { v4 as uuidv4, v4 } from 'uuid';
import query from '../../database';

interface ICategory {
    name: string;
}

class CategoryRepository {
    async findAll(orderBy = 'ASC') {

        const direction = orderBy.toUpperCase() == 'DESC' ? 'DESC' : 'ASC';

        const rows = await query(`
        SELECT * FROM categories
        ORDER BY name ${direction}
        `, [])

        return rows
    }



    async create({
        name
    }: ICategory) {
        const [row] = await query(`
        INSERT INTO categories(name)
        VALUES ($1)
        RETURNING *
        `, [name])
        return row
    }



}

export default new CategoryRepository();
