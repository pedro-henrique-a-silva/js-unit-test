const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const prod = productDetails('Alcool gel', 'Máscara');
    expect(typeof prod[0]).not.toBeNull();
    expect(Array.isArray(prod[0])).toBeFalsy();
    expect(typeof prod[0]).toBe('object');
    
    expect(typeof prod[1]).not.toBeNull();
    expect(Array.isArray(prod[1])).toBeFalsy();
    expect(typeof prod[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const prod2 = productDetails('Alcool gel', 'Máscara');
    expect(prod2[0].name).not.toBe('Máscara');
    expect(prod2[1].name).not.toBe('Alcool gel');

    const prod3 = productDetails('Coquinha', 'Pepsi');
    expect(prod3[0].name).not.toBe('Pepsi');
    expect(prod3[1].name).not.toBe('Coquinha');

    const prod4 = productDetails('Farinha', 'Charque');
    expect(prod4[0].name).not.toBe('Charque');
    expect(prod4[1].name).not.toBe('Farinha');
    // Teste se os dois productIds terminam com 123.
    expect(prod[0].details.productId.endsWith('123')).toBeTruthy();
    expect(prod[1].details.productId.endsWith('123')).toBeTruthy();
  });
});
