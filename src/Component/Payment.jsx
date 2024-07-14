import React from 'react';
import {PaystackButton} from "react-paystack"
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_c5617a9b7c36766d1ac90bf2f3a2dbd28f97aa12',
  };
  
  function MakePayment() {
    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
      <div className="App">
        <PaystackButton
         {...componentProps} 
         className="py-2 w-full bg-slate-800 text-white text-center mt-4"/>
         
      </div>
    );
  }
  
  export default MakePayment;