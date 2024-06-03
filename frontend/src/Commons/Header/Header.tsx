import { useState, useEffect } from 'react';
import { screenSizes } from '../../Constants/ScreenSize';
import { StyledHeader, Logo, Title } from './Header.style';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= parseInt(screenSizes.desktop, 10));
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(window.innerWidth);
  return (
    <StyledHeader>
      <Logo src={isDesktop ? '../../../public/assets/BCID-logo-desktop.png' : '../../../public/assets/BCID-logo-mobile.png'} alt="bc-logo" />
      <Title>Better Berries</Title>
    </StyledHeader>
  );
};

export default Header;
