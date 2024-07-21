import Checkbox from "./Checkbox"
import Input from "./Input"
import Radio from "./Radio"
import Select from "./Select"
import TextArea from './TextArea'

const FormControl = ({ control, ...rest }) => {
    switch (control) {
        case "input":
            return <Input {...rest} />
        case "textarea":
            return <TextArea {...rest} />
        case "checkbox":
            return <Checkbox {...rest} />
        case 'radio':
            return <Radio{...rest} />
        default: return null
    }
}

export default FormControl