import Posts from "../../../data.json"

export default function handlerId(req, res) {
    const { method, cookies, query } = req 
    
    console.log(method);
    console.log(cookies);
    console.log(query);
    const { id } = query
    console.log(id);
}