-- migrate:up
CREATE TABLE application (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    job_posting_id BIGINT NOT NULL,
    CONSTRAINT application_user_id_users_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT application_job_posting_id_job_posting_id_fkey FOREIGN KEY (job_posting_id) REFERENCES job_posting(id)
)

-- migrate:down

DROP TABLE application