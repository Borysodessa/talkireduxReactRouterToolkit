import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/headerFilter.module.css";

import { FilterByPrice } from "./filterByPrice.js";
import { ClearAll } from "./clearAll";
import { Sort } from "./sort";
import { Filter } from "./filters";
import { setSelectedCountry } from "../../redux/reducers/filtersReducer.js";
import { setSelectedLanguage } from "../../redux/reducers/filtersReducer.js";
import { languageData } from "./languageData";
import {
  countryName,
  criterionCountry,
  сountryData,
  countryFlag,
} from "./countryData";
import { criterionLanguage } from "./languageData";
import countryLogo from ".././images/buttonLogos/countryLogo.svg";
import languageLogo from ".././images/buttonLogos/languageLogo.svg";
import { filteredTeachersByLanguage } from "./filteredTeachersByLanguage.js";

export function HeaderFilter({ jsonData }) {
  const country = useSelector((state) => {
    return state.filters.selectedCountry;
  });

  const language = useSelector((state) => {
    return state.filters.selectedLanguage;
  });

  const dispatch = useDispatch();

  const selectTargetCountry = (i) => dispatch(setSelectedCountry(i));
  const selectTargetLanguage = (i) => dispatch(setSelectedLanguage(i));

  function numberOfTeachersByLanguage(filteredTeachersByLanguage) {
    if (language.length > 0) {
      return filteredTeachersByLanguage.length;
    }
    return 0;
  }

  const numberOfTeachersByCountry = jsonData.filter((teacher) => {
    return country.includes(teacher.user_info.living_country_id);
  }).length;

  const countryStyles = { left: 30 };
  const languageStyles = { left: 315 };

  return (
    <div className={styles.filtersWrap}>
      <Sort />
      <Filter
        filterMenuStyles={countryStyles}
        numberOfTeachers={numberOfTeachersByCountry}
        renderItem={countryFlag}
        targetName={countryName}
        buttonLogo={languageLogo}
        selectedByCriterion={criterionCountry(country)}
        buttonName={"Teacher is from"}
        teachersData={сountryData(jsonData)}
        selectedTarget={country}
        setSelectedTarget={selectTargetCountry}
      />
      <Filter
        filterMenuStyles={languageStyles}
        numberOfTeachers={numberOfTeachersByLanguage(
          filteredTeachersByLanguage
        )}
        buttonLogo={countryLogo}
        selectedByCriterion={criterionLanguage(language)}
        buttonName={"language"}
        selectedTarget={language}
        setSelectedTarget={selectTargetLanguage}
        teachersData={languageData(jsonData)}
      />
      <ClearAll />
      <FilterByPrice />
    </div>
  );
}
