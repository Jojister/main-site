import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageProvider';
import productsData from '../data/products.json';
import imageMap from '../utils/imageMap';

const Portfolio = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const { prints, categories } = productsData;

  const filteredPrints = activeCategory === 'all' 
    ? prints 
    : prints.filter(print => print.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-page">
      <div className="portfolio-header">
        <h1 className="portfolio-title">
          {language === 'english' ? 'Portfolio' : 'ポートフォリオ'}
        </h1>
        <p className="portfolio-subtitle">
          {language === 'english' 
            ? 'A collection of my artwork spanning oil paintings, watercolors, photography, and graphic design.'
            : '油絵、水彩画、写真、グラフィックデザインにまたがる作品集。'
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
            {language === 'english' ? category.label : category.labelJp}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredPrints.map(item => (
          <div 
            key={item.id} 
            className="portfolio-item"
            onClick={() => setSelectedImage(item)}
          >
            <img src={imageMap[item.image]} alt={item.title} />
            <div className="portfolio-item-overlay">
              <h3>{language === 'english' ? item.title : item.titleJp}</h3>
              <span className="portfolio-item-category">
                {language === 'english' ? item.categoryLabel : item.categoryLabelJp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="lightbox-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img src={imageMap[selectedImage.image]} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h2>{language === 'english' ? selectedImage.title : selectedImage.titleJp}</h2>
              <p className="lightbox-category">
                {language === 'english' ? selectedImage.categoryLabel : selectedImage.categoryLabelJp}
              </p>
              <p className="lightbox-description">
                {language === 'english' ? selectedImage.description : selectedImage.descriptionJp}
              </p>
              <a href="/shop" className="lightbox-shop-link">
                {language === 'english' ? 'Purchase Print →' : 'プリントを購入 →'}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="portfolio-cta">
        <h2>{language === 'english' ? 'Interested in my work?' : '作品に興味がありますか？'}</h2>
        <p>
          {language === 'english' 
            ? 'Prints are available for purchase, or commission a custom piece.'
            : 'プリントの購入、またはカスタム作品の依頼が可能です。'
          }
        </p>
        <div className="portfolio-cta-buttons">
          <a href="/shop" className="cta-btn primary">
            {language === 'english' ? 'Visit Shop' : 'ショップへ'}
          </a>
          <a href="/shop#commissions" className="cta-btn secondary">
            {language === 'english' ? 'Commission Work' : '作品依頼'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;