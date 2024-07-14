import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  // const [productId, setProductId] = useState("")
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [ProductDescription, setProductDescription] = useState('');
  const [ProductPrice, setProductPrice] = useState('');
  const [ProductCategory, setProductCategory] = useState('');
  const [ProductImage, setProductImage] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = async (ev) => {
    ev.preventDefault();
    try {

      const endpoint = "http://localhost:5000/All-Products"

      const newProduct = {
        id: id,
        title: title,
        ProductPrice: ProductPrice,
        ProductDescription: ProductDescription,
        ProductCategory: ProductCategory,
        ProductImage: ProductImage
      }
      console.log("Product Info : ", newProduct);

       const response = await axios.post(endpoint, newProduct);

      // const formData = new FormData();
      // formData.append('id', id);
      // formData.append('title', title);
      // formData.append('ProductPrice', ProductPrice);
      // formData.append('ProductDescription', ProductDescription);
      // formData.append('ProductCategory', ProductCategory);
      // formData.append('ProductImage', ProductImage);

      // const response = await axios.post("http://localhost:5000/All-Products", formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // });
 
      console.log("Response Data : ", response.data);
      toast.success("Product Uploaded Successfully");
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      alert("Error Posting Product");
      console.log("Error");
    }
  };
    

  const handleImageUpload = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      const result = reader.result;
      setProductImage(result);
      console.log(result);
    }
    reader.readAsDataURL(file);
 };

  return (
        <div className=' grid h-fit content-center '> 
        <form action="" className='w-7/12 mx-auto mt-5 bg-slate-700 grid shadow-lg p-5'>
        <h1 className='text-center text-3xl text-white font-bold m-3'>Sign Up form</h1>
            {/* <input onChange={(ev)=> setProductId(ev.target.value)}  className=' p-2 mb-11 border border-black bg-white' type="number" placeholder='Enter product ID'/> */}
            <input onChange={(ev) => setId(ev.target.value)} className=' p-2 mb-8 border border-black bg-white' type="text" placeholder='Enter product title' />
            <input onChange={(ev) => setTitle(ev.target.value)} className=' p-2 mb-8 border border-black bg-white' type="text" placeholder='Enter product title' />
            <input onChange={(ev)=>setProductPrice(ev.target.value)} className=' p-2 mb-8 border border-black bg-white' type="text" placeholder='Enter product price'/> 
            <input onChange={(ev)=>setProductDescription(ev.target.value)} className=' p-2 mb-8 border border-black bg-white' type="text" placeholder='Enter product description'/> 
            <input onChange={(ev)=>setProductCategory(ev.target.value)} className=' p-2 mb-8 border border-black bg-white' type="text" placeholder='Enter product Category'/>

            <div className="flex items-center justify-between gap-3"> 
            <input onChange={handleImageUpload} className=' p-2 mb-8 border border-black bg-white' type="file" /> 

            {ProductImage ? (
            <div className="w-10 h-10 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src={ProductImage}
                alt="ProductImage"
              />
            </div>
            
          ) : null}
          </div>
          
            <button onChange={handleAddProduct} 
            className='w-fit p-2 text-center rounded-lg border border-black bg-white'>Add Product</button>

            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition="Bounce"
          />
        </form>
    </div>

  )
}

export default UpdateProduct;