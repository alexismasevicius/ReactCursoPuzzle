import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  const { carrito } = useContext(EcommerceContext);
  return (
    <h1>
      Hola!!! Tenes tantos productos en tu carrito: {carrito.length}
      <div>
        <Link to={"/productos"}>Ir a la tienda </Link>
      </div>
      <br />
    </h1>
  );
};

export default HomeContainer;
