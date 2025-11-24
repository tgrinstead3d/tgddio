-- Enable Row Level Security
alter table bookings enable row level security;

-- Create a policy that allows anyone (anon) to insert data
create policy "Allow public inserts"
on bookings
for insert
to anon
with check (true);

-- Create a policy that denies access to select, update, delete for anon
-- (Implicitly denied by default when RLS is enabled, but good to be explicit or just rely on default deny)
-- We only need to define what IS allowed. If no policy allows SELECT, then SELECT is forbidden.

-- Optional: Allow authenticated users (service_role) to do everything
-- The service_role key bypasses RLS, so this is strictly for other authenticated roles if you had them.
