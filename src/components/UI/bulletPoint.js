const BulletPoint = ({ text }) => {
  return text ? (
    <div className="flex gap-1">
      <p>•</p>
      <p className="text-slate-800">{text}</p>
    </div>
  ) : (
    ""
  );
};

export default BulletPoint;
