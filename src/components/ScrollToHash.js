import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't scroll to #anchors on navigation. This scrolls to the
// element named in the hash (e.g. /#about, /shop#commissions), or to the top
// of the page when there is no hash.
const ScrollToHash = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const element = document.getElementById(hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToHash;
