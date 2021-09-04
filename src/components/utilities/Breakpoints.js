import { useMediaQuery } from 'react-responsive';

export const Breakpoints = () => {
  // sm - md
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });

  // lg - xl
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  });

  return { isTabletOrMobile, isDesktopOrLaptop };
};
