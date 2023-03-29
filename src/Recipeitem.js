import React from "react";

let RecipeItem =({name,image,ingredientLines})=>{

  return(
    
    <div className='card py-2 text-center'>
      <img src={image} className='img-fluid w-50 mx-auto rounded-circle'/>
      <div className='card-body'>
      <h5>{name}</h5>
      </div>
      <ul className='list-group list-group-flush'>
          {
           ingredientLines.map(eva=>
                  <li className='list-group-item'>
                      {eva}
                  </li>)
          }
      </ul>
      </div>
     
  )
}

export default RecipeItem