import { ReactElement } from 'react';

import { PreviewAppList } from '../../components/PreviewAppList';

const Home: React.FC = (): ReactElement => {
  return (
    <div>
      <h1>Home</h1>

      <PreviewAppList />
    </div>
  );
};

export default Home;
