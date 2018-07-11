CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE profile(
	id serial primary key,
	user_id INTEGER REFERENCES person NOT NULL,
	resume_name VARCHAR(80),
	github_name VARCHAR(80),
	email VARCHAR(80),
	bio VARCHAR(280)
);

CREATE TABLE project(
	id serial primary key,
	profile_id INTEGER REFERENCES profile NOT NULL,
	project_name VARCHAR(80) NOT NULL,
	image_url VARCHAR(280),
	website_url VARCHAR(280),
	git_repo VARCHAR(280),
	rawCode VARCHAR(840),
	description VARCHAR(280),
	show_hide BOOLEAN Default true
);

CREATE TABLE skill(
	id serial primary key,
	skill VARCHAR(80) NOT NULL
);

CREATE TABLE skill_joiner(
	id serial primary key,
	profile_id INTEGER REFERENCES profile NOT NULL,
	skill_id INTEGER REFERENCES skill NOT NULL
);