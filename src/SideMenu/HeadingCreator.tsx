import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { HeadingTypes, TSideHeading } from "../types/side_menu.types"


interface IHeadingProps {
    heading: TSideHeading
}

function HeadingCreator({ heading }: IHeadingProps) {

    switch (heading.type) {
        case HeadingTypes.ICON_AND_IMAGE:
            return (
                <Flex mb='10' p='0px' alignItems='flex-start'>
                    <Image
                        src={heading.icon}
                        h="40px"
                        ml='5px'
                        mr={heading.isFullWidth ? { base: '10px', md: '15px' } : '0'}
                        mb={heading.isFullWidth ? '0' : '8px'}
                    />
                    <Box overflow='hidden' opacity={heading.isFullWidth ? '1' : '0'}>
                        <Image src={heading.logoImage} h="48px" w="120px" />
                    </Box>

                </Flex>
            )

        case HeadingTypes.ONLY_TEXT:
            return (
                <Flex mb='10' p='0px' alignItems='flex-start'>
                    <Box overflow='hidden' opacity={heading.isFullWidth ? '1' : '0'}>
                    <motion.div
                        animate={{
                            width: heading.isFullWidth ? "100%" : "0px",
                            opacity: heading.isFullWidth ? '1' : '0',
                            transition: {
                                duration: 1,
                                type: "ease",
                            },
                        }}
                    >
                        <Heading>{heading.title}</Heading>
                        </motion.div>
                    </Box>

                </Flex>
            )

        default:
            return (
                    <Flex mb='10' p='0px' alignItems='flex-start'>
                        <Heading>
                            side menu
                        </Heading>
    
                    </Flex>
                )
    }
}

export default HeadingCreator;