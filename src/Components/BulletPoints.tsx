type Props = {
  bullets: React.ReactNode[];
  label?: string;
  textClasses?: string;
};

const BulletPoints = ({ bullets, label, textClasses }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <span className="underline font-bold">{label}</span>}
      <ul className="flex list-disc list-inside space-x-2 flex-wrap">
        {bullets.map((bullet, i) => (
          <li key={i}>
            <span className={textClasses}>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoints;
