CREATE TABLE users(
  user_id serial,
  first_name text,
  last_name text,
  email text,
  sales_id int,
  PRIMARY KEY(user_id)
);
CREATE TABLE manufacturers(
  manufacturer_id serial,
  company_name text,
  contact_name text,
  contact_email text,
  contact_phone_number text,
  PRIMARY KEY(manufacturer_id)
);
CREATE TABLE customers(
  customer_id serial,
  company_name text,
  contact_name text,
  cantact_email text,
  contact_phone_number text,
  PRIMARY KEY(customer_id)
);
CREATE TABLE items(
  item_id serial,
  item_name text,
  item_description text,
  PRIMARY KEY(item_id)
);
CREATE TABLE purchase_order(
  order_id serial,
  qty integer,
  date_ordered date,
  date_received date,
  item_id integer,
  user_id integer,
  PRIMARY KEY(order_id),
  FOREIGN KEY(item_id) REFERENCES items(item_id),
  FOREIGN KEY(user_id) REFERENCES users(user_id)
);
CREATE TABLE sales_order(
  order_id serial,
  qty integer,
  date_ordered date,
  date_received date,
  item_id integer,
  user_id integer,
  PRIMARY KEY(order_id),
  FOREIGN KEY(item_id) REFERENCES items(item_id),
  FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE manufacturers_purchase_order(
  purchase_id serial,
  manufacturer_id integer,
  order_id integer,
  PRIMARY KEY(purchase_id),
  FOREIGN KEY(manufacturer_id) REFERENCES manufacturers(manufacturer_id),
  FOREIGN KEY(order_id) REFERENCES purchase_order(order_id)
);
CREATE TABLE users_sales_order(
  sale_id serial,
  user_id integer,
  order_id integer,
  PRIMARY KEY(sale_id),
  FOREIGN KEY(user_id) REFERENCES users(user_id),
  FOREIGN KEY(order_id) REFERENCES sales_order(order_id)
);