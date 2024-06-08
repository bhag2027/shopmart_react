import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallShop = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }

    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img height="400px"src={value.image} class="card-img-top" alt="..."></img>
                                    
                                        <div class="card-body">
                                            <h5 class="card-title">{value.id}</h5>
                                            <p class="card-text">{value.title}</p>
                                            <p class="card-text">{value.price}</p>
                                            <p class="card-text">{value.category}</p>


                                        </div>
                                </div>
                            </div>
                            }
                           )}

                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default ViewallShop