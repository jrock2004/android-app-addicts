import { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PreviewApp } from '../PreviewApp';

export type AppType = {
  show: string;
  name: string;
  url: string;
  provider: string;
  price: string;
  imageUrl: string;
  vote: string;
};

export const PreviewAppList: React.FC = (): ReactElement => {
  const [apps, setApps] = useState<AppType[]>([]);

  useEffect(() => {
    async () => {
      const response = await fetch('http://localhost:3005/api/apps');
      const json: AppType[] = response.json();

      if (json) {
        setApps(json);
      }
    };
  }, []);

  console.log(apps);

  return (
    <section className="mb-12 p-4">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-semibold text-xl">Show: 569</h2>
        <div>
          <Link className="bg-green-600 text-white text-sm rounded p-2" to="/show">
            See more
          </Link>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-4 lg:grid-cols-6">
        <PreviewApp />
        <PreviewApp />
        <PreviewApp />
        <PreviewApp />
        <PreviewApp />
        <PreviewApp />
      </div>
    </section>
  );
};
