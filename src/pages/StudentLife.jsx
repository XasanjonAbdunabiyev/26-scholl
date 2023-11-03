import React from "react";

import student_db from "../db/students.json";

import StudentCard from "../components/StudentCard/StudentCard";

export function StudentLife() {
  return (
    <div className="student-life mt-20 p-12">
      <div className="container">
        <h1 className="text-4xl my-4" style={{ fontFamily: "Inria Serif" }}>
          Student Life
        </h1>
        <div className="grid grid-cols-3 items-center justify-between gap-y-7 max-[1300px]:grid-cols-2 max-[900px]:grid-cols-1">
          {student_db?.students?.map((student) => {
            return (
              <StudentCard
                key={student.student_title}
                imageUrl={"/images/hero.jpg"}
                cardTitle={student.student_title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
