import { useParams } from "react-router-dom";
import { Typography } from "../../../design-system/typography.tsx";
import CardPackage from "../components/card-package.tsx";
import { useCallback, useState } from "react";
import Modal from "../../../shared/components/modal.tsx";
import restaurentData from '../../../data/restaurents.json';
import { Button } from "../../../design-system/button.tsx";
import { v4 as uuidv4 } from 'uuid'; // Importer la bibliothèque uuid

//TODO mettre en place le drawer qui s'ouvre lors de l'ajout au panier
//TODO mettre l'addition et soustraction sur la modal a coter "d'ajouter au panier"
//TODO regler le soucis modal en version mobile
//TODO ajouter les nom des restaurent dans le panier
//TODO regler le soucis lorsque 2 menus sont similaire automatiquement incremnter de 1 l'articles

interface Ingredient {
    name: string;
    selected: boolean;
}

interface MenuItem {
    id: number;
    title: string;
    subtitle: string;
    price: string;
    allergens: string[];
    ingredients: Ingredient[];
}

interface RestaurantProps {
    id: number;
    title: string;
    subtitle: string;
    timeAsk: string;
    timeLivery: string;
    menus: MenuItem[];
}

export function RestaurentPageClient() {
    const { id } = useParams<{ id: string }>();
    const restaurantId = parseInt(id as string, 10);

    // Recherche du restaurant correspondant
    const restaurant: RestaurantProps = restaurentData.restaurants.find(r => r.id === restaurantId) as RestaurantProps;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);

    const handleCardClick = useCallback((menu: MenuItem) => {
        setSelectedMenu(menu);
        setIsModalOpen(true);
    }, []);

    if (!restaurant) {
        return <div>Restaurant not found</div>;
    }

    function handleIngredientChange(ingredientName: string) {
        if (selectedMenu) {
            setSelectedMenu({
                ...selectedMenu,
                ingredients: selectedMenu.ingredients.map(ingredient =>
                    ingredient.name === ingredientName
                        ? { ...ingredient, selected: !ingredient.selected }
                        : ingredient
                )
            });
        }
    }

    function addToCart() {
        if (!selectedMenu) return;

        const selectedIngredients = selectedMenu.ingredients.filter(ing => ing.selected).map(ing => ing.name);
        const removedIngredients = selectedMenu.ingredients.filter(ing => !ing.selected).map(ing => ing.name);
        const count: number = 1;
        const order = {
            id: uuidv4(), // Générer un identifiant unique pour chaque article
            menuId: selectedMenu.id,
            title: selectedMenu.title,
            price: selectedMenu.price,
            ingredients: selectedIngredients,
            removed: removedIngredients,
            count: count,
        };

        // Récupération du panier existant depuis le localStorage ou initialisation d'un tableau vide
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');

        cart.push(order);

        localStorage.setItem('cart', JSON.stringify(cart));
        setIsModalOpen(false);
    }

    return (
        <div>
            <a href="/menu">Retour en arrière</a>
            <header className="my-5">
                <Typography
                    variant="h1"
                    component="h1"
                    children={restaurant.title}
                />
                <Typography
                    variant="body-lg"
                    component="h2"
                    children={restaurant.subtitle}
                />
                {/*<Filter />*/}
            </header>
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
                {restaurant.menus.map((menu) => (
                    <div key={menu.id}>
                        <CardPackage
                            title={menu.title}
                            subtitle={menu.subtitle}
                            allergen={menu.allergens.join(" - ")}
                            price={menu.price}
                            onClick={() => handleCardClick(menu)}
                        />
                    </div>
                ))}
            </section>
            {isModalOpen && selectedMenu && (
                <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen}>
                    <Typography variant="h3" component="h3" children={selectedMenu.title}/>
                    <Typography variant="body-base" component="p" children={selectedMenu.subtitle}/>
                    <Typography variant="body-base" component="p" children={`Price: ${selectedMenu.price}`}/>
                    <Typography variant="body-base" component="p"
                                children={`Allergens: ${selectedMenu.allergens.join(", ")}`}/>
                    <div aria-hidden="true" className="inset-0 flex items-center py-5">
                        <div className="w-full border-t border-gray-300"/>
                    </div>
                    <fieldset>
                        <legend className="text-base font-semibold leading-6 text-gray-900">Ingredients</legend>
                        <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                            {selectedMenu.ingredients.map((ingredient, ingredientId) => (
                                <div key={ingredientId} className="relative flex items-start py-4">
                                    <div className="min-w-0 flex-1 text-sm leading-6">
                                        <label htmlFor={`ingredient-${ingredientId}`} className="select-none font-medium text-gray-900">
                                            {ingredient.name}
                                        </label>
                                    </div>
                                    <div className="ml-3 flex h-6 items-center">
                                        <input
                                            id={`ingredient-${ingredientId}`}
                                            name={`ingredient-${ingredient.name}`}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            checked={ingredient.selected}
                                            onChange={() => handleIngredientChange(ingredient.name)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <Button
                        children="Ajouter au panier"
                        onClick={addToCart}
                    />
                </Modal>
            )}
        </div>
    );
}
