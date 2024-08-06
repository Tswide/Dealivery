import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminShell } from "./shared/containers/admin-shell.tsx";
import {MenuPageClient} from "./views/client/containers/menu-page.tsx";
import {OrderPageClient} from "./views/client/containers/order-page.tsx";
import {DashboardPageClient} from "./views/client/containers/dashboard-page.tsx";
import {RestaurentPageClient} from "./views/client/containers/restaurent-page.tsx";

function App() {
    return (
        <Router>
            <AdminShell>
                <Routes>
                    <Route path="/" element={<DashboardPageClient />} />
                    <Route path="/menu" element={<MenuPageClient />} />
                    <Route path="/order" element={<OrderPageClient />} />
                    <Route path="/restaurent/:id" element={<RestaurentPageClient />} />
                </Routes>
            </AdminShell>
        </Router>
    );
}

export default App;

