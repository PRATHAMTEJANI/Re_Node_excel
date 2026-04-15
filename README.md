# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# 📊 React + Node + Excel Project

A simple full-stack project where a React form sends data to a Node.js backend, and the data is stored in an Excel file.

---

# 🚀 Project Goal

* Learn frontend (React form)
* Learn backend (Node + Express)
* Understand connection (API)
* Store data in Excel (.xlsx)

---

# 📁 Project Structure

```
rejsexc/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
└── frontend/
    ├── src/
    │   └── App.js
    ├── package.json
```

---

# ⚙️ STEP 1: Backend Setup

## 📌 Create backend folder

```
mkdir backend
cd backend
npm init -y
```

## 📌 Install packages

```
npm install express cors xlsx
```

## 📌 Create file

👉 Create: `server.js`

## 📌 Paste backend code

* Express server
* API `/submit`
* Excel read/write logic

## 📌 Run backend

```
node server.js
```

👉 Server runs on: `http://localhost:5000`

---

# ⚛️ STEP 2: Frontend Setup

## 📌 Create React app

```
npx create-react-app frontend
cd frontend
```

## 📌 Create/Edit file

👉 Open: `src/App.js`

## 📌 Paste frontend code

* Form (name, email)
* fetch POST request
* connect to backend

## 📌 Run frontend

```
npm start
```

👉 App runs on: `http://localhost:3000`

---

# 🔗 CONNECTION FLOW (IMPORTANT)

1. User fills form in React
2. React sends POST request:

   ```
   http://localhost:5000/submit
   ```
3. Node backend receives data
4. Data saved into Excel file
5. Response sent back to frontend
6. Alert shown to user

---

# 📊 OUTPUT

* Excel file created:

  ```
  backend/data.xlsx
  ```
* Data stored like:

  * name
  * email

---

# 🧠 HOW CONNECTION WORKS

Frontend (React)
↓ fetch()
Backend (Node API)
↓
Excel File (.xlsx)

---

# ❗ IMPORTANT NOTES

* Always run backend first
* Then run frontend
* Ports:

  * React → 3000
  * Node → 5000

---

# 🐞 COMMON ERRORS

## ❌ npm start error (ENOENT)

👉 React app not created properly

## ❌ Cannot connect backend

👉 Check backend is running on port 5000

## ❌ Excel not created

👉 Check xlsx package installed

---

# 🚀 FUTURE IMPROVEMENTS

* Add phone number field
* Show saved data in UI
* Add delete/edit feature
* Replace Excel with MongoDB

---

# 🎯 FINAL UNDERSTANDING

* React = UI (form)
* Node = API (logic)
* Excel = Database (storage)

👉 This is your first full-stack project 🎉
