import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Makes an overlay behave like a modal dialog while `isOpen` is true:
// focus moves into it, Tab stays inside, Escape calls `onClose`, and focus
// returns to whatever opened it once it closes.
const useDialog = (isOpen, onClose) => {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const focusables = () =>
      dialog ? [...dialog.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null) : [];

    (focusables()[0] || dialog)?.focus();

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusables();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (opener && typeof opener.focus === 'function' && document.contains(opener)) {
        opener.focus();
      }
    };
  }, [isOpen]);

  return dialogRef;
};

export default useDialog;
