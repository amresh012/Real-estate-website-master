import React, { useEffect, useState } from "react"
import { featured , list } from "../../data/Data"

const FeaturedCard = () => {
  const  [selectedFilters , setselectedFilters] = useState([]);
  const [filterdItems, setfilterdItems] = useState(list)
  let filter = list.type;
  
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
