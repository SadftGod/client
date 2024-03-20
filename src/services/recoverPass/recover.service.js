import axios from "axios";

const url = 'http://localhost:8000';


const recover = async(email)=>{
   return await axios.post(url+"/passrecover",{
      email: email
   })

}
const decypher = async(cypher)=>{
   return axios.post(url + "/setnewpass",{
      cypher:cypher
   })
}

const password = {
   recover,
   decypher
}

export default password
