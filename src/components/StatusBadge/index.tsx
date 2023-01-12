import './statusbadge.scss';

type Props = {
  status: string;
};

const StatusBadge = ({ status }: Props) => {
  return <div className={status}>{status}</div>;
};

export default StatusBadge;
