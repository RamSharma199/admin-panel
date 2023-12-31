import "./featerInfo.css";
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../../RequestMethod";

function FeaterInfo() {
const [income, setincome] = useState([{}])
const [perc, setperc] = useState(0)
useEffect(()=>{
const getIncome = async()=>{
const res = await userRequest.get("/orders/income")
setincome(res.data)
console.log(income,"income")
setperc((res.data[1].total*100)/(res.data[0].total*100)-100)

}
getIncome()
},[])
console.log("income")



  return (
    <div className="featered">
      <div className="feateredItem">
        <span className="feateredTitle">Revenu</span>
        <div className="feteredITemContainor">
            <span className="feteredMoney">$ {income[0].total}</span>
            <span className="feateredMoneyPrie">{Math.floor(perc)} {perc<0?<ArrowDownwardOutlinedIcon className="featerIcon negative"/>: <ArrowUpwardOutlinedIcon className="featerIcon"/>} </span>
        </div>
        <span className="featereSub">Comapre to last Month</span>
      </div>

      <div className="feateredItem">
        <span className="feateredTitle">Sales</span>
        <div className="feteredITemContainor">
            <span className="feteredMoney">$ 532</span>
            <span className="feateredMoneyPrie">-1.4 <ArrowDownwardOutlinedIcon className="featerIcon negative"/>  </span>
        </div>
        <span className="featereSub">Comapre to last Month</span>
      </div>
      <div className="feateredItem">
        <span className="feateredTitle">Cost</span>
        <div className="feteredITemContainor">
            <span className="feteredMoney">$225</span>
            <span className="feateredMoneyPrie">+11.4 <ArrowUpwardOutlinedIcon className="featerIcon"/>  </span>
        </div>
        <span className="featereSub">Comapre to last Month</span>
      </div>
    </div>
  );
}

export default FeaterInfo;
