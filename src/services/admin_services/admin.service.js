import axios from "axios";

const url = 'http://localhost:8000';

const admin_compare = async (key)=>{
   try {
      const response = await axios.post(url + '/verify', {
         key: key,
      })
      return response 
   } catch (error) {
      console.log(error)
   }
}

const admin={
   admin_compare
}

export default admin