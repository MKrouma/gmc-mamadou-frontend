import React, { useEffect, useState } from "react";



const App = () => {

 const [data, setData] = useState();// where to store the returned data

 const [error, setError] = useState(null);// where to store the coming errors

 useEffect(() => {

   function fetchData() {// the function to fetch data from the api

     fetch("https://hn.algolia.com/api/v1/search?query=redux")

       .then(res => res.json())

       .then(res => setData(res))

       .catch(err => setError(err));

   }



   fetchData();

 }, []);

 return <div />;

};

export default App;




function postData() {

    // the function to post data to the api

    fetch("https://jsonplaceholder.typicode.com/users", {

      method: "POST", //setting the method

      headers: {

        Accept: "application/json",

        "Content-Type": "application/json"

      },//setting the header

      body: JSON.stringify(user)//setting the body

    })

      .then(res => res.json())

      .then(res => setData(res))

      .catch(err => setError(err));

  }

