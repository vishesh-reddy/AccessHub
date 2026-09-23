# AccessHub

Smart visitor-management platform for gated communities using Node.js, Express.js, MySQL, JWT, QR verification, delivery tracking and parking management.

## Setup
1. Install Node.js 18+ and MySQL 8+.
2. Run `database/schema.sql` in MySQL.
3. Copy `backend/.env.example` to `backend/.env` and set credentials and JWT_SECRET.
4. Run `npm install` inside `backend/`.
5. Run `npm start` and open http://localhost:5000.

Never commit `backend/.env`.