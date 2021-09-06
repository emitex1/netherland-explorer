import { useState } from 'react';

const useLeftDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return {isDrawerOpen, toggleDrawer};
}

export default useLeftDrawer;
