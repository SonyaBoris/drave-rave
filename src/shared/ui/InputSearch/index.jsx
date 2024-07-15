import style from "./index.module.css";

const InputSearch = ({ type, label, placeholder }) => {
   return (
      <div className={style.block}>
         <label className={style.label}>{label}</label>
         <input className={style.input} type={type} placeholder={placeholder} />
      </div>
   );
}

export default InputSearch;