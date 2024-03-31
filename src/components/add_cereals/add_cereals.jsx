import React, {  useState } from "react";
import './dist/add_cereals.css'
import admin from "../../services/admin_services/admin.service";
import evalid from "../../validators/emailValidator";
import ivalid from "../../validators/imageValidator";

export default function AddCereals(props) {
   const [name, setName] = useState("")
   const [decription, setDecription] = useState("")
   const [image, setImage] = useState(undefined)

   const [adminError,setAdminError] = useState("")

   const clear = ()=>{
      setName('')
      setDecription('')
   }

   const allRed = ()=>{

      let nameInt = document.querySelector('#admin_name_cereals')
      let description = document.querySelector('#admin_decription_cereals')

      nameInt.style.borderBottom = '2px solid red'
      description.style.borderBottom = '2px solid red'

      nameInt.onclick = ()=>{
         nameInt.style.borderBottom = '2px solid #D9D9D9'
         description.style.borderBottom = '2px solid #D9D9D9'
         setName('')
      }
      description.onclick = ()=>{
         nameInt.style.borderBottom = '2px solid #D9D9D9'
         description.style.borderBottom = '2px solid #D9D9D9'
         setDecription('')
      }
   }

 

   const systemAddCereal = async()=>{
      try {
         if(evalid.nameValidator(name) === name){
            if(ivalid.imageValidator(image) === image){
               if(ivalid.descriptionValidator(decription) === decription){
                  const response = await admin.add_cereal(name,decription,image)
                  console.log(response.data.message);
                  setName('')
                  setDecription('')
                  setImage(undefined)
                  setAdminError('')
               }else{
                  setAdminError(ivalid.descriptionValidator(decription))
                  allRed()
               }  
            }else{
               setAdminError(ivalid.imageValidator(image))  
               allRed()
            }  
         }else{
            setAdminError(evalid.nameValidator(name))
            allRed()
         }
      } catch (error) {
         setAdminError("Request Error " + error)
      }
      
      } 
   return (
      <div className="add_cereals-block">
         <header className="add_cereals-title">Add Cereal</header>
         <div className="admin_alert">{adminError}</div>
         <main className="add_cereals-main">
            <div className="admin_fields_con">
               <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder="admin_name_cereal" id='admin_name_cereals' name='admin_name_cereals' className='adminInput' type="text" title='enter yours email' required />
               <label htmlFor="admin_name_cereals" className="adminLabel">Name/Title*</label>
            </div>
            <div className="admin_fields_con second_admin_con">
               <input value={decription} onChange={(e) => { setDecription(e.target.value) }} placeholder="admin_decription_cereal" id='admin_decription_cereals' name='admin_decription_cereals' className='adminInput' type="text" title='enter yours email' required />
               <label htmlFor="admin_decription_cereals" className="adminLabel">Decription*</label>
               <div className={decription.length>0?"description_counter":"description_counter_zero"}>{decription.length}</div>
            </div>
            <div className="addImg_cereal_con">
               <label className={image?"adminLabel_accepted":"adminLabel_accept"} htmlFor="admin_cereal_img">{image?image.name:"Додати фото(формати: png, jpeg, jpg)"}</label>
               <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" id="admin_cereal_img" name="admin_cereal_img" accept="image/png, image/jpeg" className="img_input"/>
            </div>
            <div className="admin_buttons_block">
               <button onClick={()=>{clear()}} className="admin_buttons admin_clear_cereal">Clear</button>
               <button onClick={()=>{systemAddCereal()}} className="admin_buttons admin_add_cereal">ADD</button>
            </div>
         </main>
      </div>
   )
}