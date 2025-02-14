import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're work between {openHour}:00 still {closeHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;
