import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const PreviewAppList: React.FC = (): ReactElement => {
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
      <div>
        <article className="border rounded inline-block shadow">
          <header className="mb-4">
            <img alt="placeholder" src="https://via.placeholder.com/160x160" />
          </header>
          <main className="mb-4 px-3">
            <h3>Rotation Control</h3>
            <h4 className="text-sm">D2d</h4>
          </main>
          <footer className="flex justify-between px-3 pb-2 text-red-500 text-sm">
            <span></span>
            <span>Free</span>
          </footer>
        </article>
      </div>
    </section>
  );
};
