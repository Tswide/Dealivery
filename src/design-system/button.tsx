
import clsx from "clsx";
import { Spinner } from "./spinner";
import { IconProps } from "../type/iconProps";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button = ({
    size="large", 
    variant="accent",
    icon,
    iconTheme="accent",
    iconPosition="right",
    disabled,
    isLoading,
    children,
    onClick,
}: Props) => {
    let variantStyles: string = "",
        sizeStyles: string = "",
        icoSize: number = 0;
        isLoading;

    switch (variant) {
        case "accent": //default
            variantStyles = "bg-primary-600 hover:bg-primary-500 text-white rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400 border border-gray-500 text-gray rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "ico":
            if (iconTheme === "accent") { //default
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full"
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-700 hover:bg-gray-600 text-primary rounded-full"
            }
    }

    switch (size) {
        case "small":
            sizeStyles = `text-sm font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-14 py-2"
            }`;
            icoSize = 18;
            break;
        case "medium":
            sizeStyles = `text-base font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-12 py-3"
            }`;
            icoSize = 20;
            break;
        case "large": // default
            sizeStyles = `text-sm font-medium sm:text-base ${
                variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-5 py-1 sm:px-20 sm: py-3"
            }`;
            icoSize = 24;
            break;
    }

    return (
        <button
            type="button"
            className={clsx(variantStyles, sizeStyles, icoSize, isLoading && "cursor-wait", "relative")}
            onClick={onClick} 
            disabled={disabled}
        >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {variant === "accent" || variant === "ico"
                        ? <Spinner size="small" variant="white"/> 
                        : <Spinner size="small" variant="primary"/>
                    }
                </div>
            )}
            <div className={clsx(isLoading && "invisible")}>
                {icon && variant === "ico" 
                ? (<icon.icon size={icoSize} />)
                : (<div className={clsx(icon && "flex items-center gap-1")}>
                    {icon && iconPosition === "left" && (
                        <icon.icon size={icoSize} />
                    )}
                    {children}
                    {icon && iconPosition === "right" && (
                        <icon.icon size={icoSize} />
                    )}
                </div>)
                }
            </div>
        </button>
    )
}