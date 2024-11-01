import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";

export default function Header({handleSubmit , handleCategoryChange , categoryList}) {
  
  return (

    <header>
         <SearchBar handleSubmit={handleSubmit}/>
         <CategoryBar categories={categoryList} handleCategoryChange ={handleCategoryChange}/>
    </header>
    
  )
}
