import style from "./index.module.css";

const Input = ({placeholder}) => {
  return ( 
    <input placeholder={placeholder} className={style.input} type="text" />
   );
}
 
export default Input;