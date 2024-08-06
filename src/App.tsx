import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminShell } from "./shared/containers/admin-shell.tsx";
import {MenuPageClient} from "./views/client/containers/menu-page.tsx";
import {RestaurentPageClient} from "./views/client/containers/restaurent-page.tsx";

function App() {
    return (
        <Router basename="/Dealivery">
            <AdminShell>
                <Routes>
                    <Route path="/" element={<MenuPageClient />} />
                    <Route path="/restaurent/:id" element={<RestaurentPageClient />} />
                </Routes>
            </AdminShell>
        </Router>
    );
}

export default App;

