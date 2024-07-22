import CardRestaurent from "../components/card-restaurent.tsx";

const restaurants = [
    {
        title: "L'Arborizo",
        subtitle: "Italian Food",
        timeAsk: "J-2 boarding",
        timeLivery: "12 min delivery"
    },
    {
        title: "Chez Pierre",
        subtitle: "French Cuisine",
        timeAsk: "Order now",
        timeLivery: "20 min delivery"
    },
    {
        title: "Sushi Master",
        subtitle: "Japanese Sushi",
        timeAsk: "J-1 boarding",
        timeLivery: "15 min delivery"
    },
    {
        title: "Taco Town",
        subtitle: "Mexican Tacos",
        timeAsk: "Order now",
        timeLivery: "10 min delivery"
    },
    {
        title: "Burger Bliss",
        subtitle: "American Burgers",
        timeAsk: "J-3 boarding",
        timeLivery: "25 min delivery"
    }
];

export function MenuPageClient() {
    return (
        <main className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
            {restaurants.map((restaurant, index) => (
               <a href="/restaurent">
                   <CardRestaurent
                       key={index}
                       title={restaurant.title}
                       subtitle={restaurant.subtitle}
                       timeAsk={restaurant.timeAsk}
                       timeLivery={restaurant.timeLivery}
                   />
               </a>
            ))}
        </main>
    );
}
