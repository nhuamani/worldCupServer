DROP DATABASE worldcup_db;
CREATE DATABASE IF NOT EXISTS worldcup_db;
use worldcup_db;


CREATE TABLE IF NOT EXISTS countries (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    acronym CHAR(3) UNIQUE, 
    flag_url TEXT,
    continent VARCHAR(50),
    status BOOLEAN DEFAULT true,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO countries (name, acronym, continent, status) VALUES
('Ukraine','UKR', 'Europa', true),
('Germany','GER', 'Europa', false),
('Spain','ESP', 'Europa', true),
('Spain','PER', 'America', true),
('Netherlands','NED', 'Europa', false);

CREATE TABLE IF NOT EXISTS teams (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100),
    short_name VARCHAR(20),
    fifa_code CHAR(3),
    logo_url TEXT,
    is_active BOOLEAN DEFAULT true,
    confederation VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    country_id INT,
    FOREIGN KEY (country_id) REFERENCES countries(id)
);


INSERT INTO teams (name, acronym, continent, status) VALUES
('Ukraine','UKR', 'Europa', true),
('Germany','GER', 'Europa', false),
('Spain','ESP', 'Europa', true),
('Spain','PER', 'America', true),
('Netherlands','NED', 'Europa', false);

DROP TABLE tournaments;

CREATE TABLE IF NOT EXISTS tournaments (
    id CHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    status BOOLEAN DEFAULT true,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO tournaments (id, name, description) VALUES
(UUID(), 'FIFA World Cup', 'FIFA World Cup 2026'),
(UUID(), 'Copa América', 'Copa América 2028'),
(UUID(), 'UEFA Euro', 'UEFA Euro 2028'),
(UUID(), 'AFC Asian Cup', 'AFC Asian Cup'),
(UUID(), 'African Cup of Nations', 'African Cup of Nations'),
(UUID(), 'Champions League', 'Champions League 2026/2027');

select * from worldcup_db.tournaments t 


