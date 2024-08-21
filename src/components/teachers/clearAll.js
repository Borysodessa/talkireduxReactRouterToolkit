import { useDispatch } from "react-redux";
import { clearFilter } from "../../redux/action";
import styles from "../../styles/clearAll.module.css";

export function ClearAll() {
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearFilter());
  };

  return (
    <div>
      <button className={styles.clearButton} type="button" onClick={clear}>
        clearAll
      </button>
    </div>
  );
}
