import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Membros Novos</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Edwin Keller</span>
                        <span className="widgetSmUserTitle">Engenheiro de Software</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
