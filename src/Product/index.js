import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

// PRODUCTS
export default () => {
  const wrapper = document.querySelector('.js-product-left-col');
  if (wrapper) {
    const productTags = document.createElement('div');
    productTags.setAttribute('id', 'product-tags');
    wrapper.appendChild(productTags);
    
    ReactDOM.render(<Component />, productTags);
  }
}
