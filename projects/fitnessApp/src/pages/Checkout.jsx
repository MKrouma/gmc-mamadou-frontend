import React, {useState} from 'react'
import { saveShippingAddress } from '../services/shippingService';

const emptyAddress = {
    city: "",
    country: "",
};

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED"
}

const Checkout = ({ cart, emptyCart }) => {
    const [address, setAddress] = useState(emptyAddress);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [saveError, setSaveError] = useState(null);
    const [touched, setTouched] = useState({});


    // Derived states
    const errors = getErrors(address)
    const isValid = Object.keys(errors).length === 0

    
    function handleChange(e) {
      console.log("Hey i'm here")

      setAddress((currAddress) => {
        const result = {
          ...currAddress, [e.target.id]: e.target.value
        }
        console.log("Result : ", result)
        return result
      })
    }
  
    function handleBlur(event) {
      setTouched((curr) => {
        return {...curr, [event.target.id]: true}
      })
    }
  
    async function handleSubmit(event) {
      event.preventDefault()
      setStatus(STATUS.SUBMITTING)

      if (isValid) {
        try {
          await saveShippingAddress(address)
          emptyCart()
          setStatus(STATUS.COMPLETED)
        } catch (e) {
          setSaveError(e)
          setStatus(STATUS.SUBMITTED)
        }
        console.log('submitted')
      } else {
        setStatus(STATUS.SUBMITTED)
      } 
    }

    function getErrors(address) {
      const results = {}
      if (!address.city) results.city = "City is required"
      if (!address.country) results.country = "Country is required"
      return results
    }



    if (saveError) throw saveError;
    if (status === STATUS.COMPLETED) {
      return <h1>Thanks for shopping!</h1>
    }
  
    return (
      <>
        <h1>Shipping Info</h1>
        {!isValid && status === STATUS.SUBMITTED && (
          <div role='alert'>
            <p>Please fix the following errors:</p>
            <ul>
              {Object.keys(errors).map(key => (
                <li key={key}>{errors[key]}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="city">City</label>
            <br />
            <input
              id="city"
              type="text"
              value={address.city}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <p role='alert'>
              {(touched.city || status === STATUS.SUBMITTED) && errors.city}
            </p>
          </div>
  
          <div>
            <label htmlFor="country">Country</label>
            <br />
            <select
              id="country"
              value={address.country}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="China">China</option>
              <option value="India">India</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="USA">USA</option>
            </select>
            <p role='alert'>
              {(touched.country || status === STATUS.SUBMITTED) && errors.country}
            </p>
          </div>
  
          <div>
            <input
              type="submit"
              className="btn btn-primary"
              value="Save Shipping Info"
              disabled={status === STATUS.SUBMITTING}
            />
          </div>
        </form>
      </>
    );
}

export default Checkout
