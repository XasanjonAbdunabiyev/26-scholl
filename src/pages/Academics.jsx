import React from "react";

export function Academics() {
  const [count1, setCount1] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      if (count1 < 100) {
        setCount1((prev) => prev + 1);
      }
      if (count2 < 81) {
        setCount2((prev) => prev + 1);
      }
      if (count3 < 61) {
        setCount3((prev) => prev + 1);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [count1, count2, count3]);

  return (
    <div className="academiys  mt-20 p-10">
      <div className="container">
        <h1
          style={{ fontFamily: "Inria Serif" }}
          className="text-4xl text-[#1A0EA9]"
        >
          Academics
        </h1>
        <h2 className="my-4 text-3xl font-thin" style={{ fontFamily: "Inria Serif" }}>
          Teachers
        </h2>
        <div
          style={{ borderBottom: "1px solid #000" }}
          className="flex gap-7 items-center my-5 pb-5"
        >
          <div
            style={{ fontFamily: "Inria Serif" }}
            className="bg-[#CBFFD0] text-[#05670F] font-bold p-3 rounded-[50px] text-3xl"
          >
            A+
          </div>
          <p
            style={{ fontFamily: "Inria Serif" }}
            className="text-3xl w-[65%] text-[#2A385D] leading-snug max-[1000px]:w-full max-[1000px]:text-xl"
          >
            Based on school accomplishments, salary, student reviews, and
            additional factors
          </p>
        </div>
        <div className="flex gap-5 my-4 items-center">
          <div
            style={{ fontFamily: "Inria Serif" }}
            className="font-bold p-3 rounded-[50px] text-3xl"
          >
            {count1}%+
          </div>
          <p
            style={{ fontFamily: "Inria Serif" }}
            className="text-3xl w-[65% text-[#2A385D]] leading-snug max-[1000px]:w-full max-[1000px]:text-xl"
          >
            of students agree that teachers put a lot of effort into teaching
            their classes.
          </p>
        </div>
        <div className="flex gap-5 my-4 items-center">
          <div
            style={{ fontFamily: "Inria Serif" }}
            className="font-bold p-3 rounded-[50px] text-3xl"
          >
            {count2}%+
          </div>
          <p
            style={{ fontFamily: "Inria Serif" }}
            className="text-3xl w-[65%] text-[#2A385D] leading-snug max-[1000px]:w-full max-[1000px]:text-xl"
          >
            of students agree that it is easy to understand classes in every
            teachers' lessons
          </p>
        </div>

        <div className="flex gap-5 my-3 items-center">
          <div
            style={{ fontFamily: "Inria Serif" }}
            className="font-bold p-3 rounded-[50px] text-3xl"
          >
            {count3}%+
          </div>
          <p
            style={{ fontFamily: "Inria Serif" }}
            className="text-3xl w-[65%] leading-snug text-[#2A385D]  max-[1000px]:w-full max-[1000px]:text-xl"
          >
            of students agree that given homeworks are manageable
          </p>
        </div>
      </div>
    </div>
  );
}
