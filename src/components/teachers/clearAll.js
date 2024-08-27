import { useDispatch } from "react-redux";
import { setClearFilter } from "../../redux/reducers/filtersReducer";
import styles from "../../styles/clearAll.module.css";

export function ClearAll() {
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(setClearFilter());
  };

  return (
    <div>
      <button className={styles.clearButton} type="button" onClick={clear}>
        clearAll
      </button>
    </div>
  );
}
