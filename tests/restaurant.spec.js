const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    const returnCreateMenu = createMenu(
      {food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90}});

    const menu = createMenu({ food: {}, drinks: {} }).fetchMenu();
    

    expect(returnCreateMenu).not.toBeUndefined();
    expect(Array.isArray(returnCreateMenu)).toBeFalsy();
    expect(typeof returnCreateMenu).toBe('object');

    expect(returnCreateMenu).toHaveProperty('fetchMenu');
    expect(typeof returnCreateMenu.fetchMenu).toBe('function');

    expect(Object.keys(menu)).toEqual(['food', 'drinks']);
    expect({ food: {}, drinks: {} }).toEqual(menu);

    expect(Array.isArray(returnCreateMenu.consumption)).toBeTruthy()
    expect(returnCreateMenu.consumption).toHaveLength(0);

    expect(() => {returnCreateMenu.order('lasanha') }).toThrow('Item indisponível');
    returnCreateMenu.order('coxinha')
    expect(returnCreateMenu.consumption).toContain('coxinha');
    returnCreateMenu.order('agua')
    expect(returnCreateMenu.consumption).toContain('agua');
    returnCreateMenu.order('cerveja')
    expect(returnCreateMenu.consumption).toContain('cerveja');
  });
});
