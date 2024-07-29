import { Layout } from 'components/Layout/Layout';
import { FavoritesPage } from 'pages/FavoritesPage';
import { HomePage } from 'pages/HomePage';
import { TeachersPage } from 'pages/TeachersPage';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};
