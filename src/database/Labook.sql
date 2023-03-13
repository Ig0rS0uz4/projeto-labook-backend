-- Active: 1676645965843@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    content TEXT,
    likes INTEGER,
    deslikes INTEGER,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id)
);

INSERT INTO users (id, name, email, password, role)
VALUES
	("u001", "igor", "igor@email.com", "igor123", "druida" ),
	("u002", "vanessa", "vanessa@email.com", "vanessa123", "bardo"),
	("u003", "hugo", "hugo@email.com", "hugo00", "tank");

INSERT INTO posts (id, creator_id, content)
VALUES
	("p001", "u001", "lalala"),
	("p002", "u002", "lalala");

DROP TABLE posts;