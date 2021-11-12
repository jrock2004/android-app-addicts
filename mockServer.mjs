import express from 'express';
import cors from 'cors';
import data from './mockData.json';

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getApps = () => {
  return data.reduce((apps, current) => {
    if (apps.length === 0) {
      apps.push({
        show: current.show,
        apps: [current],
      });
    } else {
      const index = apps.findIndex((i) => i.show === current.show);

      if (index !== -1) {
        apps[index].apps.push(current);
      } else {
        apps.push({
          show: current.show,
          apps: [current],
        });
      }
    }

    return apps;
  }, []);
}

// API endpoints are defined here

app.get('/api/apps', (req, res) => {
  const newApps = getApps();

  return res.send(newApps.slice(0, 10));
});

// End of API endpoints are here

app.listen(PORT, () => console.log(`Mock server listening on port ${PORT}!`));
