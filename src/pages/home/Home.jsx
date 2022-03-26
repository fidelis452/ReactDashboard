import "./Home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import WidgetSm from "../../components/widgetSmall/WidgetSm"
import WidgetLg from "../../components/widgetLarge/WidgetLg"
import { userdata } from "../../Data"
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userdata} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
