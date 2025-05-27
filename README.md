Lead Generation System
======================
A simple lead generation system using React, Express, MySQL, and n8n.
Components
----------
- Frontend (React): Captures user lead information through a form.
- Backend (Express): Receives lead data and forwards it to n8n.
- n8n Workflow: Processes the data and stores it in MySQL.
- MySQL Database: Stores submitted leads.
Setup Instructions
------------------

Prerequisites:
- Node.js & npm
- MySQL
- n8n (self-hosted or cloud)
1. Frontend Setup (React)
 cd frontend
 npm install
 npm start
 Runs on http://localhost:3000



3. Backend Setup (Express)
 cd backend
 npm install
 node server.js
 Runs on http://localhost:5000


5. MySQL Setup
 Start MySQL.
 Create a database and table:
 CREATE DATABASE leads_db;
 USE leads_db;
 CREATE TABLE leads (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255),
 email VARCHAR(255),
 company VARCHAR(255),
 message TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );

 
6. n8n Workflow Setup
 Create a Webhook node (POST):
 URL: http://localhost:5678/webhook-test/webhook
 Add a Code node to parse the incoming string body:
 return [{
 json: JSON.parse($json.body)
 }];
 Add a MySQL node to insert data:
 INSERT INTO leads (name, email, company, message)
 VALUES ({{$json.name}}, {{$json.email}}, {{$json.company}}, {{$json.message}});

Data Flow
---------
1. User submits form on frontend.
2. React sends data to http://localhost:5000/.
3. Express backend forwards data to n8n webhook.
4. n8n parses, processes, and inserts data into MySQL.
Future Extensions
-----------------
- Add lead scoring and validation in n8n.
- Integrate with CRM systems like Salesforce or HubSpot.
- Add email notifications for new leads.
- Create admin dashboard to view leads.
- Add spam filtering & CAPTCHA.

Troubleshooting
---------------
- Ensure MySQL server is running and credentials are correct.
- Confirm n8n is running and the webhook is active.
- Check for CORS issues if React fails to submit.
- Use console.log() and n8n logs to debug data flow.
Contact
-------
For help or contributions, contact: 8247712515
Email: chakravarthi1223@gmail.com
