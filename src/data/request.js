import DATA from '.';

function getApps(data, params = {}) {
  const {
    device,
  } = params;

  let results = data.apps;

  if (typeof device === 'string') {
    const
      dbDevice = data.devices.find(({ title }) => title === device),
      deviceId = dbDevice && dbDevice.id;

    results = results.filter(({ devices }) => (
      Array.isArray(devices) === false
      ||
      devices.includes(deviceId)
    ));
  }

  return results;
}

function getCategories(data/* , params={} */) {
  return data.categories;
}

function getCollections(data/* , params={} */) {
  return data.collections;
}

/**
 * Mimics an HTTP request behavior
 * @param {string} baseUrl 'apps' | 'categories' | 'collections'
 * @param {object} params request parameters
 * @return Promise<{ results: object[] }>
*/
function requestData(baseUrl, params) {
  return new Promise((resolve, reject) => {
    const delay = 1000 * Math.random(); // handle requests after up to 1 second

    let results;

    switch (baseUrl) {
      case 'apps':
        results = getApps(DATA, params);
        break;

      case 'categories':
        results = getCategories(DATA, params);
        break;

      case 'collections':
        results = getCollections(DATA, params);
        break;

      default:
        setTimeout(
          () => reject(new Error(`URL "${baseUrl}" could not be resolved`)),
          delay,
        );
        return;
    }

    setTimeout(() => resolve({ results }), delay);
  });
}

export default requestData;
