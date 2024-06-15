function fetchProduct('https://dummyjson.com/products/1') {
    return fetch('https://dummyjson.com/products/1')
      .then(response => response.json())
      .catch(error => console.error('Error fetching product:', error));
  }
  
  function displayProduct(product) {
    let button1 = document.getElementById('button1');
    button1.innerHTML = `
      <h2>${product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: ${product.description}</p>
    `;
  }
  
  fetchProduct('https://dummyjson.com/products/1')
    .then(product => displayProduct(product));
  