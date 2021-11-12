import { ReactElement } from 'react';

export const PreviewApp: React.FC = (): ReactElement => {
  return (
    <article className="border rounded inline-block shadow">
      <header className="flex justify-center mb-4">
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
  );
};
