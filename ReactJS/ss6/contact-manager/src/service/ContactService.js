import axios from 'axios';
export const getAll = async () =>{
    try {
        let temp = await axios.get('http://localhost:8080/contacts')
        console.log(temp);
        return temp.data
    } catch (error) {
        
    }
}
export const save = async (values) =>{
    try {
        let temp = await axios.post('http://localhost:8080/contacts',values)
        console.log(temp);
        return temp.status;
    } catch (error) {
        
    }
}