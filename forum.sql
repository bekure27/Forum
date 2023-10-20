CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS questions (
    id INT NOT NULL AUTO_INCREMENT,
    question_id VARCHAR(255) NOT NULL UNIQUE,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    tag VARCHAR(50),
    PRIMARY KEY (id, question_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE INDEX idx_question_id ON questions(question_id);

CREATE TABLE IF NOT EXISTS answer (
    answer_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    question_id VARCHAR(255) NOT NULL,
    answer VARCHAR(255) NOT NULL,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (question_id) REFERENCES questions(question_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
