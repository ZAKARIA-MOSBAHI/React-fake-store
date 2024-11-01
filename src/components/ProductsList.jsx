import  { useEffect , useState} from 'react'
import Product from './Product';
import Header from './Header/Header';

export default function ProductsList() {
    const [originalProductList , setoriginalProductList] = useState([]);
    const [tempList , setTempList ] = useState([]);
    const [categories , setCategories] = useState([]);


    const fetchproducts  = ()=>{
            fetch('https://fakestoreapi.com/products/')
                .then(res=>res.json())
                .then(json=> {setoriginalProductList(json) ; setTempList(json)})
        } 
    const fetchCategories = ()=>{
        fetch("https://fakestoreapi.com/products/categories") 
            .then (respone => respone.json())
            .then(json => setCategories(json) )
    }
    useEffect(()=>{
        fetchproducts();
        fetchCategories();
    } , [])
   
   const handleCategoryChange = (choosenCategory = null , searchvalue = null)=>{
    let newList = null;
    if(choosenCategory != null){
        if (choosenCategory === "all"){
            newList = originalProductList ; 
        }else{
            newList = originalProductList.filter((product) =>{
                return  product.category === choosenCategory 
            }) 
        } 
    } 
    else if (searchvalue != null){
        newList = originalProductList.filter((product)=>{
            return product.title.toLowerCase().includes(searchvalue.toLowerCase())
        })
    }
    setTempList(newList);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        let searchvalue = document.querySelector("#SearchBar").value ;
        handleCategoryChange(null , searchvalue) 
    }
    return (
      <>
          <Header categoryList={categories} handleCategoryChange={handleCategoryChange} handleSubmit={handleSubmit}/>
          <div className="container mx-auto">
              <div className="table-responsive" >
                  <table className="table table-striped" >
                      <thead>
                          <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Category</th>
                              <th>Price</th>
                              <th>Rating</th>
                          </tr>
                      </thead>
                      <tbody>
                      {tempList.length > 0 ? tempList.map((product) => {
                          return( 
                              <Product
                              key={product.id}
                              image={product.image}
                              title={product.title}
                              category={product.category}
                              price={product.price}
                              rate={product.rating.rate} 
                              /> )
                          ; 
                          }) : <tr><td colSpan={5}> No Product Found !</td></tr>}
  
                      </tbody>
                  </table>
              </div>   
          </div>
      </>
    )
   }
