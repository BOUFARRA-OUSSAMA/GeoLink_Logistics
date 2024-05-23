


## Getting Started

Certainly! Here are step-by-step instructions to set up and run your project locally:

### Prerequisites:

1. **Git:**
   - Make sure you have Git installed. If not, download and install it from [git-scm.com](https://git-scm.com/).

2. **MongoDb:**
   - Install MongoDb from ([https://www.mongoDb.org/](https://www.mongodb.com/try/download/community)).
   - Connect to the server created .
   - Ensure MongoDb is using port 5000.

3. **Node JS:**
   - Install NVM from [nodejs.com/npm](https://nodejs.org/en/download/package-manager).

### Backend Setup:

1. **Clone the Project:**
   ```bash
   git clone <repository_url>
   cd <project_folder>
   ```

2. **Install Backend Dependencies:**
   - Open a terminal in the backend project folder.
   - Run the following commands:
     ```bash
     npm install jwt-decode
     npm install jsonwebtoken
     npm install express dotenv google-auth-library
     npm install bcryptjs
     npm install uuid
     npm install firebase
     ```

3. **Run Backend:**
   - Start your Mongodb server.
   - Run the application. The database and entities will be created automatically.
   - When it works it gonna show listening on port 5000.

### Frontend Setup:

1. **Install Node.js and React:**
   - Open a new terminal for the frontend project.
   - Ensure Npm is installed.
   - Install React CLI globally: `npm install -g create-react-app`.

2. **Install Frontend Dependencies:**
   - Run the following commands in the frontend project folder:
     ```bash
     npm install
     ```

   - If you encounter errors during installation, use the following command:
     ```bash
     npm install --save --legacy-peer-deps
     ```

3. **Run Frontend:**
   - After installing dependencies, start the React development server:
     ```bash
     npm start
     ```

   - Access the frontend at [http://localhost:3000/](http://localhost:3000/) in your browser.

Now, your full-stack project should be up and running locally. If you encounter any issues during setup, check the console logs for error messages and ensure that all dependencies and prerequisites are correctly installed.




