import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePage() {

const navigate = useNavigate();
const [newProduct, setNewProduct] = useState({
  name: "",
  price: "",
  stock: "",
  
  imageUrl: "",
 description: "",

});

console.log("New Product State:", newProduct);  
  const submitProduct = async (e) => {
    e.preventDefault();
   
    const serializeData = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      imageUrl: newProduct.imageUrl,
      description: newProduct.description,
    };
     
       try {
      //Create a fetch request method
      const response = await fetch("http://localhost:9000/api/products", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),

        })
        if (response.ok) {
      
        const data = response.json();
        console.log("Product Created Successfully!");
        return data.product;
        navigate("/");
        }
      } 
     
     
     catch(error){
      console.error("Error creating product:", error);
     }
    


  };
  
  return (
    <div className="w-full  h-screen  ">
      <div className=' border-blue-400 p-6 max-w-xl mx-auto '>
         <h2 className="text-white font-bold ">Create New Product</h2>

         
         <form
         onSubmit ={submitProduct} className="dark:bg-gray-950 p-4 rounded border border-gray-500/45  ">

          <div className='w-full mb-2 '>
            <input 
            value={newProduct.name}
            onChange={(e)=> setNewProduct({...newProduct, name: e.target.value})}
            type="text" 
            id='name' 
            placeholder='Enter product name'
            className=' border w-full px-4 py-2 rounded'
             />
          </div>

          <div className='w-full mb-2'>
            <input
            value={newProduct.price}
            onChange={(e)=> setNewProduct({...newProduct, price: e.target.value})}
             type="number" id='price' placeholder='Enter product price' 
            className=' border w-full px-4 py-2 rounded'
            min={0}
            
            />
          </div>
          <div className='w-full mb-2 '>
            <input 
            value={newProduct.imageUrl}
            onChange={(e)=> setNewProduct({...newProduct, imageUrl: e.target.value})}
            type="url" 
            id='imageUrl' 
            placeholder='Enter image'
            className=' border w-full px-4 py-2 rounded'
             />
          </div>

          <div className='w-full mb-2 '>
            <input 
            value={newProduct.productName}
            onChange={(e)=> setNewProduct({...newProduct, productName: e.target.value})}
            type="text" 
            id='productName' 
            placeholder='Enter product name'
            className=' border border-gray w-full px-4 py-2 rounded'
             />
          </div>

          <div className='w-full mb-2 '>
            <input 
            value={newProduct.stock}
            onChange={(e)=> setNewProduct({...newProduct, stock: e.target.value})}

            type="number" 
            id='stock' 
            placeholder='Enter product stock'
            className=' border w-full px-4 py-2 rounded'
             min={0}
             />
          </div>

          <textarea className="mb-2 w-full border border-gray-500/25  outline-none px-4" 
          placeholder='Enter product description'
            type="text"
            id='description'
            value={newProduct.description}
            onChange={(e)=> setNewProduct({...newProduct, description: e.target.value})}
             
          rows={5}
          >
          </textarea>

          <button type="submit" 
          className="border px-4 py-2 rounded bg-green-600 shadow-lg font-bold hover:bg-green-800 cursor-pointer">
            Create Product
          </button>
         </form>
      </div>

    </div>
  )
}

export default CreatePage