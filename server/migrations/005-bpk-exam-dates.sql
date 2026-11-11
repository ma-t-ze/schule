-- BPK-Klassenarbeiten: vorhandene und später geänderte Termine bleiben erhalten.
INSERT INTO school_upcoming (exam_key, title, note, event_date) VALUES
('2026-27-1bfd1-bpk-1', '1. Klassenarbeit · 1BFD1 BPK', '', '2026-12-09'),
('2026-27-1bfd1-bpk-2', '2. Klassenarbeit · 1BFD1 BPK', '', NULL)
ON DUPLICATE KEY UPDATE exam_key = VALUES(exam_key);
