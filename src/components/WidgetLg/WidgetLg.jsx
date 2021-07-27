import "./widgetLg.css"

export default function widgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Últimas Transações</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Cliente</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Valor</th>
                    <th className="widgetLgTh">Status</th>                                                                           
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Austin</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>                    
                    <td className="widgetLgStatus"><Button type="Approved"/></td>                     
                </tr>
            </table>
        </div>
    )
}