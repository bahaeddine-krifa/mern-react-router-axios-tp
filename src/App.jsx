import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Accueil from './pages/Accueil';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import ArticleCreate from './pages/ArticleCreate';
import ArticleEdit from './pages/ArticleEdit';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>

        <Route index element={<Accueil />} />

        <Route path="articles" element={<ArticleList />} />

        <Route path="articles/:id/edit" element={<ArticleEdit />} />

        <Route path="articles/:id" element={<ArticleDetail />} />

        <Route path="nouveau" element={<ArticleCreate />} />


        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}
