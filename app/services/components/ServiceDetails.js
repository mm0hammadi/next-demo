export default function ServiceDetails({ services }) {
  return (
    <section>
      {services.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
