-- 1️⃣ Table: categories
CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

-- 2️⃣ Table: accounts
CREATE TABLE accounts (
  account_id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone_no VARCHAR(15) NOT NULL,
  password VARCHAR(255) NOT NULL,
  location VARCHAR(100),
  role ENUM('user','provider','admin') NOT NULL DEFAULT 'user',
  service_category_id INT,
  experience INT,
  qualification VARCHAR(100),
  hour_rate INT,
  description TEXT,
  aadhar_file MEDIUMBLOB,
  verified BOOLEAN DEFAULT FALSE,
  status BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  modified_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (service_category_id) REFERENCES categories(category_id) ON DELETE SET NULL
);

-- 3️⃣ Table: ratings
CREATE TABLE ratings (
  rating_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  provider_id INT NOT NULL,
  provider_name VARCHAR(100) NOT NULL,
  star_count INT CHECK (star_count BETWEEN 1 AND 5),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id)
    REFERENCES accounts(account_id)
    ON DELETE CASCADE,
  FOREIGN KEY (provider_id)
    REFERENCES accounts(account_id)
    ON DELETE CASCADE
);
