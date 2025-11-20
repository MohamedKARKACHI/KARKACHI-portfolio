-- Update profile with new bio and website
UPDATE profiles SET 
  bio = 'Étudiant en 5ème année d''ingénierie informatique, à la recherche d''un stage PFE de 4 mois. Passionné par le développement back-end, j''ai une expérience en conception d''API REST et gestion de bases de données avec Spring Boot, MySQL et Elasticsearch. J''ai créé 86 API REST sécurisées et performantes avec authentification, filtres, cache et logging complet. Curieux et rigoureux, je souhaite contribuer à des projets innovants.',
  linkedin_url = 'https://linkedin.com/in/mohamed-karkachi',
  github_url = 'https://github.com/mohammedkarkachi'
WHERE full_name = 'Mohammed Karkachi';

-- Update first experience with detailed description about 86 REST APIs
UPDATE projects SET 
  description = 'Création de 86 API REST sécurisées et performantes avec authentification, filtres, cache et logging complet. Conception d''une architecture back-end optimisée, scalable et prête pour la production.'
WHERE company = 'Z.H mac negos';

-- Add new personal projects
INSERT INTO personal_projects (title, description, technologies, project_url, github_url, order_index)
VALUES 
(
  'SIGAP - Système Intelligent de Gestion des Absences',
  'Développement d''un système intelligent de gestion des absences (SIGAP) basé sur la détection des adresses MAC Bluetooth. Système complet avec détection automatique, rapports et statistiques.',
  ARRAY['Spring Boot', 'Elasticsearch', 'JWT', 'Docker', 'MySQL'],
  'https://sigap-eight.vercel.app/',
  'https://github.com/mohammedkarkachi/sigap',
  1
),
(
  'UML Class Diagram Editor',
  'Conception d''une application web interactive permettant aux utilisateurs de créer visuellement des diagrammes de classes UML via une interface intuitive, similaire à des outils tels que draw.io ou StarUML.',
  ARRAY['Spring Boot', 'React.js', 'Vite', 'HTML/CSS', 'MySQL'],
  'https://uml-diagram-editor.vercel.app/',
  'https://github.com/mohammedkarkachi/uml-diagram',
  2
),
(
  'JSON/XML File Converter',
  'Développement d''une application web permettant la conversion de fichiers entre les formats JSON et XML, avec une interface utilisateur intuitive et un traitement rapide des données.',
  ARRAY['Spring Boot', 'React.js', 'Vite', 'HTML/CSS', 'MySQL'],
  'https://json-xml-amber.vercel.app/',
  'https://github.com/mohammedkarkachi/json-xml-converter',
  3
);

-- Add certifications
INSERT INTO certifications (title, issuer, date, order_index)
VALUES 
('Data Visualisation', 'Coursera', '2024', 1),
('Software Engineering', 'Coursera', '2024', 2),
('The Unix Workbench', 'Coursera', '2024', 3),
('Interactivity with JavaScript', 'Coursera', '2024', 4),
('Introduction à la programmation orientée objet (en C++)', 'Coursera', '2024', 5),
('Advanced Styling with Responsive Design', 'Coursera', '2024', 6),
('CCNA1 - CCNA2 - CCNA3', 'OFPPT - Cisco Academy', '2023', 7),
('AZ104 - AZ500 - AZ900', 'OFPPT - Microsoft', '2023', 8);

-- Add other skills (networking, cloud, virtualization, etc.)
INSERT INTO other_skills (category, name, order_index)
VALUES 
('Networking', 'Networking', 1),
('Cloud & DevOps', 'Azure DevOps', 1),
('Cloud & DevOps', 'Cloud Computing', 2),
('Cloud & DevOps', 'OpenStack', 3),
('Cloud & DevOps', 'Docker', 4),
('Virtualization', 'Proxmox', 1),
('Virtualization', 'ESXi', 2),
('Virtualization', 'VMware vSphere', 3),
('Virtualization', 'vCenter', 4),
('Virtualization', 'VirtualBox', 5),
('Virtualization', 'Hyper-V', 6),
('Specializations', 'Robotics', 1),
('Specializations', 'Machine Learning', 2),
('Tools', 'Qt Creator', 1),
('Tools', 'PyQt', 2);

-- Update languages with proficiency levels
UPDATE languages SET proficiency = 'Natif' WHERE name = 'Arabe';
UPDATE languages SET proficiency = 'Courant' WHERE name = 'Français';
UPDATE languages SET proficiency = 'Intermédiaire' WHERE name = 'Anglais';
UPDATE languages SET proficiency = 'Débutant' WHERE name = 'Español';
