-- Create profiles table for personal information
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT NOT NULL,
  location TEXT,
  email TEXT,
  phone TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create education table
CREATE TABLE IF NOT EXISTS education (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  field TEXT NOT NULL,
  location TEXT,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects/experience table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] DEFAULT '{}',
  demo_url TEXT,
  github_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create languages table
CREATE TABLE IF NOT EXISTS languages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  proficiency TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create soft_skills table
CREATE TABLE IF NOT EXISTS soft_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create new tables for certifications and personal projects
CREATE TABLE IF NOT EXISTS certifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  date TEXT,
  credential_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS personal_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] DEFAULT '{}',
  project_url TEXT,
  github_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS other_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE soft_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE personal_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE other_skills ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public education are viewable by everyone" ON education FOR SELECT USING (true);
CREATE POLICY "Public projects are viewable by everyone" ON projects FOR SELECT USING (true);
CREATE POLICY "Public skills are viewable by everyone" ON skills FOR SELECT USING (true);
CREATE POLICY "Public languages are viewable by everyone" ON languages FOR SELECT USING (true);
CREATE POLICY "Public soft_skills are viewable by everyone" ON soft_skills FOR SELECT USING (true);
CREATE POLICY "Public certifications are viewable by everyone" ON certifications FOR SELECT USING (true);
CREATE POLICY "Public personal_projects are viewable by everyone" ON personal_projects FOR SELECT USING (true);
CREATE POLICY "Public other_skills are viewable by everyone" ON other_skills FOR SELECT USING (true);

-- Create policies for authenticated users (admin) to manage data
CREATE POLICY "Authenticated users can insert profiles" ON profiles FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update profiles" ON profiles FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete profiles" ON profiles FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert education" ON education FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update education" ON education FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete education" ON education FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert projects" ON projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update projects" ON projects FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete projects" ON projects FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert skills" ON skills FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update skills" ON skills FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete skills" ON skills FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert languages" ON languages FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update languages" ON languages FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete languages" ON languages FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert soft_skills" ON soft_skills FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update soft_skills" ON soft_skills FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete soft_skills" ON soft_skills FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can manage certifications" ON certifications FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update certifications" ON certifications FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete certifications" ON certifications FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can manage personal_projects" ON personal_projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update personal_projects" ON personal_projects FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete personal_projects" ON personal_projects FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can manage other_skills" ON other_skills FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update other_skills" ON other_skills FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete other_skills" ON other_skills FOR DELETE TO authenticated USING (true);
