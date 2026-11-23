import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await api.get('/articles/' + id);
        setArticle(response.data);
      } catch (err) {
        setError('Impossible de contacter le serveur Express (port 5000).');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/articles/${id}`);
      navigate('/articles');
    } catch (err) {
      alert("Erreur lors de la suppression de l'article.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  if (!article) {
    return (
      <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '8px', color: '#b91c1c' }}>
        <h3>Chargement ou article #{id} non charge...</h3>
        <Link to="/articles" style={{ color: '#2563eb', display: 'inline-block', marginTop: '10px' }}>&larr; Retour au catalogue</Link>
      </div>
    );
  }

  return (
    <article style={{ background: 'white', padding: '28px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <span className="badge">{article.categorie}</span>
      <h1 style={{ fontSize: '1.8rem', margin: '12px 0 8px' }}>{article.titre}</h1>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>Par <strong>{article.auteur}</strong> &bull; ID #{article.id}</p>
      <p style={{ lineHeight: 1.7, color: '#1e293b' }}>{article.contenu}</p>
      <div style={{ marginTop: '24px', paddingTop: '14px', borderTop: '1px solid #e2e8f0' }}>
        <Link to="/articles" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>&larr; Retour a la liste</Link>
      </div>
      <button
        onClick={handleDelete}
        style={{
          marginLeft: '730px',
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Supprimer
      </button>
      <Link
        to={`/articles/${id}/edit`}
        style={{
          marginLeft: '10px',
          padding: '10px 16px',
          backgroundColor: '#2563eb',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '6px'
        }}
      >
        Modifier
      </Link>
    </article>
  );
}
