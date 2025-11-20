-- Create admin user in Supabase Auth
-- Note: This needs to be run in Supabase SQL Editor or you need to manually create the user in Supabase Auth Dashboard

-- First, you need to create the user in Supabase Auth Dashboard:
-- 1. Go to Authentication > Users in your Supabase dashboard
-- 2. Click "Add user" > "Create new user"
-- 3. Email: admin@portfolio.com
-- 4. Password: admin123
-- 5. Auto Confirm User: YES (check this box)

-- Alternatively, you can use the Supabase Auth API to create the user programmatically
-- But for security reasons, it's better to create it manually in the dashboard

-- After creating the user, you can verify it exists with:
-- SELECT * FROM auth.users WHERE email = 'admin@portfolio.com';
