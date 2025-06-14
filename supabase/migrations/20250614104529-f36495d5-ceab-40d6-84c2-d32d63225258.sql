
-- Create a table for Early Access Requests
CREATE TABLE public.early_access_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  full_name TEXT NOT NULL,
  store_name TEXT NOT NULL,
  store_type TEXT NOT NULL,
  mobile_number TEXT NOT NULL
);

-- Create a table for Notify Me email signups
CREATE TABLE public.notify_me_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  email TEXT NOT NULL UNIQUE
);

