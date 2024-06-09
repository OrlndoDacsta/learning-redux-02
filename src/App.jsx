import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthProduct } from "./redux/slices/productSlices";

function App() {
  // const [products, setProducts] = useState([]);
  // const fetchProduct = async () => {
  //   const res = await axios('https://fakestoreapi.com/products');
  //   const data = res.data;
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
