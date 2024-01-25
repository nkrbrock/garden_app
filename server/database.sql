CREATE TABLE users(
	user_id uuid PRIMARY KEY DEFAULT
	uuid_generate_v4(),
	uname TEXT NOT NULL,
	fname TEXT NOT NULL,
	lname TEXT NOT NULL,
	email TEXT NOT NULL,
	password TEXT NOT NULL,
	plants INT[]
);