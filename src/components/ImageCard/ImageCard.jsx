import style from "./style.module.scss";
export default function ImageCard(props) {
  return (
    <div className={style.imageCardContainer} data-title={props.imageTitle}>
      <img src={props?.imageSrc} className={style.imageCard} alt="" />
    </div>
  );
}
