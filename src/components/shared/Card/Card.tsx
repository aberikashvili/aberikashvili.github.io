import './Card.css';

export type CardPropos = {
  title: string;
  meta: { left: string | JSX.Element; right: string | JSX.Element };
  caption?: string;
  image?: string;
  icon?: string;
  url?: string;
};

const Card = ({ title, meta, caption, icon, image, url }: CardPropos) => {
  return (
    <div className="card__container">
      {image && (
        <div className="card__featured-image">
          <img src={image} alt="publication image" />
        </div>
      )}
      <div className="card__info">
        <div className="card__title">
          {icon && <i className={icon}></i>}
          <a href={url} target="_blank">
            {title}
          </a>
        </div>
        {caption && <div className="card__caption">{caption}</div>}
        <div className="card__meta">
          <div className="card__meta--left">{meta.left}</div>
          <div className="card__meta--right">{meta.right}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
