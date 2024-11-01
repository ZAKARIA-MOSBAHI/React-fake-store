import React from 'react'

export default function CategoryBar({categories , handleCategoryChange}) {
  return (
  <>
  
   <nav className="navbar navbar-expand navbar-dark bg-dark my-2">
    <ul className="nav navbar-nav w-100 justify-content-around" >
      <li className="nav-item">
        <button className="nav-link text-light" href="/#"
         key={"all"} onClick={()=>handleCategoryChange("all")}
         style={{textTransform : "capitalize"}}>all</button>
      </li>
        { 
        categories.map( (category )=> {
            return (
            <li className="nav-item" key={category}>
                <button className="nav-link text-light"  href="/#"
                 onClick={()=>handleCategoryChange(category)} 
                 style={{textTransform : "capitalize"}}>{category}</button>
            </li>)
        })}
        
        
    </ul>
   </nav>
   
    </>
  );
}
