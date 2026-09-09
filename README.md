# Moonlight Cafe ☕

**"A Sip of Serenity"** — a static café ordering website (`Moonlight Cafe`) with a dynamic menu, shopping cart, and order checkout, plus sections for customer feedback and recipe submissions.

🔗 **Live demo:** [cafe-gamma-pearl.vercel.app](https://cafe-gamma-pearl.vercel.app)

## ✨ Features

- **Home section** — welcome banner with the café's tagline
- **Menu section** — items are rendered dynamically into `#menu-container` via JavaScript
- **Order / Cart section**
  - Cart items list (`#cart-items`), populated dynamically as items are added
  - Delivery address input
  - Payment mode selector (Cash on Delivery, UPI, Card)
  - "Confirm Order" button that triggers order processing
- **Customer Feedback section** — a form for visitors to leave feedback
- **Drop Your Recipe section** — a form for visitors to submit their own coffee recipes
- Simple, single-page navigation via anchor links (Home, Menu, Order, Feedback, Recipe)

## 🛠️ Tech Stack

- **HTML5** — page structure (`index.html`)
- **CSS3** (`style.css`) — styling and layout
- **Vanilla JavaScript** (`script.js`) — renders the menu, manages the cart, and handles order confirmation
- No frameworks or build tools — a purely static site

## 📂 Project Structure

```
cafe/
├── src/            # Assets (e.g. logo.png)
├── index.html      # Main page markup
├── script.js       # Menu rendering, cart logic, order handling
└── style.css       # Styling
```

## 🚀 Getting Started

No build step is required — it's a static site.

1. Clone the repository:
   ```bash
   git clone https://github.com/hemarukesh/cafe.git
   cd cafe
   ```
2. Open `index.html` directly in your browser to preview it locally.

## ☁️ Deployment

This project is deployed on **[Vercel](https://vercel.com)** at [cafe-gamma-pearl.vercel.app](https://cafe-gamma-pearl.vercel.app).

To deploy your own copy:
1. Import the GitHub repo into Vercel.
2. Since it's a static site with no framework, Vercel auto-detects it — no build command or output directory configuration is needed.
3. Deploy, and Vercel will serve `index.html` at the root.

## 📝 Notes

- Menu items, feedback, and recipe submissions are currently handled client-side (in `script.js`) — connect them to a backend or database if you want data to persist beyond the browser session.
- The order confirmation flow (`confirmOrder()`) can be extended to integrate real payment gateways for UPI/Card options.

## 📄 License

No license specified yet. Add a `LICENSE` file if you'd like to open-source this project under a specific license.
