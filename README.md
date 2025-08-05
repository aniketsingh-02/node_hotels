# Node Hotels Backend

A REST‑ful backend API built with **Node.js**, **Express.js**, and **MongoDB**, designed to manage hotel‑staff and menu operations.

##  Features

- Manage **staff members** (“Persons”) with full CRUD:
  - Add, retrieve, update, or delete persons
  - Filter by work type (e.g. chef, waiter, manager)
- Manage **menu items** with full CRUD:
  - Add, list, update, delete menu items
  - Filter items by taste (sweet, spicy, sour)
- Fields include: `name`, `price`, `taste`, `is_drink`, `ingredients`, `num_sales`
- Authentication logic (JWT-based), database connection and configuration files included

## 🔧 Tech Stack

- Node.js + Express.js  
- MongoDB (via Mongoose)  
- JSON Web Tokens (JWT)  
- bcrypt (for security if used)  
- dotenv configuration  

## ⚙ Installation & Setup

```bash
git clone https://github.com/aniketsingh-02/node_hotels.git
cd node_hotels
npm install
