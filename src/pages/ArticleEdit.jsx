
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function ArticleEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titre, setTitre] = useState('');
  const [categorie, setCategorie] = useState('Architecture');
  const [contenu, setContenu] = useState('');
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState('');


  // Charger les informations de l'article
  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await api.get(`/articles/${id}`);

        setTitre(res.data.titre);
        setCategorie(res.data.categorie);
        setContenu(res.data.contenu);
      } catch (err) {
        setErreur('Erreur lors de la chargement de l\'article.');
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  // Envoyer les modifications au serveur
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/articles/${id}`, {
        titre,
        categorie,
        contenu
      });

      navigate(`/articles/${id}`);
    } catch (err) {
      alert("Erreur lors de la modification.");
    }
  };

  if (loading) return <p>Chargement de l'article...</p>;

  
    return (
    <div style={{
        maxWidth: '580px',
        margin: '0 auto',
        background: 'white',
        padding: '26px',
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
    }}>
        <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '16px'
        }}>
        Modifier un Ancien Article
        </h2>

        {erreur && (
        <p style={{
            background: '#fef2f2',
            color: '#b91c1c',
            padding: '10px',
            borderRadius: '6px',
            marginBottom: '12px'
        }}>
            {erreur}
        </p>
        )}

        <form
        onSubmit={handleSubmit}
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
        }}
        >
        <div>
            <label style={{
            display: 'block',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            marginBottom: '4px'
            }}>
            Titre
            </label>

            <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
            style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1'
            }}
            />
        </div>

        <div>
            <label style={{
            display: 'block',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            marginBottom: '4px'
            }}>
            Categorie
            </label>

            <select
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
            style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1'
            }}
            >
            <option value="Architecture">Architecture</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Cybersecurite">Cybersecurite</option>
            </select>
        </div>

        <div>
            <label style={{
            display: 'block',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            marginBottom: '4px'
            }}>
            Contenu
            </label>

            <textarea
            rows="4"
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
            required
            style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1'
            }}
            />
        </div>

        <button type="submit" className="btn-primary">
            Enregistrer les modifications
        </button>
        </form>
    </div>
    );

}
