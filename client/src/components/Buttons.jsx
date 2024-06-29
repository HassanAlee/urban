export const ButtonOutlined = ({ text }) => {
  return (
    <button className="btn btn-outline uppercase border-white border-2 text- rounded-none text-white hover:rounded-md">{text}</button>
  )
}
export const ButtonFilled = ({ text, optClasses = "", ...rest }) => {
  return <button className={`btn btn-neutral mx-auto rounded-none bg-[#024e82] uppercase font-normal px-6 hover:rounded-md ${optClasses}`} {...rest}>{text}</button>
}