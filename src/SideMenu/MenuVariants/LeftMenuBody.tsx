import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { IMenuData } from "../../types/side_menu.types";
import MenuItem from "../lib/MenuItem";

interface ILeftMenuBodyProps {
    mainMenuData: IMenuData[],
    bottomMenuData: IMenuData[],
    isFullWidth: boolean
}


function LeftMenuBody({ mainMenuData, bottomMenuData, isFullWidth }: ILeftMenuBodyProps): JSX.Element {

    const mainMenuItems = mainMenuData.map(el => (
        <MenuItem key={el.id} title={el.title} link={el.link} icon={el.icon} forFullWidth={isFullWidth} />
    ))

    const bottomMenuItems = bottomMenuData.map(el => (
        <MenuItem key={el.id} title={el.title} link={el.link} icon={el.icon} forFullWidth={isFullWidth} />
    ))

    return (
        <Flex flexDirection='column' flex='1'>
            <Flex flexDirection='column' flex='1'>
                {mainMenuItems}
            </Flex>

            <Flex justifySelf='flex-end' flexDirection='column'>

                {bottomMenuItems}

                <Example/>
            </Flex>
        </Flex>
    );
}

export default LeftMenuBody;

function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
  }