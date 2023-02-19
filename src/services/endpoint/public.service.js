import axios from 'axios';

class Products {
    async lists(queryString = '') {
        return await axios.get('https://dummyjson.com/products' + queryString);
    }
}

export default {
    Products: new Products()
}