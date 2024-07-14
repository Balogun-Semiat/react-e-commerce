import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Ecommerce from './Ecommerce'
import Loader from './Loader'

const Homepage = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  
  return (
    <div>
     {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Ecommerce />
        </div>
      )}
    </div>
  )
}


export default Homepage