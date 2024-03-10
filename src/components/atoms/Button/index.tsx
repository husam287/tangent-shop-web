import classes from '@/utils/classes'
import styles from './styles.module.scss'
import { ButtonProps, ButtonVariant } from './types'

const Button = ({
    variant = 'primary',
    shape = 'normal',
    text,
    onClick,
    isFullWidth = false,
    prefix,
}: ButtonProps) => {
    const variantsClassesMap = new Map<ButtonVariant, string>([
        ['primary', styles['btn-primary']],
        ['secondary', styles['btn-secondary']],
    ])

    const isRounded = shape === 'rounded'

    return (
        <button
            className={
                classes([
                    styles.btn,
                    variantsClassesMap.get(variant),
                    isFullWidth ? styles.fullWidth : null,
                    isRounded ? styles['btn-rounded'] : null
                ])
            }
            onClick={onClick}
            data-testid="button"
        >
            {prefix}
            {text}
        </button>
    )
}

export default Button