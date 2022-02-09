import { useState } from "react";
const Product = () =>{
    let [product, setProduct] = useState([]); 
    const addProduct = (event) => {
        event.preventDefault();
        let productObject = {
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            color: event.target.color.value,
            date: event.target.date.value,
        };
        console.log(productObject.name);
        console.log(productObject.description);
        console.log(productObject.price);
        console.log(productObject.color);
        console.log(productObject.date)
        
        let newProduct = [...product,productObject];
        setProduct(newProduct);
    };
    let deleteTodo = (indexToDelete) =>{
        let newComment = product.filter(function(val,index){
            if(indexToDelete == index){
                return false;
            }
            return true;
        });
        setProduct(newComment);
    };
    return(
        <div className="product">
            <h1>Products</h1>
            <form onSubmit={addProduct}>
            <input type="text" name="name" placeholder="Product Name"/>
            <input type="text" name="description" placeholder="Product Description"/>
            <br/>
            <div className="display">
                <label>Color</label><input type="color" name="color"/>
                
                <label>Date</label><input type="date" name="date"/> 
            </div>
            <br/>
            <input type="number" name="price" placeholder="Product Price"/>
                           <br/>
                <button className="btn">Add</button>
            </form>
            <div className="border">
            {product.map((val,index) =>{
                return(
                    <div className="object">
                        <li>Product Name : <span>{val.name}</span></li>
                        <li>Product Description:<span>{val.description}</span></li>
                        <li>Product Price  : <span>Rs. {val.price}</span></li>
                        <li>Product Color : <span>{val.color}</span></li>
                        <li>Product Date : <span>{val.date}</span></li>
                        <div className="display">
                        <button className="deleteBtn" onClick={()=>{
                            deleteTodo(index);
                        }}>Delete</button>
                        </div>
                    </div>
                );
            })}
            </div>
            
        </div>
    )
}
export default Product;