const Row = ({ idAttr, children }: { idAttr?: string; children: any }) => {
  return (
    <div id={idAttr && idAttr} className="Row">
      {children}
    </div>
  );
};

export default Row;
