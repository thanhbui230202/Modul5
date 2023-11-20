import axios from 'axios';
export const getAll = async () =>{
    try {
        let temp = await axios.get('http://localhost:8080/book')
        console.log(temp);
        return temp.data
    } catch (error) {
        
    }
}
export const getDataByID = async (id) =>{
    try {
        let temp = await axios.get(`http://localhost:8080/book/${id}`)
        console.log(temp);
        return temp.data
    } catch (error) {
        
    }
}
export const save = async (values) =>{
    try {
        let temp = await axios.post('http://localhost:8080/book',values)
        console.log(temp);
        return temp.status;
    } catch (error) {
        
    }
}
export const update = async (id, values) => {
    try {
        let temp = await axios.put(`http://localhost:8080/book/${id}`, values);
        console.log(temp);
        return temp.status;
    } catch (error) {
        console.error(error);
    }
}
export const deleteByID = async (id) => {
    try {
        let temp = await axios.delete(`http://localhost:8080/book/${id}`);
        console.log(temp);
        return temp.data;
    } catch (error) {
        console.error(error);
    }
}

