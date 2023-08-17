import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import { filter ,PriceRange } from "../../data/Data"



const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <ul className="wrapper">
                {filter.map((filter,id)=>{
                   return(<li key={id}>{filter.title}</li>)
                })}
               </ul>
            </div>
            <div className='box'>
              <span>Price Range</span>
              <ul className="wrapper">
                {PriceRange.map((PriceRange,id)=>{
                   return(<li key={id}>{PriceRange.price}</li>)
                })}
               </ul>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
