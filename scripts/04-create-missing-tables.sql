-- Create certifications table if it doesn't exist
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

-- Create personal_projects table if it doesn't exist
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

-- Create other_skills table if it doesn't exist
CREATE TABLE IF NOT EXISTS other_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS if not already enabled
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE personal_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE other_skills ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY IF NOT EXISTS "Public certifications are viewable by everyone" ON certifications FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Public personal_projects are viewable by everyone" ON personal_projects FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "Public other_skills are viewable by everyone" ON other_skills FOR SELECT USING (true);

-- Create policies for authenticated users (admin) to manage data
CREATE POLICY IF NOT EXISTS "Authenticated users can manage certifications" ON certifications FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Authenticated users can update certifications" ON certifications FOR UPDATE TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS "Authenticated users can delete certifications" ON certifications FOR DELETE TO authenticated USING (true);

CREATE POLICY IF NOT EXISTS "Authenticated users can manage personal_projects" ON personal_projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Authenticated users can update personal_projects" ON personal_projects FOR UPDATE TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS "Authenticated users can delete personal_projects" ON personal_projects FOR DELETE TO authenticated USING (true);

CREATE POLICY IF NOT EXISTS "Authenticated users can manage other_skills" ON other_skills FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY IF NOT EXISTS "Authenticated users can update other_skills" ON other_skills FOR UPDATE TO authenticated USING (true);
CREATE POLICY IF NOT EXISTS "Authenticated users can delete other_skills" ON other_skills FOR DELETE TO authenticated USING (true);
