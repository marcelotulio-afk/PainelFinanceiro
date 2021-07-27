import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import "./home.css"
import {userData} from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";


export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="Analítica do Usuário" grid dataKey="Usuário Ativo"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}