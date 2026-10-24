-- In der bestehenden Datenbank in phpMyAdmin ausführen. Notizen bleiben erhalten.
ALTER TABLE school_upcoming ADD COLUMN IF NOT EXISTS end_date DATE NULL AFTER event_date;
