import './Tag.css';

const Tag = ({ title, icon }: { title: string; icon?: string }) => {
  return (
    <span className="tag">
      {icon && icon !== '' && <i className={icon}></i>} {title}
    </span>
  );
};

export default Tag;
