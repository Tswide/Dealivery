import { clsx } from 'clsx';
import React from "react";

interface Props {
    variant ?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "body-badge"
    component ?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div" | "span";
    theme?: "black" | "gray" | "white" | "primary" | "secondary";
    weight?: "regular" | "medium";
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Typography = ({
   variant = "body-base",
   component: Component = "p",
   theme = "black",
   weight = "regular",
   children,
   className,
   onClick,
}: Props) => {
    let variantStyles: string = "", colorStyles: string = "";

    switch (variant) {
        case "h1":
            variantStyles = "text-xl md:text-3xl"
            break;
        case "h2":
            variantStyles = "text-lg md:text-2xl"
            break;
        case "h3":
            variantStyles = "text-lg md:text-xl"
            break;
        case "body-lg":
            variantStyles = "text-sm md:text-lg"
            break;
        case "body-base":
            variantStyles = "text-base"
            break;
        case "body-sm":
            variantStyles = "text-sm"
            break;
        case "body-badge":
            variantStyles = "text-badge"
            break;
    }

    switch (theme) {
        case "black": //default
            colorStyles = "text-gray-900";
            break
        case "gray":
            colorStyles = "text-gray-700";
            break
        case "white":
            colorStyles = "text-white";
            break
        case "primary":
            colorStyles = "text-primary-600";
            break
    }

    return (
        <Component
            className={clsx(
                variantStyles,
                colorStyles,
                weight === "medium" && "font-medium",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </Component>
    )
}