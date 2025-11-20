-- Insert Coursera Certificates and Courses for Mohammed KARKACHI
INSERT INTO certifications (title, issuer, date, credential_url, order_index) VALUES
('Use Canva to Create Desktop and Mobile-friendly Web Pages', 'Coursera Project Network', 'Dec 13, 2023', 'https://coursera.org/verify/56ZL87T7BKUS', 1),
('AWS S3 Basics', 'Coursera Project Network', 'Dec 13, 2023', 'https://coursera.org/verify/5XAPD2S6XGCW', 2),
('Building a Business Presence With Facebook Marketing', 'Coursera Project Network', 'Dec 13, 2023', 'https://coursera.org/verify/88NL3KWEK28H', 3),
('Introduction to Containers w/ Docker, Kubernetes & OpenShift', 'IBM', 'Mar 5, 2025', 'https://coursera.org/verify/6WGO2LVQSGE8', 4),
('The Unix Workbench', 'Johns Hopkins University', 'Apr 19, 2024', 'https://coursera.org/verify/99NUMYVKLS2Q', 5),
('React Basics', 'Meta', 'Nov 13, 2024', 'https://coursera.org/verify/32U4KLJGLAG4', 6),
('Virtual Networks in Azure', 'Whizlabs', 'Mar 12, 2025', 'https://coursera.org/verify/BMWKVYCSA79F', 7),
('Compute Resources in Azure', 'Whizlabs', 'Mar 13, 2025', 'https://coursera.org/verify/7DS4VM7PDZRX', 8),
('Introduction to Basic Game Development using Scratch', 'Coursera Project Network', 'Dec 13, 2023', 'https://coursera.org/verify/3JE9YJ6GHGA5', 9),
('Introduction to Computers and Operating Systems and Security', 'Microsoft', 'Dec 13, 2023', 'https://coursera.org/verify/98LMYESU5TJR', 10)
ON CONFLICT DO NOTHING;
