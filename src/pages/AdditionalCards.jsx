import React from "react";
import ImageCard from "../components/ImageCard/ImageCard";

export function AdditionalCards() {
  return (
    <div className="p-10 mt-5">
      <div className="container">
        <h1
          style={{ fontFamily: "Inria Serif" }}
          className="text-4xl pb-3 capitalize"
        >
          Additional information
        </h1>

        <div className="flex items-center gap-20 max-[1300px]:grid max-[1300px]:grid-cols-2 max-[900px]:grid-cols-1">
          <ImageCard
            imageTitle="School Meal Option"
            imageSrc="/images/about-hero.jpg"
          />
          <ImageCard imageTitle="School Uniform" imageSrc="/images/card2.jpg" />
          <ImageCard
            imageTitle="School Hospital Option"
            imageSrc="/images/about-hero.jpg"
          />
        </div>
      </div>
    </div>
  );
}
