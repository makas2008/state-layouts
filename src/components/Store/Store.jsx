import { useState } from 'react'; // хук для хранения состояния

import products from '../../data/products.json'; // данные о товарах в формате json
import viewListIcon from '../../assets/view_list.svg'; // иконка показа товаров списком
import viewModuleIcon from '../../assets/view_module.svg'; // иконка показа товаров модульной сеткой

import IconSwitch from '../IconSwitch/IconSwitch'; // компонент-иконка
import ListView from '../ListView/ListView'; // компонент-список с карточками ShopItem
import CardsView from '../CardsView/CardsView'; // компонент-сетка с карточками ShopCard

import './store.css';

// компонент, управляющий состоянием приложения:
const Store = () => {
  const [icon, setIcon] = useState(viewListIcon); // состояние отображаемой иконки

  const handler = () => {
    setIcon(icon === viewListIcon ? viewModuleIcon : viewListIcon);
  };

  return (
    <div className="store">
      <header className="store__header">
        <IconSwitch icon={icon} onSwitch={handler} />
      </header>
      <main className="store__main">
        {icon === viewListIcon ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </main>
    </div>
  );
};

export default Store;
