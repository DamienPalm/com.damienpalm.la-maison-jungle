import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <>
      <header className="header">
        <Banner />
      </header>
      <main className="main">
        <Cart />
        <ShoppingList />
      </main>
    </>
  );
}

export default App;
