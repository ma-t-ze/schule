-- In der bestehenden STRATO-Datenbank einmal ausführen.
ALTER TABLE school_exam_checklists ADD COLUMN accommodation BOOLEAN NOT NULL DEFAULT FALSE AFTER handed_out;
