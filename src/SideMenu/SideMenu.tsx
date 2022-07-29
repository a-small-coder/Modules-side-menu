import { useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";

// icons
import {
    FiChevronRight as rightArrow,
    FiChevronLeft as leftArrow
} from "react-icons/fi"

// types
import { IconType } from "react-icons";
import { ISideMenuProps, SideMenuVariants } from "../types/side_menu.types";

// components
import BodyCreator from "./BodyCreator";
import HeadingCreator from "./HeadingCreator";


function SideMenu({ type, menuBody, heading }: ISideMenuProps) {

    const [isFullWidth, setIsFullWidth] = useState<boolean>(true)

    const hideMenu = () => {
        setIsFullWidth(!isFullWidth)
    }

    const sideHeading = { ...heading, isFullWidth}
    const body = {...menuBody, isFullWidth} 

    const setArrowIcon = (): IconType => {
        if (type === 'left'){
            return isFullWidth ? leftArrow : rightArrow
        }
        return isFullWidth ? rightArrow : leftArrow
    } 

    const getWidth = () => {
        switch (menuBody.bodyVariant) {
            case SideMenuVariants.MAIN_LEFT_MENU:
                if (isFullWidth) return "320px"
                return "78px"
            default:
                return "12px"
        }
        
    }

    const getPadding = () => {
        switch (menuBody.bodyVariant) {
            case SideMenuVariants.MAIN_LEFT_MENU:
                return { base: '8px 10px', md: '15px 15px' }
            default:
                return "0px"
        }
    }

    const getIconPosition = (direction: string) => {
        switch (direction) {
            case "left":
                if (type === "left") return "calc(100% - 12px)"
                return "none"
            case "right":
                if (type === "right" && isFullWidth) return "calc(100% - 12px)"
                if (type === "right" && !isFullWidth) return "calc(100% - 0px)"
                if (type === 'left') return "none"
                return "none"
            default:
                return "none"
        }
    }

    return (
        <Box bg='#0E1420' w={getWidth()} p={getPadding()} position='relative' transition='all 1s ease 0s'>

            <Flex flexDirection='column' h='100%' overflow='hidden'>

                <HeadingCreator heading={sideHeading}/>

                <BodyCreator body={body}/>
                
                

            </Flex>                    

            <IconButton
                aria-label={isFullWidth ? 'hide sidebar' : 'show sidebar'}
                as={setArrowIcon()}
                position='absolute'
                top='50%'
                left={getIconPosition("left")}
                right={getIconPosition("right")}
                padding='0'
                minW='24px'
                w='24px'
                h='24px'
                borderRadius='50%'
                bg='#9C71FC'
                _hover={{ bg: '#343270' }}
                onClick={hideMenu}
            />

        </Box>
    );
}

export default SideMenu;

