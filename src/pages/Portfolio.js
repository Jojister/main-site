import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import productsData from '../data/products.json';
import imageMap from '../utils/imageMap';
import useDialog from '../hooks/useDialog';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const { prints, categories } = productsData;

  const closeLightbox = () => setSelectedImage(null);
  const dialogRef = useDialog(Boolean(selectedImage), closeLightbox);

  const filteredPrints = activeCategory === 'all' 
    ? prints 
    : prints.filter(print => print.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-page">
      <div className="portfolio-header">
        <h1 className="portfolio-title">
          {t('Portfolio', 'ポートフォリオ')}
        </h1>
        <p className="portfolio-subtitle">
          {t('A collection of my artwork spanning oil paintings, watercolors, photography, and graphic design.', '油絵、水彩画、写真、グラフィックデザインにまたがる作品集。')
          }
        </p>
      </div>

      {/* Category Filter */}
      <div className="portfolio-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {t(category.label, category.labelJp)}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredPrints.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={imageMap[item.image]} alt={item.title} loading="lazy" decoding="async" />
            <div className="portfolio-item-overlay">
              <h3>
                <button
                  type="button"
                  className="card-open-btn"
                  onClick={() => setSelectedImage(item)}
                >
                  {t(item.title, item.titleJp)}
                </button>
              </h3>
              <span className="portfolio-item-category">
                {t(item.categoryLabel, item.categoryLabelJp)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            ref={dialogRef}
            className="lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            tabIndex={-1}
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label={t('Close', '閉じる')}
            >
              ✕
            </button>
            <img src={imageMap[selectedImage.image]} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h2 id="lightbox-title">{t(selectedImage.title, selectedImage.titleJp)}</h2>
              <p className="lightbox-category">
                {t(selectedImage.categoryLabel, selectedImage.categoryLabelJp)}
              </p>
              <p className="lightbox-description">
                {t(selectedImage.description, selectedImage.descriptionJp)}
              </p>
              <Link to="/shop" className="lightbox-shop-link">
                {t('Purchase Print →', 'プリントを購入 →')}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="portfolio-cta">
        <h2>{t('Interested in my work?', '作品に興味がありますか？')}</h2>
        <p>
          {t('Prints are available for purchase, or commission a custom piece.', 'プリントの購入、またはカスタム作品の依頼が可能です。')
          }
        </p>
        <div className="portfolio-cta-buttons">
          <Link to="/shop" className="cta-btn primary">
            {t('Visit Shop', 'ショップへ')}
          </Link>
          <Link to="/shop#commissions" className="cta-btn secondary">
            {t('Commission Work', '作品依頼')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;