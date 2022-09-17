import styles from './button.module.css';
import { TPolymorphicComponentProps } from '../../types/component.types';

export const Button = ({ children, ...props }: TPolymorphicComponentProps<'button', {}>) => {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
};
