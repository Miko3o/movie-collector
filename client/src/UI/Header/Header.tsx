import './Header.css'
import { useNavigate, redirect } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="ui-header-wrapper">
            <h1 className="ui-header-siteTitle">
                Movie Collector
            </h1>
            <ul className="ui-header-options-wrapper">
                <li id="ui-header-option"
                    onClick={() => {navigate("/")}}>
                    Home
                </li>
                <li id="ui-header-option">
                    My Profile
                </li>
            </ul>
        </div>
    );
}