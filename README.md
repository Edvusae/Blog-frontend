# 📝 Frontend Blog Showcase (React-Only)

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-ID/deploy-status)](https://YOUR-NETLIFY-APP.netlify.app/)
[![Tests Passing](https://img.shields.io/badge/Tests-Passing-brightgreen)](./)
[![React Version](https://img.shields.io/badge/React-v18+-blue)](https://reactjs.org/)

## 👋 About This Project

This repository contains a **modern, frontend-only blog application** built with React. The project's core purpose is to showcase robust frontend development skills, including **component architecture**, **client-side routing**, **data manipulation**, and **comprehensive test automation**.

The application uses a **local mock data file** instead of a live backend, allowing for focused demonstration of UI development, interaction logic, and advanced testing techniques.

---

## ✨ Key Frontend Skills Practiced

* **Component Architecture:** Built reusable components for the Header, Post Card, Home Page, and Post Detail views.
* **Client-Side Routing:** Implemented **React Router** to manage navigation between the main blog list and individual post pages (`/posts/:id`).
* **Data Handling:** Successfully imported and manipulated local JavaScript objects (mock data) using array methods (`map`, `find`) to render dynamic content.
* **Responsive UI:** Styled using the **Bootstrap 5** framework to ensure a clean, modern, and mobile-friendly design.
* **Modern Tooling:** Built with **Vite** for a fast and efficient development workflow.
* **Comprehensive Testing:** Implemented a full test suite using **Vitest** and **React Testing Library (RTL)** to verify component behavior, form submission logic (with Axios mocking), and correct routing.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React.js** | Building the component-based UI |
| **Tooling** | **Vite** | Fast development and bundling |
| **Routing** | **React Router** | Managing client-side navigation |
| **Styling** | **Bootstrap 5** | Responsive and consistent UI styling |
| **Testing** | **Vitest / RTL** | Unit and Component testing |
| **Mocks** | **Axios / JSDOM** | Network and DOM simulation for testing |

---

## 🗺️ Project Roadmap (Status: Complete!)

| Status | Feature / Task |
| :--- | :--- |
| ✅ **Completed** | Set up initial React/Vite project structure and integrated Bootstrap. |
| ✅ **Completed** | Finalized **App.jsx** with correct client-side routing (`/`, `/posts/:id`, `/create`). |
| ✅ **Completed** | Built core components: **Header, PostCard, HomePage, PostPage, and CreatePostPage**. |
| ✅ **Completed** | Integrated **Vitest** and **React Testing Library** for test environment setup. |
| ✅ **Completed** | Implemented tests for **Header, HomePage, and App** (routing verification). |
| ✅ **Completed** | Implemented complex tests for **PostPage** (mocking `useParams`). |
| ✅ **Completed** | Implemented complex tests for **CreatePostPage** (mocking `axios` and `useNavigate`). |

## 🚀 Getting Started

Follow these steps to clone and run the project locally.

### Prerequisites

Ensure you have **Node.js** (which includes npm) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://your-repo-link-here.git](https://your-repo-link-here.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd your-blog-frontend
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **View the application:**
    Open your browser and navigate to `http://localhost:5173` to see the blog live.

### Running Tests

Execute the full testing suite (Unit, Component, and Routing tests):

```bash
npm run test