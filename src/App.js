import React, {useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const[data,setData]=useState([])
  const getNews=()=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=79b68fc393594fdcb2f4de9e4ec73c31')
    .then((response)=>{
      //console.log(response);
      setData(response.data.articles)
    })
  }
  useEffect(() => {
    getNews();
  }, []);
  return(
  <>
  <div className="container my-3">
        <div className="row">
          {
            data.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Main</a>
                    </div>
                  </div>
                </div>
                );
              })
            }
          </div>
        </div>
  </>
  ); 
}

export default App