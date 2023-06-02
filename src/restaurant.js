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

  const pay = () => {
    let totalBill = 0;
    for (let value of consumption) {
      if (object.food[value]) totalBill += object.food[value];
      if (object.drinks[value]) totalBill += object.drinks[value];
    }
    return totalBill;
  };

  return {
    fetchMenu,
    order,
    pay,
    consumption,
  };
};

module.exports = createMenu;
