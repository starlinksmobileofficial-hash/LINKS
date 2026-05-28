import { motion } from "framer-motion";
import "./index.css";

const products = [
  {
    title: "iPhone 15 Pro Max",
    price: "Starting from PKR 485,000",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    price: "Starting from PKR 420,000",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Apple AirPods Pro",
    price: "Starting from PKR 78,000",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div>
          <h1>STARLINKS MOBILES</h1>
          <p>WE CONNECT, YOU STAY AHEAD.</p>
        </div>

        <a
          className="whatsapp"
          href="https://wa.me/923114769999"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="badge">PREMIUM MOBILE TECHNOLOGY</span>

          <h2>Modern Mobile Experience</h2>

          <p>
            Premium smartphones, accessories, AirPods, smart watches,
            chargers, and luxury mobile technology solutions.
          </p>

          <div className="buttons">
            <button>Explore Products</button>
            <button className="secondary">Contact Us</button>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
          alt="Phone"
        />
      </section>

      <section className="products">
        <div className="title">
          <span>FEATURED PRODUCTS</span>
          <h3>Latest Collection</h3>
        </div>

        <div className="grid">
          {products.map((product) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={product.title}
              className="card"
            >
              <img src={product.image} alt={product.title} />
              <div className="card-body">
                <h4>{product.title}</h4>
                <p className="price">{product.price}</p>
                <button>View Product</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h3>STARLINKS MOBILES</h3>
        <p>Owner & Founder: KHURAM SHAHZAD</p>
        <p>Gujrat, Pakistan</p>
      </footer>
    </div>
  );
}
