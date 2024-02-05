import { useState } from 'react';
import { ProductsContainer } from './components';
import './home.sass';

function Home() {
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
  const [isloadProductsInUI, setIsloadProductsInUI] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);

  const getNewTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setCurrTime(newTime);
    setIsloadProductsInUI(true);
    setReload(!reload);
  };

  return (
    <main data-testid="home" className="home-layout">
      <section className="filter-cont">
        <span className="heading text-navy-500">(Time: {currTime})</span>
        <div>
          <button
            title="Reload products and get current time"
            type="button"
            onClick={getNewTime}
            className="button-normal"
          >
            Load products, and get the current time.
          </button>
        </div>
      </section>
      {isloadProductsInUI && <ProductsContainer reload={reload} setReload={setReload}/>}
    </main>
  );
}

export default Home;
