import { Product } from '../../../../models';
import './product_card.sass';

function ProductCard({ product }: { product: Product }) {
  return (
    <div  data-testid="product-card" className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-card__img"
      />
      <header className="product-card__header">
        <h6>{product.title}</h6>
        <p>{product.category}</p>
      </header>
      <footer className="product-card__footer">
        <h3>${product.price}</h3>
      </footer>
    </div>
  );
}

export default ProductCard;
