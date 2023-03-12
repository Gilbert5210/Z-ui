import { ExtractPropTypes } from "vue"

export const buttonProps = {
    color: {
        type: String,
        default: ''
    },

    size: {
        type: String,
        default: 'samll'
    }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>