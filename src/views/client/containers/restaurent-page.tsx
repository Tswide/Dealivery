import {Typography} from "../../../design-system/typography.tsx";
import Filter from "../components/filter.tsx";

export function RestaurentPageClient() {
    return (
        <main>
            <a href="/menu">retour en arriere</a>
            <header>
                <Typography
                    variant="h2"
                    component="h1"
                    children="L'Arborizo Italian Kitchen"
                />
                <div className="flex gap-2.5">
                    <Typography
                        variant="body-sm"
                        component="h1"
                        children="Rue Saint-Gilles 27, Liege"
                    />
                    <p>|</p>
                    <Typography
                        variant="body-sm"
                        component="h1"
                        children="From Restaurant to Office"
                    />
                </div>
            </header>
            <section>
                <Filter />
            </section>
        </main>
    );
}
