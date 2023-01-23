import './Fieldset.css';

const Fieldset = ({
  legend,
  children,
  isRight = false,
  titlePosition
}: {
  legend: string;
  children: any;
  isRight?: boolean;
  titlePosition?: 'left' | 'center';
}) => {
  const className = `Fieldset Fieldset-${isRight ? 'Right' : 'Left'}`;
  const legendClassName = titlePosition === 'center' ? 'Legend-Center' : '';

  return (
    <fieldset className={className}>
      <legend className={legendClassName}>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
