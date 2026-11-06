-- Kalender-Einträge für 2026/27. Erneuter Import erhält bearbeitete Daten.
INSERT INTO school_upcoming (exam_key, title, note, event_date) VALUES
('2026-27-3bkgd1-1-met-1', '1. Klassenarbeit · 3BKGD1/1 MET', '', '2026-11-20'),
('2026-27-3bkgd1-1-met-2', '2. Klassenarbeit · 3BKGD1/1 MET', '', NULL),
('2026-27-3bkgd1-1-met-3', '3. Klassenarbeit · 3BKGD1/1 MET', '', NULL),
('2026-27-3bkgd1-1-met-4', '4. Klassenarbeit · 3BKGD1/1 MET', '', NULL),
('2026-27-3bkgd1-1-grd-1', '1. Klassenarbeit · 3BKGD1/1 GRD', '', '2026-11-16'),
('2026-27-3bkgd1-1-grd-2', '2. Klassenarbeit · 3BKGD1/1 GRD', '', NULL),
('2026-27-3bkgd1-1-grd-3', '3. Klassenarbeit · 3BKGD1/1 GRD', '', NULL),
('2026-27-3bkgd1-1-grd-4', '4. Klassenarbeit · 3BKGD1/1 GRD', '', NULL),
('2026-27-3tgg1-2-1', '1. Klassenarbeit · 3TGG1/2', '', '2026-11-17'),
('2026-27-3tgg1-2-2', '2. Klassenarbeit · 3TGG1/2', '', NULL),
('2026-27-3tgg1-2-3', '3. Klassenarbeit · 3TGG1/2', '', NULL),
('2026-27-3tgg1-2-4', '4. Klassenarbeit · 3TGG1/2', '', NULL),
('2026-27-3tgg1-2-5', '5. Klassenarbeit · 3TGG1/2', '', NULL),
('2026-27-3tgg2-1', '1. Klassenarbeit · 3TGG2', '', '2026-11-30'),
('2026-27-3tgg2-2', '2. Klassenarbeit · 3TGG2', '', NULL)
ON DUPLICATE KEY UPDATE exam_key = VALUES(exam_key);
