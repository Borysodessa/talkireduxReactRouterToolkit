import { useSelector } from "react-redux";
import { Teacher } from "./teacher";
import { sorting } from "./sorting";
import { filteredTeachersByLanguage } from "./filteredTeachersByLanguage.js";
import { filteringTeachersByPricesPerHour } from "./funcPrices.js";

export function TeacherList({ jsonData, changeUserId }) {
  const country = useSelector((state) => {
    return state.filters.selectedCountry;
  });
  const language = useSelector((state) => {
    return state.filters.selectedLanguage;
  });
  const changeCriteria = useSelector((state) => {
    return state.sorts.change;
  });
  const minPrice = useSelector((state) => {
    return state.filters.minPrice;
  });
  const maxPrice = useSelector((state) => {
    return state.filters.maxPrice;
  });

  const changeRotate = changeCriteria.rotate;
  const selectedButton = changeCriteria.selectButton;

  const anyFilter = filteredTeachersByLanguage(jsonData, language).filter(
    (teacher) => {
      return country.length === 0
        ? filteredTeachersByLanguage
        : country.includes(teacher.user_info.living_country_id);
    }
  );

  const anySorting = sorting(anyFilter, selectedButton, changeRotate);

  const teachers = filteringTeachersByPricesPerHour(
    minPrice,
    maxPrice,
    anySorting
  );

  return (
    <div>
      {teachers.map((teacher) => (
        <div key={teacher.user_info.user_id}>
          <Teacher
            teacher={teacher}
            selectedCountry={country}
            key={teacher.user_info.user_id}
            changeUserId={changeUserId}
          />
        </div>
      ))}
    </div>
  );
}
