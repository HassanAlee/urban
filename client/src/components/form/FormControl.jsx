import Input from "./Input"

const FormControl = ({ control }) => {
    switch (control) {
        case "input":
            return <Input />
    }
}

export default FormControl