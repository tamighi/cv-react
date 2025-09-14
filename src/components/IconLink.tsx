type Props = {
  icon: React.ReactNode,
  link: string;
  label: string;
}

const IconLink = ({icon, link, label}: Props) => {
  return (
    <div className="flex gap-1">
    <a href={link}
    </div>
  )
}

export default IconLink
