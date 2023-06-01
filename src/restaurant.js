/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
 const obj = { 
        fetchMenu: () => object, 
        consumption: [], 
        order: (prod) => { 
          if (!object.food[prod] && !object.drinks[prod]) {
            throw new Error('Item indisponível');
          } else {
            obj.consumption.push(prod);
          }
        },
      };
  return obj;
};

// console.log(createMenu({}));
module.exports = createMenu;
