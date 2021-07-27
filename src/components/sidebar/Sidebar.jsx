import "./sidebar.css";
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Painel</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analítica
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Vendas
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu Rápido</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Usuários
                        </li>
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />
                            Produtos
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transações
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />
                            Relatórios
                        </li>                        
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notificações</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Correio
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Mensagens
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Gerenciamento
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analítica
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Relatórios
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
