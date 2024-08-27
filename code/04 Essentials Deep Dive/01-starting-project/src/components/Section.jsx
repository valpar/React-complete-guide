export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2 id='examples'>{title}</h2>
      {children}
    </section>
  );
}
