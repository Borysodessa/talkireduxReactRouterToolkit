import { useSelector } from "react-redux";
import styles from "../../styles/teacherContent.module.css";
import { PricePerTime } from "./pricePerTime";
import * as React from "react";

export function TeacherContent({ jsonData, teacherId }) {
  const selteacher = jsonData.filter((teacher) => {
    return teacher.user_info.user_id === +teacherId;
  })[0];

  const minPrice = useSelector((state) => {
    return state.filters.minPrice;
  });
  const maxPrice = useSelector((state) => {
    return state.filters.maxPrice;
  });

  const teacherIds = jsonData.map((teacher) => {
    return teacher.user_info.user_id;
  });

  if (teacherId !== null && teacherIds.includes(+teacherId)) {
    return (
      <div className={styles.teacherContentWrap}>
        <div>{selteacher.user_info.nickname}</div>

        {selteacher.pro_course_detail.map((oneCourse) => {
          return (
            <PricePerTime
              key={oneCourse.id}
              oneCourse={oneCourse}
              packageMin={minPrice}
              packageMax={maxPrice}
            />
          );
        })}
      </div>
    );
  }
}
