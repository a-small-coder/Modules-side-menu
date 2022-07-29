import { IMainMenuBodyProps, SideMenuVariants } from "../types/side_menu.types";
import LeftMenuBody from "./MenuVariants/LeftMenuBody";

interface IBodyCreatorProps {
    body: IMainMenuBodyProps
}

function BodyCreator({body}: IBodyCreatorProps): JSX.Element{

    switch (body.bodyVariant) {
        case SideMenuVariants.MAIN_LEFT_MENU:
            return (
                <LeftMenuBody 
                    mainMenuData={body.mainMenuData}
                    bottomMenuData={body.bottomMenuData}
                    isFullWidth={body.isFullWidth}
                />
            )

        default:
            return (
                <h2>hello 2</h2>
            )
    }
}

export default BodyCreator;