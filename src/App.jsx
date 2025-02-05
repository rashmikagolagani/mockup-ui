export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}
function ProductRow({ product }) {
  const name = ProductCategoryRow.stocked ? (
    ProductCategoryRow.name
  ) : (
    <span style={{ color: "red" }}>{ProductCategoryRow.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{Product.price}</td>
    </tr>
  );
}
function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
