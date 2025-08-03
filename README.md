# Medical-care-App:-

# Output:-

https://github.com/user-attachments/assets/2850ba6c-e0ea-4022-acb9-4cc6a78b912c

# Output(Drive Link):- https://drive.google.com/file/d/15yg9LzW5up4ufuvhCzSxlj4xoSQW_bIz/view?usp=sharing




# 🏥 Medical Care App

A full-stack web application built to simplify online healthcare services, enabling patients to search for doctors, view profiles, book appointments, and manage their bookings in a clean, user-friendly interface.

## 🔗 GitHub Repository

[https://github.com/PSaiPrathap/Medical-Care-App](https://github.com/PSaiPrathap/Medical-Care-App)

---

## ⚙️ Tools & Libraries Used

### 🔧 Frontend:

* **React.js** – JavaScript library for building UI
* **React Router DOM** – Client-side routing
* **Tailwind CSS** – Utility-first CSS framework
* **React Icons** – Icon library
* **react-loader-spinner** – Loader components for async states

### 🔧 Backend:

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework for Node.js
* **MongoDB Atlas** – Cloud-hosted NoSQL database
* **Mongoose** – MongoDB ODM for schema modeling
* **Cors & dotenv** – For configuration and secure environment management

---

## 🧠 Improvements with More Time

If given more time, I would enhance the app in the following ways:

* **Authentication System**: Add secure login/logout for patients and doctors using JWT or OAuth.
* **Admin Panel**: Enable admin to manage users, doctors, and appointments.
* **Payment Integration**: Use Razorpay/Stripe for paid appointment booking.
* **Appointment Reminders**: Add email/SMS notification for booked appointments.
* **Doctor Availability**: Include calendar scheduling and real-time availability tracking.
* **Responsive UI Enhancements**: Optimize UI for tablets and large screens.
* **Unit Testing**: Add Jest or React Testing Library for component and backend API testing.

---

## 🚧 Challenges Faced & Solutions

### 1. **MongoDB Circular JSON Error**

* **Challenge**: Encountered a circular structure error when attempting to stringify MongoDB objects.
* **Solution**: Avoided logging the full MongoDB client object, used `.toJSON()` on returned data or filtered out problematic properties.

### 2. **Frontend-Backend Integration**

* **Challenge**: Ensuring seamless data fetch from backend APIs and handling CORS issues.
* **Solution**: Properly configured `cors` middleware on the backend and ensured all API endpoints return correct status and JSON response.

### 3. **Form Data Not Saving to DB**

* **Challenge**: Booked appointment data wasn't persisting directly to the database.
* **Solution**: Temporarily stored appointment data on a separate `/BookedAppointment` page and displayed it dynamically using React state.

---



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
