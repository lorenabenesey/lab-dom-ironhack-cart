// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').value;
  const result = price * quantity;
  const subtotal = (product.querySelector('.subtotal span').innerText = result);

  return result;
}

function calculateAll() {
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/

  const productArray = document.querySelectorAll('.product');
  const newArr = [...productArray];
  let total = newArr.reduce((acc, curr) => {
    return acc + updateSubtotal(curr);
  }, 0);
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove();
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn btn-remove');
  removeButton.addEventListener('click', removeProduct());

  //... your code goes here
});
