import axios from "axios";

const url = 'http://localhost:8000';

const admin_compare = async (key) => {
   try {
      const response = await axios.post(url + '/verify', {
         key: key,
      })
      return response
   } catch (error) {
      console.log(error)
   }
}


const add_cereal = async (name, description, image) => {
   try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image);

      const response = await axios.post(url + '/createCereal', formData, {
         headers: {
           'Content-Type': 'multipart/form-data'
         }
       });
      return response
   } catch (error) {
      if (error.response) {
         console.error('Error: ', error.response.data);
         return error.response.data;
      } else if (error.request) {
         console.error('input Error', error.request);
      } else {
         console.error('axios Error: ', error.message);
      }
   }
}

const admin = {
   admin_compare,
   add_cereal
}
export default admin