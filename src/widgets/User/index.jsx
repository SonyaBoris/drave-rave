import { Modal } from "@/features/Modal";
import style from "./index.module.css";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";

const User = ({ closeModal }) => {
  return (
    <Modal>
      <div className={style.overlay}></div>
      <div className={style.modal}>
        <button className={style.button} onClick={closeModal}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.72414L1.54242 0.19157L30 28.4674L28.4576 30L0 1.72414Z" fill="#101010" />
            <path d="M1.90231 29.1571L0.321338 27.5862L28.0848 0L29.6658 1.57088L1.90231 29.1571Z" fill="#101010" />
          </svg>
        </button>
        <h3>Вход</h3>
        <form  className={style.form}>
          <Input placeholder="Введите e-mail или телефон" />
          <Input placeholder="Введите пароль"/>
          <div className={style.forgive}>
            <div>
              <input type="checkbox" />
              <label>Запомнить  меня</label>
            </div>
            <button>Забыли пароль?</button>
          </div>
          <Button text="Войти" type="M"/> 
          <div>
            <span>Нет аккаунта?</span>
            <button>Регистация</button>
          </div>
        </form>

      </div>
    </Modal>
  );
}

export default User;