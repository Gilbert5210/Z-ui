import { defineComponent } from "vue";
import {buttonProps} from './const'

export default defineComponent({
    name: 'ZButton',

    props: buttonProps,

    setup (props) {
        return () => (
            <div class={'z-button'}>
                <span>按钮组件</span>
                <span> {props.size} </span>
                <span> {props.color} </span>
            </div>
        )
    }
})