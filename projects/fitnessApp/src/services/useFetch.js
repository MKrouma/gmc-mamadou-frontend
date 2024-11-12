import { useState, useEffect } from "react"

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url)
        
        if (response.ok) {
            const json = await response.json()
            setData(json)

            console.log("Response fetching data : ", json)
        } 

        else if (response.status === 404) {
            console.log("404 error")
        }
        
        else {
            throw response
        }
      } 
      
      catch (err) {
        setError(err)
      } 
      
      finally {
        setLoading(false)
      }
      
    }

    init()
  }, [url])

  return {data, error, loading}
}