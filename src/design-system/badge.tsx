
import clsx from "clsx";
import { IconProps } from "../type/iconProps";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "ico";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    children: React.ReactNode;
    onClick?: () => void;
}

export const Badge = ({
    size="large", 
    variant="accent",
    icon,
    iconTheme="accent",
    iconPosition="right",
    children,
    onClick,
}: Props) => {
    let variantStyles: string = "",
        sizeStyles: string = "",
        icoSize: number = 0;

    switch (variant) {
        case "accent": //default
            variantStyles = "bg-primary-600 hover:bg-primary-500 text-white rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400 border border-gray-500 text-gray rounded";
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
            sizeStyles = `text-badge font-medium ${
                variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-2 py-1"
            }`;
            icoSize = 24;
            break;
    }

    return (
        <div
            className={clsx(variantStyles, sizeStyles, icoSize, "relative")}
            onClick={onClick} 
        >
            <div>
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
        </div>
    )
}