import"./FeaturedInfo.css";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

export default function featuredInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredItemTitle">Revevue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,000</span>
                <span className="featuredMoneyRate">-12.5 <ArrowDownward className="featuredIcon negative"/> </span>
            </div>
            <span className="featuredSub">Compared to Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredItemTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,000,000</span>
                <span className="featuredMoneyRate">+12.5 <ArrowDownward className="featuredIcon negative"/> </span>
            </div>
            <span className="featuredSub">Compared to Last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredItemTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,000</span>
                <span className="featuredMoneyRate">+2.5 <ArrowUpward className="featuredIcon"/> </span>
            </div>
            <span className="featuredSub">Compared to Last month</span>
        </div>
        
    </div>
  )
}
