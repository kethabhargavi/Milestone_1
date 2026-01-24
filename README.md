# Milestone 1 – Flask Web Application (Local Setup)

## Project Description
This milestone focuses on developing the core backend of a web application using Flask. The application is executed locally and uses in-memory Python data structures for storage. This phase validates application logic and routing before integrating cloud services.

## Objectives
- Initialize a Flask backend application
- Implement basic routing and HTML templates
- Enable user registration and login functionality
- Store and retrieve data using Python lists/dictionaries
- Run and test the application locally

## Technology Stack
- Python
- Flask
- HTML
- Localhost (development server)

## Project Structure
milestone1_app/
├── app.py
├── requirements.txt
├── templates/
     ├── index.html
     ├── register.html
     ├── login.html
     └── dashboard.html

## How to Run
1. Install dependencies:
   pip install -r requirements.txt
2. Start the Flask server:
   python app.py
3. Open the application in a browser:
   http://127.0.0.1:5000

## Features Implemented
- Home page
- User registration
- User login
- Session-based dashboard
- Logout functionality

## Notes
- This milestone uses local data storage only
- No database or cloud services are used
- Intended for development and testing purposes

## Milestone Status
Completed
