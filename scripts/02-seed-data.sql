-- Clear existing data
TRUNCATE TABLE profiles, education, projects, skills, languages, soft_skills, certifications, personal_projects, other_skills RESTART IDENTITY CASCADE;

-- Insert Profile
INSERT INTO profiles (full_name, title, bio, location, email, phone, linkedin_url, github_url)
VALUES (
  'KARKACHI MOHAMED',
  'Futur Ingénieur Test & Qualité Logicielle',
  'Étudiant en dernière année du cycle ingénieur MIAGE à l''EMSI, à la recherche d''un stage de fin d''études (PFE) de 4 à 6 mois. Bonnes connaissances en développement web et mobile (React, Node.js, Spring Boot) avec un intérêt pour les tests logiciels et l''assurance qualité. Capacité à travailler en équipe sur des projets en appliquant des méthodologies Agile et des pratiques de test.',
  'Marrakech',
  'karkachimohamed045@gmail.com',
  '+212 619-176173',
  'https://linkedin.com/in/mohamed-karkachi',
  'https://github.com/MohamedKARKACHI'
);

-- Insert Education
INSERT INTO education (institution, degree, field, location, start_date, end_date, description, order_index)
VALUES 
(
  'EMSI, Marrakech',
  'Cycle Ingénieur en Informatique et Réseaux',
  'Informatique et Réseaux',
  'Marrakech',
  '2023',
  '2026',
  'Formation d’ingénieur axée sur le développement logiciel, les réseaux informatiques, l’architecture des systèmes, la cybersécurité et les technologies émergentes. Réalisation de plusieurs projets académiques et applications web complètes.',
  1
),
(
  'OFPPT, SYBANTIC, Marrakech',
  'Diplôme Technicien Specialisé Infrastructure Degital Option Cloud Computing',
  'Cloud Computing',
  'Marrakech',
  '2021',
  '2023',
  'Formation technique en gestion des systèmes et réseaux informatiques, sécurité des infrastructures, détection et prévention des menaces, avec une approche pratique basée sur des cas réels d’entreprise.',
  2
);

-- Insert Experience (Projects)
INSERT INTO projects (title, company, period, description, technologies, order_index)
VALUES 
(
  'Stagiaire en Développeur Full Stack',
  'Z.H MAC Negos, Marrakech',
  'Juil. 2025 – Sept. 2025',
  'Création de 86 API REST sécurisées et performantes avec authentification, filtres, cache et logging complet. Conception d’une architecture back-end optimisée, scalable et prête pour la production.',
  ARRAY['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'OAuth2', 'RBAC', 'MySQL', 'Ehcache'],
  1
),
(
  'Stagiaire en Développeur Full Stack',
  'FIZAZI & ASSOCIES, Hay riad , Rabat',
  'Juil. 2024 – Sept. 2024',
  'Conception, développement et configuration d''une application web pour gérer les fichiers Excel, fournir des tableaux et des statistiques avec des calculs, ainsi que l''exportation des résultats sous format Excel ou Word. Des tableaux de bord permettront de visualiser les résultats.',
  ARRAY['REACT JS', 'MONGO DB', 'Excel', 'MERN STACK'],
  2
),
(
  'Stagiaire en Développeur Full Stack',
  'Ciment du Maroc , Marrakech',
  'Juil. 2023 – Août 2023',
  'Conception, Développement et Configuration d''une application Desktop pour gérer les réclamations et les réponses des employés.',
  ARRAY['PowerApp', 'PowerBI', 'Excel', 'SQLserver'],
  3
);

-- Insert Skills
INSERT INTO skills (category, name, order_index)
VALUES 
('Programmation', 'C', 1), ('Programmation', 'C++', 2), ('Programmation', 'JAVA', 3), ('Programmation', 'Python', 4), ('Programmation', 'POO', 5), ('Programmation', 'UML', 6),
('Frameworks/Logiciels', 'React js', 1), ('Frameworks/Logiciels', 'ReactNative', 2), ('Frameworks/Logiciels', 'Laravel', 3), ('Frameworks/Logiciels', 'Nest js', 4), ('Frameworks/Logiciels', 'Django', 5),
('Frameworks/Logiciels', 'Photoshop', 6), ('Frameworks/Logiciels', 'Illustrator', 7), ('Frameworks/Logiciels', 'Visual Studio Code', 8), ('Frameworks/Logiciels', 'QT creator', 9), ('Frameworks/Logiciels', 'XAMPP', 10), ('Frameworks/Logiciels', 'StarUML', 11), ('Frameworks/Logiciels', 'Figma', 12),
('Développement Web/Bases de données', 'HTML', 1), ('Développement Web/Bases de données', 'CSS', 2), ('Développement Web/Bases de données', 'JAVASCRIPT', 3), ('Développement Web/Bases de données', 'PHP', 4),
('Développement Web/Bases de données', 'SQL Server', 5), ('Développement Web/Bases de données', 'Maria db', 6), ('Développement Web/Bases de données', 'Mongo DB', 7);

-- Insert Languages
INSERT INTO languages (name, proficiency, order_index)
VALUES 
('Arabe', 'Maternelle', 1),
('Français', 'Intermédiaire', 2),
('Anglais', 'Intermédiaire', 3),
('Español', 'Débutant', 4);

-- Insert Soft Skills
INSERT INTO soft_skills (name, order_index)
VALUES 
('Résolution de problèmes', 1),
('Esprit critique et éthique', 2),
('Capacité d’adaptation', 3),
('Flexibilité', 4);

-- Insert Certifications
INSERT INTO certifications (title, issuer, date, order_index)
VALUES 
('Java SE 17 Developer (1Z0-829)', 'Oracle', '', 1),
('COCIA', 'Conference', 'Avril 2025', 2),
('EMSISTE INNOV', 'Conference', 'Mai 2025', 3),
('AISEC', 'Conference', 'Mai 2025', 4);
