import style from "./index.module.css";

const Button = ({ text, type }) => {
  return (
    <button className={type == "M" ? style.button : style.mini}>
      {type == "M" ? text :
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6072 11.0098L18.75 17.1526L17.1527 18.75L11.0099 12.6072C9.86278 13.4326 8.47985 13.9365 6.96827 13.9365C3.11964 13.9365 0 10.8169 0 6.96824C0 3.11961 3.11964 -3.05176e-05 6.96827 -3.05176e-05C10.8169 -3.05176e-05 13.9365 3.11961 13.9365 6.96824C13.9365 8.47981 13.4327 9.86275 12.6072 11.0098ZM6.96827 2.14405C4.29889 2.14405 2.14408 4.29885 2.14408 6.96824C2.14408 9.63762 4.29889 11.7924 6.96827 11.7924C9.63765 11.7924 11.7925 9.63762 11.7925 6.96824C11.7925 4.29885 9.63765 2.14405 6.96827 2.14405Z" fill="white" />
        </svg>}
    </button>
  );
}

export default Button;