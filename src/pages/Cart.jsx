import { useSelector,useDispatch } from "react-redux"
import { removeFromCart } from "../redux/proSlice";
import { Link } from "react-router-dom";
const Cart = () => {
    const dispatch =useDispatch();
    const products=useSelector((state)=>state.cart)
    const handleRemove=(result)=>{
        dispatch(removeFromCart(result))
      }
  return (
    <div>
        <div className="container">
        <Link style={{textAlign:"center"}} to="/">Back To Home</Link>

        <div className="row">
          {products.map((result) => {
            return (
              <div className="col-lg-4" key={result.id}>
                <div className="p-4">
                  <div className="card text-bg-secondary mb-3" style={{border:"2px dotted #e3f2fd"}}>
                    <div className="card-header"  style={{ backgroundColor: "#e3f2fd" }}>{result.name}</div>
                    <div className="card-body">
                      <h5 className="card-title">{result.username}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title
                      </p>
                      <button  style={{ backgroundColor: "#e3f2fd" }} onClick={()=>handleRemove(result.id)} className="btn w-100">
                    Remove From Cart
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart