# 📝 Multi-Step Form Wizard (React)

A responsive multi-step form wizard built with **React** and **useReducer** for centralized state management. It includes real-time validation, a progress bar, and an optional preferences step, culminating in a review and submission.

## 🚀 Features

- Multi-step form with validation
- Centralized form state using `useReducer`
- Step-based navigation
- Progress bar indicating form steps
- Responsive and modern design using CSS
- Form reset on successful submission

## 📁 Project Structure

```
my-form-wizard-app
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ components
│  │  ├─ Review.jsx
│  │  ├─ Step1.jsx
│  │  ├─ Step2.jsx
│  │  └─ Step3.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ reducer
│  │  └─ formReducer.js
│  └─ styles
│     └─ App.css
└─ vite.config.js
```


## 🧠 Concepts Used

- **React Functional Components**
- **useReducer Hook** for managing multi-step form data
- **Form Validation** (custom logic)
- **Component-based architecture**
- **Conditional rendering**
- **Responsive UI**


## 🛠️ How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/Puneeth-24/FormWizard.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🙌 Acknowledgements

This project was created as a learning experience with React's useReducer and multi-step form patterns.


