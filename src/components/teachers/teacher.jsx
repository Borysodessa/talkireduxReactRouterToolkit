import { useDispatch } from "react-redux";
import { setSelectedTeacher } from "../../redux/reducers/filtersReducer";

import styles from "../../styles/teacherCard.module.css";
import { AllSpeakeLanguage } from "./language";
import { Avatar } from "./avatar";
import { Trial } from "./trialLessons";
import { AboutMe } from "./aboutMe";
import { TitleAndJob } from "./titleAndJob";
import { Link } from "react-router-dom";

export function Teacher({ teacher, changeUserId }) {
  const dispatch = useDispatch();

  const getSelectedTeacher = (evt) => dispatch(setSelectedTeacher(evt));

  function changeAnyPriceFilter(e) {
    getSelectedTeacher(
      teacher.user_info.user_id === +e.currentTarget.id && teacher
    );
  }

  return (
    <section
      id={teacher.user_info.user_id}
      className={styles.sectionTeacherCard}
      onClick={(e) => changeAnyPriceFilter(e)}
    >
      <div className={styles.cardFlexWrap}>
        <Avatar
          teacherInfo={teacher.teacher_info}
          userInfo={teacher.user_info}
        />

        <div>
          <TitleAndJob
            teacherInfo={teacher.teacher_info}
            userInfo={teacher.user_info}
          />
          <AllSpeakeLanguage teacherInfo={teacher.teacher_info} />
          <AboutMe teacherInfo={teacher.teacher_info} />
          <div className={styles.profileWrap}>
            <Link
              to={`teacherPage/${teacher.user_info.user_id}`}
              className={styles.profileLink}
            >
              Teacher profile
            </Link>
            <button
              onClick={() => changeUserId(teacher.user_info.user_id)}
              className={styles.profileButton}
            >
              Prices
            </button>
          </div>
          <Trial courseInfo={teacher.course_info} />
        </div>
      </div>
    </section>
  );
}
