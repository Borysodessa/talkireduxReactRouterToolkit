import styles from "../../styles/app.module.css";
import { useSearchParams } from "react-router-dom";

import json from "./data.json";
import { TeacherList } from "./teachersList";
import { TeacherContent } from "./teacherContent";
import { HeaderFilter } from "./headerFilter";

export function TeacherProfileLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const teacherId = searchParams.get("teacher_Id");
  function changeUserId(id) {
    setSearchParams({ teacher_Id: id });
  }

  return (
    <div className={styles.appMainWrap}>
      <div>
        <HeaderFilter jsonData={json.data} />
      </div>
      <div className={styles.appCardWrap}>
        <div>
          <TeacherList
            jsonData={json.data}
            setSearchParams={setSearchParams}
            changeUserId={changeUserId}
          />
        </div>
        <div>
          <TeacherContent
            jsonData={json.data}
            teacherId={teacherId}
            searchParams={searchParams}
          />
        </div>
      </div>
    </div>
  );
}
