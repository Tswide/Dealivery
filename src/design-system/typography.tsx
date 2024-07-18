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
   // theme = "black",
   weight = "regular",
   children,
   className,
   onClick,
}: Props) => {
    // let variantStyles: string = "", colorStyles: string = "";
    let variantStyles: string = "";

    switch (variant) {
        case "h1":
            variantStyles = "text-lg md:text-xl sm:text-xl"
            break;
        case "h2":
            variantStyles = "text-lg md:text-xl sm:text-xl"
            break;
        case "body-lg":
            variantStyles = "text-base md:text-lg"
            break;
        case "body-base":
            variantStyles = "text-base"
            break;
        case "body-sm":
            variantStyles = "text-sm"
            break;
    }

    // switch (theme) {
    //     case "black": //default
    //         colorStyles = "text-gray";
    //         break
    //     case "gray":
    //         colorStyles = "text-gray-700";
    //         break
    //     case "white":
    //         colorStyles = "text-white";
    //         break
    //     case "primary":
    //         colorStyles = "text-primary";
    //         break
    //     case "secondary":
    //         colorStyles = "text-secondary";
    //         break
    // }

    return (
        <Component
            className={clsx(
                variantStyles,
                // colorStyles,
                weight === "medium" && "font-medium",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </Component>
    )
}