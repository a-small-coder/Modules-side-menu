import { IconType } from "react-icons";


export interface ILinkWrapper {
  title: string,
  link: string
}

export interface ILinkWrapperIcon extends ILinkWrapper {
  icon: IconType
}

// for body

export enum SideMenuVariants {
    MAIN_LEFT_MENU = "MAIN_LEFT_MENU",
    CAMERAS_MENU = "CAMERAS_MENU",
}

export interface ISideMenuProps{
    type: "left" | "right",
    menuBody: IMainMenuBodyProps
    heading: TSideHeading
}

export interface IMainMenuBodyProps {
    bodyVariant: SideMenuVariants.MAIN_LEFT_MENU,
    mainMenuData: IMenuData[],
    bottomMenuData: IMenuData[],
    isFullWidth: boolean
}

export interface IMenuData extends ILinkWrapperIcon {
    id: number
}

// for heading

export type TSideHeading = IIconHeading | ITitleHeading

export enum HeadingTypes {
    ICON_AND_IMAGE = "ICON_AND_IMAGE",
    ONLY_TEXT = "ONLY_TEXT"
}

export interface IIconHeading {
    type: HeadingTypes.ICON_AND_IMAGE
    isFullWidth: boolean,
    icon: string,
    logoImage: string
}

export interface ITitleHeading {
    type: HeadingTypes.ONLY_TEXT
    isFullWidth: boolean,
    title: string
}