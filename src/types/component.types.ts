import { ComponentPropsWithoutRef, ElementType, JSXElementConstructor } from 'react';

export interface IObject {
    [key: string]: unknown;

    length?: never;
}

// A more precise version of just ComponentPropsWithoutRef on its own
export type TPropsOf<As extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>> =
    JSX.LibraryManagedAttributes<As, ComponentPropsWithoutRef<As>>;

type AsProp<As extends ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: As;
};

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type TExtendableProps<ExtendedProps = IObject, OverrideProps = IObject> = OverrideProps &
    Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type TInheritableElementProps<As extends ElementType, Props = IObject> = TExtendableProps<
    TPropsOf<As>,
    Props
>;

/**
 * A more sophisticated version of `TInheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type TPolymorphicComponentProps<
    As extends ElementType,
    Props = IObject
> = TInheritableElementProps<As, Props & AsProp<As>>;
