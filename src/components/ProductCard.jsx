import { useState } from "react";

const formatPrice = (price) => "$" + price.toLocaleString("es-CO");

export default function ProductCard({ product, onAdd }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 transition duration-200 hover:-translate-y-1 hover:border-neutral-600">
      <button type="button" className="block w-full overflow-hidden bg-transparent p-0"
        onClick={() => setShowDescription((visible) => !visible)}
        aria-expanded={showDescription}
        aria-label={(showDescription ? "Ocultar" : "Mostrar") + " descripción de " + product.name}>
        <img src={product.image} alt={product.alt}
          className="block h-64 w-full object-cover transition duration-300 hover:scale-[1.03]" />
      </button>

      <section className="p-5">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        {showDescription && (
          <p className="pt-2 text-sm leading-6 text-neutral-400">{product.description}</p>
        )}
        <p className="py-4 text-lg font-bold text-white">{formatPrice(product.price)}</p>
        <button type="button" onClick={() => onAdd(product)}
          className="w-full rounded-lg border border-white bg-white px-4 py-3 font-semibold text-neutral-950 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900">
          Agregar al carrito
        </button>
      </section>
    </article>
  );
}
