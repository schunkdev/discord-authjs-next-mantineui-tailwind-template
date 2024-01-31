import { auth } from '@lib/auth';

const DashboardPage: React.FC = async () => {
  const session = await auth();
  return (
    <div className="DashboardPage">
      <h3 className="text-3xl font-bold font-heading">DashboardPage</h3>
      {JSON.stringify(session)}
    </div>
  );
};

export default DashboardPage;
