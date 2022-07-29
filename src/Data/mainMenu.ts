import {
    FiBarChart2 as analytic,
    FiLogOut,
    FiMap as map,
} from "react-icons/fi"
import {
    RiSecurePaymentLine as secure
} from 'react-icons/ri'

import {
    GiCctvCamera as camera
} from 'react-icons/gi'

import {
    MdOutlineBiotech as bioAnalytic,
    MdPeopleOutline as SIZ
} from 'react-icons/md'
// local images
import logoIcon from '../assets/img/icon.svg';
import logoTitle from '../assets/img/logo.svg';

// types
import { IMenuData, IIconHeading, HeadingTypes, ISideMenuProps, SideMenuVariants } from "../types/side_menu.types";


function getLeftMenuData (): ISideMenuProps{

    const mainMenuData: IMenuData[] = [
        {
            id: 1,
            link: '/analytic',
            title: 'analytic',
            icon: analytic
        },
        {
            id: 2,
            link: 'bio-analytic',
            title: 'bio analytic',
            icon: bioAnalytic
        },
        {
            id: 3,
            link: 'SIZ',
            title: 'Страница СИЗ',
            icon: SIZ
        },
        {
            id: 4,
            link: 'security',
            title: 'security',
            icon: secure
        },
        {
            id: 5,
            link: 'camera',
            title: 'camera',
            icon: camera
        },
        {
            id: 6,
            link: 'maps',
            title: 'map',
            icon: map
        },
        {
            id: 7,
            link: 'personal',
            title: 'personal',
            icon: SIZ
        },
    ]

    const bottomMenuData: IMenuData[] = [
        {
            id: 1,
            link: 'logout',
            title: 'Выйти',
            icon: FiLogOut
        }
    ]

    const heading: IIconHeading = {
        type: HeadingTypes.ICON_AND_IMAGE,
        isFullWidth: true,
        icon: logoIcon,
        logoImage: logoTitle
    }

    return {
        type: "left",
        menuBody: {
            bodyVariant: SideMenuVariants.MAIN_LEFT_MENU,
            mainMenuData,
            bottomMenuData,
            isFullWidth: true,
        },
        heading
    }
}

export default getLeftMenuData