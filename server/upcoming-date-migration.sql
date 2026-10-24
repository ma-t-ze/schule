-- Einmal in der bestehenden STRATO-Datenbank ausführen. Vorhandene Notizen bleiben erhalten.
ALTER TABLE school_upcoming ADD COLUMN IF NOT EXISTS event_date DATE NULL AFTER note;
