-- Insert initial data into the accounts table admin and user roles
INSERT INTO accounts 
(full_name, email, phone_no, password, location, role, created_at, modify_at)
VALUES
-- 👑 Admins (5)
('Admin One', 'admin1@example.com', '9000000001', 'adminPass1!', 'Chennai', 'admin', NOW(), NOW()),
('Admin Two', 'admin2@example.com', '9000000002', 'adminPass2@', 'Madurai', 'admin', NOW(), NOW()),
('Admin Three', 'admin3@example.com', '9000000003', 'adminPass3#', 'Coimbatore', 'admin', NOW(), NOW()),
('Admin Four', 'admin4@example.com', '9000000004', 'adminPass4$', 'Salem', 'admin', NOW(), NOW()),
('Admin Five', 'admin5@example.com', '9000000005', 'adminPass5%', 'Trichy', 'admin', NOW(), NOW()),

-- 👤 Users (15)
('Suthan', 'suthan@example.com', '9000000006', 'userPass1!', 'Chennai', 'user', NOW(), NOW()),
('Hareesh', 'hareesh@example.com', '9000000007', 'userPass2@', 'Madurai', 'user', NOW(), NOW()),
('Priya', 'priya@example.com', '9000000008', 'userPass3#', 'Coimbatore', 'user', NOW(), NOW()),
('Kavya', 'kavya@example.com', '9000000009', 'userPass4$', 'Salem', 'user', NOW(), NOW()),
('Siva', 'siva@example.com', '9000000010', 'userPass5%', 'Trichy', 'user', NOW(), NOW()),
('Aravind', 'aravind@example.com', '9000000011', 'userPass6&', 'Erode', 'user', NOW(), NOW()),
('Mani', 'mani@example.com', '9000000012', 'userPass7*', 'Tirunelveli', 'user', NOW(), NOW()),
('Kumar', 'kumar@example.com', '9000000013', 'userPass8(', 'Nagercoil', 'user', NOW(), NOW()),
('Vijay', 'vijay@example.com', '9000000014', 'userPass9)', 'Thanjavur', 'user', NOW(), NOW()),
('Anand', 'anand@example.com', '9000000015', 'userPass10_', 'Karur', 'user', NOW(), NOW()),
('Raj', 'raj@example.com', '9000000016', 'userPass11+', 'Erode', 'user', NOW(), NOW()),
('Ramesh', 'ramesh@example.com', '9000000017', 'userPass12-', 'Vellore', 'user', NOW(), NOW()),
('Saravanan', 'saravanan@example.com', '9000000018', 'userPass13=', 'Tirupur', 'user', NOW(), NOW()),
('Gopi', 'gopi@example.com', '9000000019', 'userPass14~', 'Dindigul', 'user', NOW(), NOW()),
('Sankar', 'sankar@example.com', '9000000020', 'userPass15^', 'Kanyakumari', 'user', NOW(), NOW());
