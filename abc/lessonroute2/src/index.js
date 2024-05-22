import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import styles from "./app.module.css";
import NotFound from "./components/not-found/not-found";
import TaskDetail from "./components/task-detail/TaskDetail";
import { Todo } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">
          <div className={styles.navLink}>Главная</div>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<TaskDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
