import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/TestingSlice";
import { addToCart } from "../redux/proSlice"

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.app);
  // const {cart}=useSelector((state)=>state.cart)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]); 

  const handleAdd=(result)=>{
    dispatch(addToCart(result))
  }

  if (loading) {
    return (
      <div className="bodySpinner">
    <div className="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </div>
    );
  }
  if (error) {
    return <p>something went wrong!</p>;
  }
 
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((result) => {
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
                      <button  style={{ backgroundColor: "#e3f2fd" }} onClick={()=>handleAdd(result)} className="btn w-100">
                    Add To Cart
                  </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;