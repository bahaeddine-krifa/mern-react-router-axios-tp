import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categorieActive, setCategorieActive] = useState('Tous');

  const articlesFiltres = categorieActive === 'Tous'
  ? articles
  : articles.filter(
      (article) => article.categorie === categorieActive
    );

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await api.get('/articles');
        setArticles(response.data);
      } catch (err) {
        setError('Impossible de contacter le serveur Express (port 5000).');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>Catalogue des Articles ({articlesFiltres.length})</h2>
        <Link to="/nouveau" className="btn-primary">+ Nouvel Article</Link>
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {['Tous', 'Architecture', 'Front-End', 'Back-End', 'Cybersecurite'].map((categorie) => (
          <button
            key={categorie}
            onClick={() => setCategorieActive(categorie)}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor:
                categorieActive === categorie ? '#2563eb' : '#ffffff',
              color:
                categorieActive === categorie ? '#ffffff' : '#333333'
            }}
          >
            {categorie}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {articlesFiltres.length === 0 ? (
          <div className='card'>
          <p>Aucun article dans cette catégorie.</p>
          </div>
        ) : (
        articlesFiltres.map((article) => (
          <div key={article.id} className="card">
            <div>
              <span className="badge">{article.categorie}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '10px 0 6px' }}>{article.titre}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Auteur : {article.auteur}</p>
              <p style={{ marginTop: '10px', color: '#334155' }}>{article.contenu}</p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
              <Link to={`/articles/${article.id}`} style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>
                Lire le detail &rarr;
              </Link>
            </div>
          </div>
        ))
      
      )}
      </div>
    </div>
  );
}
