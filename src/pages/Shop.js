import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';
import imageMap from '../utils/imageMap';
import useDialog from '../hooks/useDialog';

const Shop = () => {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const { prints, commissions, categories } = productsData;

  const closeProductModal = () => setSelectedProduct(null);
  const dialogRef = useDialog(Boolean(selectedProduct), closeProductModal);

  const filteredPrints = activeCategory === 'all' 
    ? prints 
    : prints.filter(print => print.category === activeCategory);

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      addToCart(selectedProduct, selectedSize);
      setSelectedProduct(null);
      setSelectedSize(null);
    }
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0]);
  };

  return (
    <section id="shop" className="shop-page">
      {/* Shop Header */}
      <div className="shop-header">
        <h1 className="shop-title">
          {t('Shop', 'ショップ')}
        </h1>
        <p className="shop-subtitle">
          {t('High-quality prints of original artwork. Each piece is printed on archival paper.', '高品質なオリジナルアートのプリント。各作品はアーカイバル紙に印刷されています。')
          }
        </p>
      </div>

      {/* Category Filter */}
      <div className="shop-filters">
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

      {/* Products Grid */}
      <div className="shop-grid">
        {filteredPrints.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={imageMap[product.image]} alt={product.title} />
              {product.featured && (
                <span className="product-badge">
                  {t('Featured', '注目')}
                </span>
              )}
            </div>
            <div className="product-info">
              <span className="product-category">
                {t(product.categoryLabel, product.categoryLabelJp)}
              </span>
              <h3>
                <button
                  type="button"
                  className="card-open-btn"
                  onClick={() => openProductModal(product)}
                >
                  {t(product.title, product.titleJp)}
                </button>
              </h3>
              <p className="product-price">
                {t(`From $${product.sizes[0].price}`, `$${product.sizes[0].price}から`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="product-modal" onClick={closeProductModal}>
          <div
            ref={dialogRef}
            className="product-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            tabIndex={-1}
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeProductModal}
              aria-label={t('Close', '閉じる')}
            >
              ✕
            </button>
            
            <div className="product-modal-grid">
              <div className="product-modal-image">
                <img src={imageMap[selectedProduct.image]} alt={selectedProduct.title} />
              </div>
              
              <div className="product-modal-details">
                <span className="product-category">
                  {t(selectedProduct.categoryLabel, selectedProduct.categoryLabelJp)}
                </span>
                <h2 id="product-modal-title">{t(selectedProduct.title, selectedProduct.titleJp)}</h2>
                <p className="product-description">
                  {t(selectedProduct.description, selectedProduct.descriptionJp)}
                </p>
                
                <div className="size-selector" role="group" aria-labelledby="size-selector-label">
                  <span id="size-selector-label" className="size-selector-label">{t('Select Size:', 'サイズを選択：')}</span>
                  <div className="size-options">
                    {selectedProduct.sizes.map(size => (
                      <button
                        key={size.size}
                        type="button"
                        aria-pressed={selectedSize?.size === size.size}
                        className={`size-btn ${selectedSize?.size === size.size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        <span className="size-label">{size.size}</span>
                        <span className="size-price">${size.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="product-modal-actions">
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    {t('Add to Cart', 'カートに追加')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Commissions Section */}
      <div id="commissions" className="commissions-section">
        <h2 className="commissions-title">
          {t('Commission Work', '作品依頼')}
        </h2>
        <p className="commissions-subtitle">
          {t('Looking for something unique? I create custom artwork tailored to your vision.', 'ユニークな作品をお探しですか？あなたのビジョンに合わせたカスタムアートを制作します。')
          }
        </p>

        <div className="commissions-grid">
          {commissions.types.map(type => (
            <div key={type.id} className="commission-card">
              <h3>{t(type.title, type.titleJp)}</h3>
              <p>{t(type.description, type.descriptionJp)}</p>
              <div className="commission-details">
                <span className="commission-price">
                  {t(`Starting at $${type.startingPrice}`, `$${type.startingPrice}から`)}
                </span>
                <span className="commission-timeline">
                  {t(type.timeline, type.timelineJp)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Contact */}
        <div className="commission-contact">
          <h3>{t('Ready to start?', '始める準備はできましたか？')}</h3>
          <p>
            {t('Get in touch to discuss your project. Include details about style, size, and timeline.', 'プロジェクトについてご相談ください。スタイル、サイズ、タイムラインの詳細をお知らせください。')
            }
          </p>
          <div className="commission-contact-buttons">
            <a href="mailto:jojister5@gmail.com" className="contact-btn email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {t('Email Me', 'メールする')}
            </a>
            <a href="https://www.instagram.com/jarakinn/" target="_blank" rel="noopener noreferrer" className="contact-btn instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              {t('DM on Instagram', 'インスタでDM')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;