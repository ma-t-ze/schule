CREATE TABLE IF NOT EXISTS school_exam_accommodations (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    exam_key VARCHAR(60) NOT NULL,
    student_name VARCHAR(150) NOT NULL,
    pdf_data MEDIUMBLOB NULL,
    revision INT UNSIGNED NOT NULL DEFAULT 1,
    INDEX (exam_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
