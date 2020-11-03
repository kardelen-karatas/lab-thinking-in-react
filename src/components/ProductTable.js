import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    return (
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.data.map((product, index) => (
              <ProductRow
                productName={product.name}
                productPrice={product.price}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
