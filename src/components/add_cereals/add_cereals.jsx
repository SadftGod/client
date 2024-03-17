import React, { useState } from "react";
import './dist/add_cereals.css'

export default function AddCereals(props) {
   const [name, setName] = useState("")
   const [decription, setDecription] = useState("")
   const [image, setImage] = useState(undefined)


   const clear = ()=>{
      setName('')
      setDecription('')
   }

   const systemAddCereal = ()=>{
      console.log(name,decription,image)
   }
   return (
      <div className="add_cereals-block">
         <header className="add_cereals-title">Add Cereal</header>
         <main className="add_cereals-main">
            <div className="admin_fields_con">
               <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder="admin_name_cereal" id='admin_name_cereals' name='admin_name_cereals' className='adminInput' type="text" title='enter yours email' required />
               <label htmlFor="admin_name_cereals" className="adminLabel">Name/Title*</label>
            </div>
            <div className="admin_fields_con second_admin_con">
               <input value={decription} onChange={(e) => { setDecription(e.target.value) }} placeholder="admin_decription_cereal" id='admin_decription_cereals' name='admin_decription_cereals' className='adminInput' type="text" title='enter yours email' required />
               <label htmlFor="admin_decription_cereals" className="adminLabel">Decription*</label>
            </div>
            <div className="addImg_cereal_con">
               <label className={image?"adminLabel_accepted":"adminLabel_accept"} htmlFor="admin_cereal_img">{image?image.name:"Добавить изображение (форматы: png, jpeg, jpg)"}</label>
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