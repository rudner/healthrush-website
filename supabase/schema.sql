-- Products table
create table public.products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  slug text not null unique,
  category text not null,
  description text not null,
  short_description text not null,
  image text,
  badge text,
  features text[] not null default '{}',
  specs jsonb not null default '{}',
  created_at timestamp with time zone default now()
);

-- Testimonials table
create table public.testimonials (
  id uuid default gen_random_uuid() primary key,
  quote text not null,
  author text not null,
  role text not null,
  company text not null,
  created_at timestamp with time zone default now()
);

-- Contact form submissions table
create table public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  organization text,
  type text,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Allow public read access to products and testimonials
alter table public.products enable row level security;
alter table public.testimonials enable row level security;
alter table public.contact_submissions enable row level security;

create policy "Public can read products" on public.products for select using (true);
create policy "Public can read testimonials" on public.testimonials for select using (true);
create policy "Public can insert contact submissions" on public.contact_submissions for insert with check (true);

-- Seed products
insert into public.products (name, slug, category, description, short_description, image, badge, features, specs) values
(
  'Digital Patient Monitor',
  'digital-patient-monitor',
  'Diagnostic',
  'The HealthRush Digital Patient Monitor provides accurate, real-time monitoring of critical patient vitals including ECG, SpO2, NIBP, temperature, and respiration rate. Designed for ICU, emergency, and general ward use.',
  'Multi-parameter bedside monitor with real-time vitals tracking.',
  '/images/products/patient-monitor.jpg',
  'Best Seller',
  ARRAY['12-lead ECG display', 'SpO2 & NIBP monitoring', '10-inch color touchscreen', 'Nurse call integration', 'USB data export'],
  '{"Display Size": "10.1 inches", "Battery Life": "4 hours", "Weight": "3.2 kg", "Connectivity": "Wi-Fi, LAN, USB", "Warranty": "2 years"}'
),
(
  'Infusion Pump',
  'infusion-pump',
  'ICU',
  'Our infusion pump delivers fluids, medications, and nutrients precisely. Features an anti-free-flow mechanism, occlusion detection, and a large backlit display for ICU and surgical use.',
  'Precision volumetric infusion pump for accurate drug delivery.',
  '/images/products/infusion-pump.jpg',
  'New',
  ARRAY['Anti-free-flow mechanism', 'Occlusion detection alarm', 'Backlit LCD display', 'Drug library with 500+ entries', 'Secondary piggyback delivery'],
  '{"Flow Rate Range": "0.1–999 mL/hr", "VTBI Range": "0.1–9999 mL", "Weight": "1.8 kg", "Alarm": "Audio + Visual", "Warranty": "2 years"}'
),
(
  'Surgical LED Light',
  'surgical-led-light',
  'Surgical',
  'A high-intensity, shadow-free LED surgical light with adjustable color temperature (3,500K–5,000K). Provides excellent visibility in the surgical field with minimal heat generation.',
  'Shadow-free surgical LED with adjustable color temperature.',
  '/images/products/surgical-light.jpg',
  null,
  ARRAY['Shadow-free illumination', 'Adjustable color temperature', '100,000-hour LED lifespan', 'Sterile handle included', 'Ceiling-mounted arm'],
  '{"Illuminance": "160,000 lux", "Color Temperature": "3500–5000K", "Color Rendering Index": ">95 Ra", "Arm Reach": "1,200 mm", "Warranty": "3 years"}'
),
(
  'Portable Ultrasound Scanner',
  'portable-ultrasound-scanner',
  'Diagnostic',
  'A lightweight, wireless ultrasound scanner that connects to tablets and smartphones. Ideal for emergency, obstetrics, and point-of-care use in clinics and hospitals.',
  'Compact wireless ultrasound for point-of-care diagnostics.',
  '/images/products/ultrasound.jpg',
  'Featured',
  ARRAY['Wireless connectivity', 'Compatible with iOS & Android', 'B-mode, M-mode, Color Doppler', '1-hour continuous scanning', 'IP67 waterproof rating'],
  '{"Weight": "280 g", "Probe Type": "Convex / Linear", "Depth Range": "2–30 cm", "Connectivity": "Wi-Fi 5GHz", "Warranty": "1 year"}'
),
(
  'Electric Hospital Bed',
  'electric-hospital-bed',
  'Rehabilitation',
  'Full-electric 4-section hospital bed with Trendelenburg, reverse Trendelenburg, head, and foot adjustments. Includes collapsible side rails, IV pole holder, and locking castors.',
  'Full-electric adjustable hospital bed with side rails.',
  '/images/products/hospital-bed.jpg',
  null,
  ARRAY['4-section articulation', 'Trendelenburg & reverse', 'Collapsible side rails', 'Locking castors', '500 kg load capacity'],
  '{"Bed Dimensions": "2,050 × 900 mm", "Height Range": "450–750 mm", "Load Capacity": "500 kg", "Mattress Included": "Yes", "Warranty": "2 years"}'
),
(
  'Autoclave Sterilizer',
  'autoclave-sterilizer',
  'Surgical',
  'A Class B tabletop autoclave with pre-vacuum and post-vacuum cycles for sterilizing hollow and porous instruments. Built-in printer for cycle record documentation.',
  'Class B tabletop autoclave with vacuum cycle for full sterilization.',
  '/images/products/autoclave.jpg',
  null,
  ARRAY['Class B vacuum cycle', 'Built-in printer', 'LCD touchscreen panel', 'Automatic door lock', 'Self-diagnostic system'],
  '{"Chamber Volume": "23 L", "Temperature": "134°C", "Pressure": "2.2 bar", "Cycle Time": "~30 minutes", "Warranty": "2 years"}'
);

-- Seed testimonials
insert into public.testimonials (quote, author, role, company) values
(
  'HealthRush has been our trusted equipment partner for over 5 years. Their products are reliable, and their after-sales support is exceptional.',
  'Dr. Maria Santos',
  'Chief of Medicine',
  'Metro General Hospital'
),
(
  'As a reseller, HealthRush gives us competitive pricing, fast delivery, and full technical support. Our clients are always satisfied.',
  'James Reyes',
  'Director',
  'MedTech Solutions Inc.'
),
(
  'The quality of their surgical equipment meets international standards. We''ve never had a compliance issue since partnering with HealthRush.',
  'Dr. Karen Lim',
  'Hospital Administrator',
  'St. Luke''s Medical Center'
);
