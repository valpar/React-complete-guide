export default function TabButton({ title, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{title}</button>
    </li>
  );
}
