import PropTypes from 'prop-types';

import './iconSwitch.css';

// компонент иконки отображения товаров на странице:
const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <img
      className="icon-switch"
      src={icon}
      alt="icon switch"
      onClick={onSwitch}
    />
  );
};

// валидация пропсов:
IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
