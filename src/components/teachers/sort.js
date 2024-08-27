import { useSelector, useDispatch } from "react-redux";
import { change } from "../../redux/reducers/sortReducer";
import styles from "../../styles/sort.module.css";
import classNames from "classnames";
import { Arrow } from "./arrow";

export const buttonNames = [
  "orderByLessons",
  "orderByStudents",
  "orderByRatio",
  "orderByPrice",
];

export function Sort() {
  const changeCriteria = useSelector((state) => {
    return state.sorts.change;
  });
  // console.log(changeCriteria);
  const dispatch = useDispatch();

  const changeParamCriteria = (buttonName) => dispatch(change(buttonName));

  function changeParam(buttonName) {
    if (changeCriteria.selectButton !== buttonName) {
      changeParamCriteria({
        ...changeCriteria,
        selectButton: buttonName,
        rotate: false,
      });
    } else {
      changeParamCriteria({
        ...changeCriteria,
        rotate: !changeCriteria.rotate,
      });
    }
  }

  return (
    <div className={styles.sortButtonWrap}>
      {buttonNames.map((buttonName) => (
        <div
          key={buttonName}
          className={styles.sortArrowWrap}
          onClick={() => changeParam(buttonName)}
        >
          <Arrow
            arrowStyles={styles.arrowInSortButton}
            isRotated={
              changeCriteria.selectButton === buttonName &&
              changeCriteria.rotate
            }
          />
          <button
            className={classNames({
              [styles.changeColor]: changeCriteria.selectButton === buttonName,
              [styles.sortButton]: true,
            })}
          >
            {buttonName}
          </button>
        </div>
      ))}
    </div>
  );
}
