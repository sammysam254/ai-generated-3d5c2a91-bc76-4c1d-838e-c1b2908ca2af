CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE POLICY "Enable select for all users" ON products FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users" ON products FOR INSERT TO authenticated USING (true);

CREATE POLICY "Enable update for authenticated users" ON products FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Enable delete for authenticated users" ON products FOR DELETE TO authenticated USING (true);