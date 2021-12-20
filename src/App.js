import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Clothes from "./Components/Clothes/Clothes";
import CartProvider from "./store/CartProvider";
import OrderProvider from "./store/OrderProvider";

import CartButtonProvider from "./store/CartButtonProvider";

function App() {
  const h = <h2>Hello</h2>;
  return (
    <>
      <CartProvider>
        <CartButtonProvider>
            <OrderProvider>

          <Header />
          </OrderProvider>
        </CartButtonProvider>

        <main>
          <Hero />
        </main>
        <Clothes />
      </CartProvider>

    </>
  );
}

export default App;
