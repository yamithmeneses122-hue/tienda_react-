import { useMemo, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data/products";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemCount = useMemo(
    () => cart.reduce((total, product) => total + product.quantity, 0),
    [cart]
  );

  const total = useMemo(
    () => cart.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [cart]
  );

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((product) => product.id !== productId));
  };

  return (
    <>
      <Header itemCount={itemCount} onOpenCart={() => setIsCartOpen(true)} />

      <main className="min-h-[calc(100vh-140px)] bg-neutral-950 text-white">
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-3">
          <header className="md:col-span-2 lg:col-span-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Productos</h1>
            <p className="mt-2 max-w-2xl text-neutral-400">Explora nuestros productos y agrégalos al carrito.</p>
          </header>

          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </section>
      </main>

      <Cart isOpen={isCartOpen} cart={cart} total={total} itemCount={itemCount}
        onClose={() => setIsCartOpen(false)} onRemove={removeFromCart} />

      {isCartOpen && (
        <button type="button" onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/50" aria-label="Cerrar carrito" />
      )}

      <footer className="border-t border-neutral-800 bg-neutral-950 px-5 py-8 text-center text-sm text-neutral-500 sm:px-8">
        <p>&copy; 2026 Mi tienda. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
