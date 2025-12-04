import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageProvider';
import { useCart } from '../scripts/CartContext';
import productsData from '../data/products.json';
import imageMap from '../utils/imageMap';

const Shop = () => {
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const { prints, commissions, categories } = productsData;

  const filteredPrints = activeCategory === 'all' 
    ? prints 
    : prints.filter(print => print.category === activeCategory);

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      const productWithImage = {
        ...selectedProduct,
        image: imageMap[selectedProduct.image]
      };
      addToCart(productWithImage, selectedSize);
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
          {language === 'english' ? 'Shop' : 'ショップ'}
        </h1>
        <p className="shop-subtitle">
          {language === 'english' 
            ? 'High-quality prints of original artwork. Each piece is printed on archival paper.'
            : '高品質なオリジナルアートのプリント。各作品はアーカイバル紙に印刷されています。'
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
            {language === 'english' ? category.label : category.labelJp}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="shop-grid">
        {filteredPrints.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => openProductModal(product)}
          >
            <div className="product-image-wrapper">
              <img src={imageMap[product.image]} alt={product.title} />
              {product.featured && (
                <span className="product-badge">
                  {language === 'english' ? 'Featured' : '注目'}
                </span>
              )}
            </div>
            <div className="product-info">
              <span className="product-category">
                {language === 'english' ? product.categoryLabel : product.categoryLabelJp}
              </span>
              <h3>{language === 'english' ? product.title : product.titleJp}</h3>
              <p className="product-price">
                {language === 'english' ? 'From' : ''} ${product.sizes[0].price}
                {language === 'japanese' && 'から'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="product-modal" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
            >
              ✕
            </button>
            
            <div className="product-modal-grid">
              <div className="product-modal-image">
                <img src={imageMap[selectedProduct.image]} alt={selectedProduct.title} />
              </div>
              
              <div className="product-modal-details">
                <span className="product-category">
                  {language === 'english' ? selectedProduct.categoryLabel : selectedProduct.categoryLabelJp}
                </span>
                <h2>{language === 'english' ? selectedProduct.title : selectedProduct.titleJp}</h2>
                <p className="product-description">
                  {language === 'english' ? selectedProduct.description : selectedProduct.descriptionJp}
                </p>
                
                <div className="size-selector">
                  <label>{language === 'english' ? 'Select Size:' : 'サイズを選択：'}</label>
                  <div className="size-options">
                    {selectedProduct.sizes.map(size => (
                      <button
                        key={size.size}
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
                    {language === 'english' ? 'Add to Cart' : 'カートに追加'}
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
          {language === 'english' ? 'Commission Work' : '作品依頼'}
        </h2>
        <p className="commissions-subtitle">
          {language === 'english' 
            ? 'Looking for something unique? I create custom artwork tailored to your vision.'
            : 'ユニークな作品をお探しですか？あなたのビジョンに合わせたカスタムアートを制作します。'
          }
        </p>

        <div className="commissions-grid">
          {commissions.types.map(type => (
            <div key={type.id} className="commission-card">
              <h3>{language === 'english' ? type.title : type.titleJp}</h3>
              <p>{language === 'english' ? type.description : type.descriptionJp}</p>
              <div className="commission-details">
                <span className="commission-price">
                  {language === 'english' ? 'Starting at' : ''} ${type.startingPrice}
                  {language === 'japanese' && 'から'}
                </span>
                <span className="commission-timeline">
                  {language === 'english' ? type.timeline : type.timelineJp}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Commission Contact */}
        <div className="commission-contact">
          <h3>{language === 'english' ? 'Ready to start?' : '始める準備はできましたか？'}</h3>
          <p>
            {language === 'english' 
              ? 'Get in touch to discuss your project. Include details about style, size, and timeline.'
              : 'プロジェクトについてご相談ください。スタイル、サイズ、タイムラインの詳細をお知らせください。'
            }
          </p>
          <div className="commission-contact-buttons">
            <a href="mailto:jojister5@gmail.com" className="contact-btn email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {language === 'english' ? 'Email Me' : 'メールする'}
            </a>
            <a href="https://www.instagram.com/jarakinn/" target="_blank" rel="noopener noreferrer" className="contact-btn instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              {language === 'english' ? 'DM on Instagram' : 'インスタでDM'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;