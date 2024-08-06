import { useNavigate } from "react-router-dom";
import CardRestaurent from "../components/card-restaurent.tsx";
import restaurentData from '../../../data/restaurents.json';

interface MenuProps {
    id: number;
    timeAsk: string;
    subtitle: string;
    title: string;
    timeLivery: string;
    menus: {
        title: string;
        subtitle: string;
        price: string;
        allergens: string[];
    }[];
}


export function MenuPageClient() {
    const navigate = useNavigate();

    const handleRestaurantClick = (restaurant: MenuProps & { id: number }) => {
        navigate(`/restaurent/${restaurant.id}`);
    };

    return (
        <main className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
            {restaurentData.restaurants.map((restaurant: MenuProps, index: number) => (
                <div key={index} onClick={() => handleRestaurantClick(restaurant)}>
                    <CardRestaurent
                        title={restaurant.title}
                        subtitle={restaurant.subtitle}
                        timeAsk={restaurant.timeAsk}
                        timeLivery={restaurant.timeLivery}
                    />
                </div>
            ))}
        </main>
    );
}
