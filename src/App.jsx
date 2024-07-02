import { FavoritesPage } from 'pages/FavoritesPage';
import { HomePage } from 'pages/HomePage';
import { WelcomePage } from 'pages/WelcomePage';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
