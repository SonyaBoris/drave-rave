import { Modal } from "@/features/Modal";
import style from "./index.module.css";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/Button";
import Transition from "@/shared/ui/Transition";
import TransitionModal from "@/shared/ui/TransitionModal";

const User = ({ closeModal }) => {
  return (
    <Modal>
      <Transition>
        <div className={style.overlay} onClick={closeModal}></div>
      </Transition>
      <TransitionModal>
        <div className={style.modal}>
          <button className={style.button} onClick={closeModal}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.72414L1.54242 0.19157L30 28.4674L28.4576 30L0 1.72414Z" fill="#101010" />
              <path d="M1.90231 29.1571L0.321338 27.5862L28.0848 0L29.6658 1.57088L1.90231 29.1571Z" fill="#101010" />
            </svg>
          </button>
          <h3 className={style.title}>Вход</h3>
          <form className={style.form}>
            <Input placeholder="Введите e-mail или телефон" />
            <Input placeholder="Введите пароль" />
            <div className={style.forgive}>
              <label className={style.label} for="checkbox">
                <input className={style.checkbox} type="checkbox" id="checkbox" />
                <span className={style.checkstyle}></span>
                Запомнить  меня
              </label>
              <button className={style.btn}>Забыли пароль?</button>
            </div>
            <Button text="Войти" type="M" />
            <div className={style.bottom}>
              <span>Нет аккаунта?</span>
              <button className={style.btn}>Регистация</button>
            </div>
          </form>
        </div>
      </TransitionModal>
    </Modal>
  );
}

export default User;