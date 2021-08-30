import { useMediaQuery } from 'react-responsive';

export const Breakpoints = () => {
  // sm - md
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });

  // lg
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  });

  // xl
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });

  return { isTabletOrMobile, isDesktopOrLaptop, isBigScreen };
};
