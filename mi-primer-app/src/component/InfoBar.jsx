const InfoBarComponent = ({ carro }) => {
  return (
    <div className="bg-white py-4">Elementos en el carrito:{carro.length}</div>
  );
};

export default InfoBarComponent;
