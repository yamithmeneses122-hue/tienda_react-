const formatPrice = (price) => "$" + price.toLocaleString("es-CO");

export default function Cart({ isOpen, cart, total, itemCount, onClose, onRemove }) {
  const handlePurchase = () => {
    if (cart.length === 0) return;
    window.alert("¡Gracias por tu compra!");
  };

  return (
    <aside aria-labelledby="titulo-carrito" aria-hidden={!isOpen}
      className={"fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-neutral-800 bg-neutral-900 p-6 text-white shadow-2xl transition-transform duration-300 " + (isOpen ? "translate-x-0" : "translate-x-full")}>
      <header className="flex items-center justify-between border-b border-neutral-800 pb-5">
        <section>
          <h2 id="titulo-carrito" className="text-xl font-bold">Carrito</h2>
          <p className="mt-1 text-sm text-neutral-400">{itemCount} producto(s)</p>
        </section>
        <button type="button" onClick={onClose}
          className="rounded-md px-2 text-3xl leading-none text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Cerrar carrito">×</button>
      </header>

      <ul className="flex flex-1 flex-col gap-4 overflow-y-auto py-6" aria-live="polite">
        {cart.length === 0 ? (
          <li className="py-8 text-center text-neutral-500">Tu carrito está vacío.</li>
        ) : (
          cart.map((product) => (
            <li key={product.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-neutral-800 pb-4">
              <section>
                <h3 className="text-sm font-medium text-neutral-200">{product.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">Cantidad: {product.quantity}</p>
              </section>
              <p className="text-sm text-neutral-300">{formatPrice(product.price * product.quantity)}</p>
              <button type="button" onClick={() => onRemove(product.id)}
                className="text-sm text-neutral-500 hover:text-white focus:outline-none focus:underline"
                aria-label={"Eliminar " + product.name + " del carrito"}>Eliminar</button>
            </li>
          ))
        )}
      </ul>

      <footer className="border-t border-neutral-800 pt-5">
        <section className="mb-4 flex items-center justify-between text-neutral-400">
          <p>Total</p>
          <strong className="text-lg text-white">{formatPrice(total)}</strong>
        </section>
        <button type="button" onClick={handlePurchase} disabled={cart.length === 0}
          className="w-full rounded-lg border border-white bg-white px-4 py-3 font-semibold text-neutral-950 transition hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:border-neutral-700 disabled:bg-neutral-800 disabled:text-neutral-500">
          Comprar
        </button>
      </footer>
    </aside>
  );
}
