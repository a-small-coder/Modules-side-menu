import { Box } from '@chakra-ui/react';
import getLeftMenuData from './Data/mainMenu';
import SideMenu from './SideMenu/SideMenu';
import { ISideMenuProps } from './types/side_menu.types';

function App() {

  const menuData: ISideMenuProps = getLeftMenuData()

  return (
    <Box h='100%' display='flex' overflow="hidden">
        <SideMenu 
            type={menuData.type}
            menuBody={menuData.menuBody}
            heading={menuData.heading}
          />
    </Box>
  );
}

export default App;
