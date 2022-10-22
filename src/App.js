import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DiscussionGroupContent from "./Components/DiscussionGroupContent";
import Navbar from "./Components/Navbar";
import CategoriesPage from "./Pages/CategoriesPage";
import DetailLearningPage from "./Pages/DetailLearningPage";
import DetailNewsPage from "./Pages/DetailNewsPage";
import DetailRecommendationPage from "./Pages/DetailRecommendationPage";
import GroupDiscussionPage from "./Pages/GroupDiscussionPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NewsPage from "./Pages/NewsPage";
import ProfilePage from "./Pages/ProfilePage";
import RecommendationPage from "./Pages/RecommendationPage";
import RegisterPage from "./Pages/RegisterPage";
import YourLearningPage from "./Pages/YourLearningPage";

const App = () => {
  const [authedUser, setAuthedUser] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  const onLoginHandler = (user) => {
    setAuthedUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  if (!authedUser) {
    return (
      <div className="app">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<LoginPage onLogin={onLoginHandler} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/your-learning" element={<YourLearningPage />} />
          <Route path="/learning/:id" element={<DetailLearningPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<DetailNewsPage />} />
          <Route path="/recommendation" element={<RecommendationPage />} />
          <Route
            path="/recommendation/:id"
            element={<DetailRecommendationPage />}
          />
          <Route path="/categories" element={<CategoriesPage />} />

          <Route path="/group-discussion" element={<GroupDiscussionPage />}>
            <Route path=":id" element={<DiscussionGroupContent />} />
          </Route>

          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
