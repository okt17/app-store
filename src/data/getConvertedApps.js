import { result as iPhoneApps } from './iPhoneApps';
import { result as iPadApps } from './iPadApps';

/* eslint-disable camelcase */

/*
  Приведем данные с https://appfollow.io/rankings/top.json (POST)
  к нашей модели, описанной в data/index.js
*/

const parsePrice = (price) => {
  if (typeof price === 'string') {
    return parseFloat(price);
  }

  if (typeof price === 'number') {
    return price;
  }

  return 0;
};

const getDevices = (id, deviceOneApps, deviceTwoApps) => {
  const filter = ({ ext_id }) => ext_id === id;
  const deviceOne = deviceOneApps.find(filter) !== undefined;
  const deviceTwo = deviceTwoApps.find(filter) !== undefined;

  if (deviceOne && deviceTwo) {
    return [1, 2];
  } else if (deviceOne) {
    return [1];
  }

  return [2];
};

const convert = (maxCategoryId, maxCollectionId) => ({
  ext_id,
  title,
  icon,
  url,
  price,
  feed_type,
  pos_curr,
}, i) => ({
  id: ext_id,
  title,
  icon,
  link: url,
  price: parsePrice(price),
  purchases: feed_type === 'gross',
  pos_curr,
  categoryId: 1 + i % maxCategoryId,
  collectionId: 1 + i % maxCollectionId,
  devices: getDevices(ext_id, iPhoneApps, iPadApps),
});

const removeDuplicates = (array) => {
  const seen = {};

  return array.filter(({ ext_id }) => {
    if (seen[ext_id] !== undefined) {
      return false;
    }

    seen[ext_id] = true;

    return true;
  });
};

const apps = removeDuplicates([...iPhoneApps, ...iPadApps]);

const getConvertedApps = ({ maxCategoryId, maxCollectionId }) => (
  apps.map(convert(maxCategoryId, maxCollectionId))
);

export default getConvertedApps;
