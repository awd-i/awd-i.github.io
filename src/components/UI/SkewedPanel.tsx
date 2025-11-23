import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SkewedPanelProps<T extends React.ElementType> {
    children: React.ReactNode;
    className?: string;
    innerClassName?: string;
    skew?: 'left' | 'right' | 'none';
    variant?: 'black' | 'white' | 'outline';
    as?: T;
}

export const SkewedPanel = <T extends React.ElementType = 'div'>({
    children,
    className,
    innerClassName,
    skew = 'left',
    variant = 'black',
    as,
    ...props
}: SkewedPanelProps<T> & React.ComponentPropsWithoutRef<T>) => {
    const Component = as || 'div';

    const baseStyles = 'relative p-4 transition-all duration-300';

    const variantStyles = {
        black: 'bg-black text-white border-2 border-white',
        white: 'bg-white text-black border-2 border-black',
        outline: 'bg-transparent text-white border-2 border-white',
    };

    const skewStyles = {
        left: '-skew-x-12',
        right: 'skew-x-12',
        none: '',
    };

    // Counter-skew for content to keep it upright
    const contentSkewStyles = {
        left: 'skew-x-12',
        right: '-skew-x-12',
        none: '',
    };

    return (
        <Component
            className={twMerge(
                baseStyles,
                variantStyles[variant],
                skewStyles[skew],
                className
            )}
            {...(props as any)}
        >
            <div className={twMerge(contentSkewStyles[skew], innerClassName)}>
                {children}
            </div>
        </Component>
    );
};
