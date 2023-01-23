import './Column.css';

const Column = ({ children, classNames }: { children: any; classNames: string }) => {
  const defaultClassNames = 'Column';
  const allClassNames = `${defaultClassNames} ${classNames}`;

  return <div className={allClassNames}>{children}</div>;
};

export default Column;
