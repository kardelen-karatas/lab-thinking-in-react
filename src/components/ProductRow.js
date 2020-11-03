import React from 'react';

class ProductRow extends React.Component {
  render() {
    return (
      <tr key={this.props.index} className="product-row">
        <td>{this.props.productName}</td>
        <td>{this.props.productPrice}</td>
      </tr>
    );
  }
}

export default ProductRow;
