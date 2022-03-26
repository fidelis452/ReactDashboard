import "./WidgetLg.css"

export default function widgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://imgs.search.brave.com/qw3SljjkYfYaSEjD4Xv_UUSkTHD28wU_epwidW71ilA/rs:fit:838:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/RzZjeDl4RTdYM215/X3Z2WVJEVHp3SGFF/TSZwaWQ9QXBp" alt="" className="widgetLgImage" />
            <span className="widgetLgName">Fidelis Waweru</span>
          </td>
          <td className="widgetLgDate">26 march 2022</td>
          <td className="widgetLgAmount">$2,000</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://imgs.search.brave.com/qw3SljjkYfYaSEjD4Xv_UUSkTHD28wU_epwidW71ilA/rs:fit:838:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/RzZjeDl4RTdYM215/X3Z2WVJEVHp3SGFF/TSZwaWQ9QXBp" alt="" className="widgetLgImage" />
            <span className="widgetLgName">Fidelis Waweru</span>
          </td>
          <td className="widgetLgDate">26 march 2022</td>
          <td className="widgetLgAmount">$2,000</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://imgs.search.brave.com/qw3SljjkYfYaSEjD4Xv_UUSkTHD28wU_epwidW71ilA/rs:fit:838:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/RzZjeDl4RTdYM215/X3Z2WVJEVHp3SGFF/TSZwaWQ9QXBp" alt="" className="widgetLgImage" />
            <span className="widgetLgName">Fidelis Waweru</span>
          </td>
          <td className="widgetLgDate">26 march 2022</td>
          <td className="widgetLgAmount">$2,000</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
            </td>
        </tr>
      </table>
    </div>
  )
}
