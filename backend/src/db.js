import Database from 'better-sqlite3';

const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS computers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      hostname VARCHAR(255) NOT NULL UNIQUE,
      room VARCHAR(100),
      last_seen TIMESTAMP NULL
  );  
`)

export default db;