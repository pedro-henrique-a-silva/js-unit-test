/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
  const consumption = [];

  const fetchMenu = () => object;

  const order = (prod) => {
    if (!object.food[prod] && !object.drinks[prod]) {
      throw new Error('Item indisponível');
    } else {
      consumption.push(prod);
    }
  };

  return {
    fetchMenu,
    order,
    consumption,
  };
};

// console.log(createMenu({}));
module.exports = createMenu;
