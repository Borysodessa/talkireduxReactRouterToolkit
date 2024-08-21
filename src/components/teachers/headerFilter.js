import { useSelector, useDispatch } from "react-redux";
import { countryfilter } from "../../redux/action.js";
import { languageFilter } from "../../redux/action.js";

import styles from "../../styles/headerFilter.module.css";

import { ClearAll } from "./clearAll";
import { Sort } from "./sort";
import { Filter } from "./filters";
import { languageData } from "./languageData";
import {
  countryName,
  criterionCountry,
  сountryData,
  countryFlag,
} from "./countryData";
import { criterionLanguage } from "./languageData";
import { FilterByPrice } from "./filterByPrice.js";
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

  const selectTargetCountry = (i) => dispatch(countryfilter(i));
  const selectTargetLanguage = (i) => dispatch(languageFilter(i));

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
      <Sort />
    </div>
  );
}
