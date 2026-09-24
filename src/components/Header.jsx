export default function Header({ itemCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-800 bg-neutral-950 px-5 py-4 text-white sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between" aria-label="Navegación principal">
        <a href="/" className="text-xl font-bold tracking-tight" onClick={(event) => event.preventDefault()}>
          Mi tienda
        </a>
        <button type="button" onClick={onOpenCart}
          className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-semibold transition hover:border-neutral-600 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={"Abrir carrito. " + itemCount + " productos"}>
          <span aria-hidden="true">🛒</span>
          <span>Carrito</span>
          <span className="text-neutral-400">({itemCount})</span>
        </button>
      </nav>
    </header>
  );
}
