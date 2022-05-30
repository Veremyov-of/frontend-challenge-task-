import axios from 'axios';
export default class CatsInfo {
    static async getAll(page) {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`);
        return response.data;
    }
}