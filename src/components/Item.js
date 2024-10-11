export default function Item({ itemProp, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemProp.packed}
        onChange={() => onToggleItem(itemProp.id)}
      />
      <span style={itemProp.packed ? { textDecoration: "line-through" } : {}}>
        {itemProp.quantity}
        {itemProp.description}
      </span>
      <button onClick={() => onDeleteItem(itemProp.id)}>❌</button>
    </li>
  );
}
