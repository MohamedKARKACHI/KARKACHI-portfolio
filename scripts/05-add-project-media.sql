-- Add image_url and video_url columns to projects table
ALTER TABLE projects ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS video_url TEXT;

-- Add image_url and video_url columns to personal_projects table
ALTER TABLE personal_projects ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE personal_projects ADD COLUMN IF NOT EXISTS video_url TEXT;
