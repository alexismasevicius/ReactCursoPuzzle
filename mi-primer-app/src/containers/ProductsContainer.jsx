import { useEffect, useState } from "react";
import CardComponent from "../component/CardComponent";
import InfoBarComponent from "../component/InfoBar";

const ProductsContainer = () => {
  const [carrito, setCarrito] = useState([]);
  //crea un array de productocon useState
  //callback a setProdcts que solo recibe l
  const [products, setProducts] = useState([]);
  //setPro

  useEffect(async () => {
    let data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
    );
    let response = await data.json();
    setProducts(response.results);
    //Para cuando se esta para montar un componente
    //llamada a una api
    //const data = [
    //  {
    //    id: 1,
    //   name: "shoes",
    //   img: "https://img.lalr.co/cms/2017/12/05165632/Zapatos.jpg",
    // },
    // {
    //  id: 2,
    //  name: "shirts",
    //  img: "https://img.lalr.co/cms/2017/12/05165632/Zapatos.jpg",
    //  },
    //  {
    //   id: 3,
    //   name: "books",
    //   img: "https://img.lalr.co/cms/2017/12/05165632/Zapatos.jpg",
    // },
    // ];
    // setProducts(data);

    return () => {
      console.log("Se esta por morir el componente");
    };
  }, []);

  const AgregarAlCarrito = (event, product) => {
    carrito.push(product);
    setCarrito([...carrito]);
    console.log(carrito);
  };

  //console.log(products);

  return (
    <div className="container bg-warning">
      <InfoBarComponent carro={carrito} />
      <div className="row px-2 py-2">
        {products.map((element) => {
          return (
            <CardComponent
              product={element}
              AgregarAlCarrito={AgregarAlCarrito}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
