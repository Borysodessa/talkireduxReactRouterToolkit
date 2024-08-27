import { useSelector, useDispatch } from "react-redux";
import { setMinPrice } from "../../redux/reducers/filtersReducer";
import { setMaxPrice } from "../../redux/reducers/filtersReducer";

export function FilterByPrice() {
  const minPrice = useSelector((state) => {
    return state.filters.minPrice;
  });
  const maxPrice = useSelector((state) => {
    return state.filters.maxPrice;
  });

  const dispatch = useDispatch();

  const getPakageMinValue = (e) => dispatch(setMinPrice(e));
  const getPakageMaxValue = (e) => dispatch(setMaxPrice(e));

  function pakageMinValue(e) {
    getPakageMinValue(e.target.value);
  }
  function pakageMaxValue(e) {
    getPakageMaxValue(e.target.value);
  }

  return (
    <div>
      <input value={minPrice} onInput={(e) => pakageMinValue(e)}></input>
      <input value={maxPrice} onInput={(e) => pakageMaxValue(e)}></input>
    </div>
  );
}
