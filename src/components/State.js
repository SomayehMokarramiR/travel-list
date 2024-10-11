export default function State({ itemsProp }) {
  const numItems = itemsProp.length;
  const numPacked = itemsProp.filter((item) => item.packed).length;
  const percenttage = Math.round((numPacked / numItems) * 100);

  if (!itemsProp.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list✈</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {percenttage === 100
          ? "You got everything!Ready to go ✈"
          : `👜You have ${numItems} iteme on your itemes list, and you already packed
          ${numPacked}(${percenttage}%)}`}
      </em>
    </footer>
  );
}
