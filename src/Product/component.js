import React, { useState } from 'react';

import "./styles.css";

function Product() {
  const [tags, setTags] = useState(['decatizado', 'artesanal']);
  let retry = 3;
  const fetchTags = function(timeout) {
    setTimeout(function(){
      if (window.LS) {
        setTags(window.LS.product.tags);
      } else if (retry) {
        retry--;
        fetchTags(timeout * 2);
      }
    }, timeout);
  }
  fetchTags(200);

  const output = [];

  if (tags.includes('decatizado')) {
    output.push(<div key="decatizado" className="product_tag">
      <span>Todos los géneros con los que confecciono mis productos, están decatizados, esto quiere decir que no encogen ni destiñen.</span>
    </div>);
  }

  if (tags.includes('artesanal')) {
    output.push(<div key="artesanal" className="product_tag">
      <span>Las piezas de cerámica, son hechas con mis manos, por lo que pueden sufrir variaciones en sus colores, tamaños y acabados.</span>
    </div>);
  }

  return output;
}

export default Product;
