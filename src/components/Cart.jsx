import "../styles/Cart.css";

function Cart() {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return (
    <div className="main__cart">
      <h2 className="main__cart__title">Panier</h2>
      <ul>
        <li>monstera : {monsteraPrice}€</li>
        <li>Lierre : {ivyPrice}€ </li>
        <li>Fleurs : {flowerPrice}€ </li>
      </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice}€
    </div>
  );
}

export default Cart;
