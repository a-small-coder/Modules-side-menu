import { Box, Button, Icon} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ILinkWrapperIcon } from "../../types/side_menu.types";


interface MenuItemProps extends ILinkWrapperIcon {
    forFullWidth: boolean
}

function MenuItem({ title, link, icon, forFullWidth }: MenuItemProps): JSX.Element {

    return (
        <Link to={link}>
            <Box _hover={{ bg: '#1E252F' }} borderRadius='8px' mb='2' p='0'>
                <Button
                    leftIcon={
                        <Icon
                            as={icon}
                            fontSize='28px'
                            mr={forFullWidth ? { base: '10px', md: '15px' } : "0"}
                        />
                    }
                    variant='void'
                    p="5px 10px"
                    pr={forFullWidth ? '10px' : '0'}
                >
                    <motion.div
                        animate={{
                            width: forFullWidth ? "100%" : "0px",
                            opacity: forFullWidth ? '1' : '0',
                            transition: {
                                duration: 1,
                                type: "ease",
                            },
                        }}
                    >
                        <Box overflow='hidden'>
                            {title}
                        </Box>
                    </motion.div>

                </Button>
            </Box>
        </Link>
    )
}

export default MenuItem