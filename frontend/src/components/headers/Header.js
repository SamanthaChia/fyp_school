import React, {
    useState,
    useRef,
    useEffect,
    useContext,
    useCallback,
} from "react";
import _ from "lodash";
import ProfilePic from "../boards/ProfilePic";
import { Link } from "react-router-dom";
import useAxiosGet from "../../hooks/useAxiosGet";
import useBlurSetState from "../../hooks/useBlurSetState";
import { handleBackgroundBrightness } from "../../static/js/util";
import globalContext from "../../context/globalContext";
import NotificationsModal from "../modals/NotificationsModal";


const Header = (props) => {
    const { authUser, board } = useContext(globalContext);
    const { logout } = useContext(globalContext);


    const [showNotifications, setShowNotifications] = useState(false);
    useBlurSetState(".label-modal", showNotifications, setShowNotifications);

    const { data: notifications, setData: setNotifications } = useAxiosGet(
        "/notifications/"
    );

    const onBoardPage = props.location.pathname.split("/")[1] === "b";
    const [isBackgroundDark, setIsBackgroundDark] = useState(false);
    useEffect(handleBackgroundBrightness(board, setIsBackgroundDark), [board]);

    const logoutFunc = () => {
        try {
            logout();
          }
          catch (err) {
            console.log("something happened while logging out");
          }
    }

    return (
        <>
            <header
                className={`header${isBackgroundDark && onBoardPage
                        ? " header--transparent"
                        : ""
                    }`}
            >
                <div className="header__section">
                    <ul className="header__list">
                        <li className="header__li">
                            <Link to={`/`}>
                                KanbanFYP
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header__section">
                    <ul className="header__list">
                        <li className="header__li header__li--profile">
                            <ProfilePic user={authUser} large={true} />
                            Hello, {authUser.full_name.replace(/ .*/, "")}
                        </li>
                        <li className="header__li header__li--logout">
                            <button onClick={() => logoutFunc()}>
                                <p>Logout</p>
                            </button>
                        </li>
                        <li className="header__li header__li--notifications">
                            <button onClick={() => setShowNotifications(true)}>
                                <i className="fal fa-bell"></i>
                            </button>
                            {(notifications || []).find(
                                (notification) => notification.unread === true
                            ) && <div className="header__unread"></div>}
                        </li>
                    </ul>
                </div>
                <div className="out-of-focus"></div>
            </header>
            {showNotifications && (
                <NotificationsModal
                    setShowModal={setShowNotifications}
                    notifications={notifications}
                    setNotifications={setNotifications}
                />
            )}
        </>
    );
};

export default Header;
