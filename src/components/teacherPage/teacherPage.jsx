import styles from "../../styles/teacherPage.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function TeacherPage() {
  const jsonData = useSelector((state) => state.jsonData.data);

  let { teacherPageId } = useParams();

  const teacher = jsonData.filter(
    (teach) => teach.user_info.user_id === +teacherPageId
  )[0];

  const teacherInfo = teacher.teacher_info;
  const userInfo = teacher.user_info;
  const flag = userInfo.living_country_id.toLowerCase();
  let level = 0;
  if (teacherInfo.teach_language[1]) {
    level = teacherInfo.teach_language[1].level;
  }
  const levelSpans = [];
  let count = 0;
  while (levelSpans.length < level) {
    levelSpans.push(<div key={count} className={styles.levelLanguage}></div>);
    count += 1;
  }

  return (
    <div className={styles.mainWrap}>
      <div className={styles.teacherPageSection}>
        <div className={styles.profileWrap}>
          <div className={styles.frameWrap}>
            <img
              className={styles.avatarPhoto}
              src={teacherInfo.video_pic_url}
              width="76"
              alt="avatarPhoto"
            ></img>
            <img
              className={styles.flagAvatar}
              src={
                "https://scdn.italki.com/orion/static/flags/" + flag + ".svg"
              }
              alt="country_flag"
            ></img>
          </div>
          <div>
            <div className={styles.nicknameTitle}>{userInfo.nickname}</div>
            <div className={styles.teachesLanguages}>
              <div className={styles.teachLanguage}>Teaches </div>
              <div className={styles.tiachLanguageWrap}>
                <div className={styles.language}>
                  {teacherInfo.teach_language[0].language}
                  <span className={styles.nativeLanguageSpan}> Native </span>
                </div>
                <div className={styles.languageWrap}>
                  {teacherInfo.teach_language[1] && (
                    <div>{teacherInfo.teach_language[1].language}</div>
                  )}
                  <div className={styles.levelSpans}>{levelSpans}</div>
                </div>
              </div>
            </div>
            <div>
              <span className={styles.languageSpans}>Speaks </span>
              <div>
                {teacherInfo.also_speak.map((lang) => [
                  lang.language,
                  " ",
                  lang.level,
                  " ",
                ])}
              </div>
            </div>
            {teacherInfo.short_signature}
          </div>
        </div>
        <div>
          <div>About Me</div>
          <div>Me as a Teacher</div>
          <div>My lessons & teaching style</div>
          <div>Resume</div>
        </div>
        <div>
          <span>From</span>
        </div>
        {teacherInfo.intro}
      </div>
    </div>
  );
}
