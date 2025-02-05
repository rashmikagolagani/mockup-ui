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
