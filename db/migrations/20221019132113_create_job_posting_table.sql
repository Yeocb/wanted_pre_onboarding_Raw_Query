-- migrate:up
CREATE TABLE job_posting (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    compaines_id BIGINT NOT NULL,
    country VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    skill VARCHAR(100) NULL,
    compensation INT NOT NULL,
    description VARCHAR(100) NULL,
    CONSTRAINT job_posting_compaines_id_compaines_id_fkey FOREIGN KEY (compaines_id) REFERENCES compaines(id)
)

-- migrate:down

DROP TABLE job_posting