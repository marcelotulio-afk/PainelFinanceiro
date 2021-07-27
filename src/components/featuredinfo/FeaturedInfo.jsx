import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Receita</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>  
                <span className="featuredSub">Comparação com o mês anterior</span>        
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Vendas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-1.4
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>  
                <span className="featuredSub">Mês anterior como base do índice</span>        
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Custo</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">+2.4
                        <ArrowUpward className="featuredIcon" />
                    </span>
                </div>  
                <span className="featuredSub">Comparação com o mês anterior</span>        
            </div>
        </div>
    );
}
