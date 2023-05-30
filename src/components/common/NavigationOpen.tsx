import React, { useEffect } from 'react';
import { items } from './NavItems';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './NavigationOpen.css';

interface NavigationOpenProps {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
}

const NavigationOpen: React.FC<NavigationOpenProps> = ({ isOpen, onChange }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove('noscroll');
    };
  }, [isOpen]);

  return (
    <div className={`Menu ${isOpen && 'open'}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        <AiOutlineClose />
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <Link to={item.itemLink} key={index} onClick={() => onChange(false)}>
            {item.itemText}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationOpen;
