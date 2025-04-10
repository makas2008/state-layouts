import PropTypes from 'prop-types';

import ShopCard from '../ShopCard/ShopCard';
import './cardsView.css';

// компонент-родитель(ul) для карточек ShopCard(li) <- модульная сетка:
const CardsView = ({ cards }) => {
  return (
    <ul className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} data={card} /> // ключ не передается в пропсах!!!
      ))}
    </ul>
  );
};

// валидация пропсов:
CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardsView;
