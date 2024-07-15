import style from "./index.module.css";

const SelectSearch = ({ label }) => {
  return (
    <div className={style.block}>
      <label className={style.label}>{label}</label>
      <select>
        <option value="0">1 взрослый</option>
        <option value="1">2 взрослых</option>
        <option value="2">1 взрослый, 1 ребенок</option>
        <option value="3">2 взрослых, 1 ребенок</option>
      </select>
    </div>
  );
}

export default SelectSearch;