import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'white'
export type ISize = 'small' | 'medium' | 'large'

export type buttonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
]

export const props = {
    type: {
        type: String as PropType<buttonTypes>,
        default: 'default'
    },
    size: {
        type: String as PropType<ISize>,
        default: 'medium'
    },
    plain: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: "",
    },
}

export default defineComponent({
    name: "ViButton",
    props,
    transformOn: true,
    setup(props, { slots }) {
        const buttonColor = (type: String) => {
            switch (type) {
                case 'default':
                    return 'white';
                case 'primary':
                    return 'blue';
                case 'success':
                    return 'green';
                case 'warning':
                    return 'yellow';
                case 'info':
                    return 'gray';
                case 'danger':
                    return 'red';
            }
        }

        const buttonBgColor = (type: String, plain: Boolean) => {
            if (type == 'default') {
                if (plain) return buttonColor(type)
                else return 'blue-100'
            } else {
                if (plain) return buttonColor(type) + '-500'
                else return buttonColor(type) + '-400'
            }
        }
        
        const buttonBorder = (type: String) => {
            if (type == 'default') return '#DCDFE6'
            else return buttonColor(type) + '-300'
        }
        
        const buttonHoverBorder = (type: String, plain: Boolean) => {
            if (type == 'default') {
                if (plain) return 'blue-500'
                else return 'blue-300'
            }
            return buttonColor(type) + '-300'
        }

        const size = {
            small: {
                x: "3",
                y: "0.5",
                text: "sm"
            },
            medium: {
                x: "3",
                y: "1",
                text: "base"
            },
            large: {
                x: "4",
                y: "1.5",
                text: "lg"
            },
        }

        const buttonActiveStyle = (type: String) => {
            if(type == 'default') {
                return 'border-blue-500'
            }
            else {
                return 'bg-' + buttonColor(type) + '-600'
            }
        }

        let styles = `
            py-${props.circle? '2': size[props.size].y}
            px-${props.circle? '2': size[props.size].x}
            font-500
            rounded-${props.round ? '4' : '1'}
            rounded-${props.circle ? '50%' : '0'}
            text-${props.type == 'default' ? '#606266' : (props.plain ? buttonColor(props.type) + "-500" : "white")}
            hover:text-${props.type == 'default' ? 'blue-400' : 'white'}
            bg-${buttonColor(props.type)}${props.type == 'default' ? '' : (props.plain ? '-100' : '-500')}
            hover:bg-${buttonBgColor(props.type, props.plain)}
            border-1
            border-${buttonBorder(props.type)}
            hover:border-${buttonHoverBorder(props.type, props.plain)}
            cursor-pointer
            text-${size[props.size].text}
            m-1
            box-border
            active:${buttonActiveStyle(props.type)}
        `
        return () => <button class={styles}
        >
            {props.icon != "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
            {slots.default ? slots.default() : ''}
        </button>
    }
})