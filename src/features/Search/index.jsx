import InputSearch from "@/shared/ui/InputSearch";
import style from "./index.module.css";
import SelectSearch from "@/shared/ui/SelectSearch";
import Button from "@/shared/ui/Button";

const Search = () => {
  return (
    <div>
      <form className={style.form}>
        <InputSearch type="text" label="Город или адрес" placeholder="Куда едем" />
        <InputSearch type="date" label="Заезд" />
        <InputSearch type="date" label="Отъезд" />
        <SelectSearch label="Гости" />
        <Button type="S" />
      </form>
    </div>
  );
}

export default Search;