import classes from '@/utils/classes'
import styles from './styles.module.scss'
import { ButtonProps, ButtonVariant } from './types'

const Button = ({
    variant = 'primary',
    text,
    onClick,
    isFullWidth = false
}: ButtonProps) => {
    const variantsClassesMap = new Map<ButtonVariant, string>([
        ['primary', styles['btn-primary']],
        ['secondary', styles['btn-secondary']],
    ])

    return (
        <button
            className={classes([
                styles.btn,
                variantsClassesMap.get(variant),
                isFullWidth ? styles.fullWidth : null,
            ])}
            onClick={onClick}
            data-testid="button"
        >
            {text}
        </button>
    )
}

export default Button