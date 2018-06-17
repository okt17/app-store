/*
  interface AppItem {
    id: number; // Primary Key - integer
    title: string;
    icon: string; // icon URL
    categoryId: number: // Foreign Key - integer
    link: string; // href
    price: number; // 0 if free
    purchases: boolean; // in-app purchases
    devices?: number[]; // list of Foreign Keys - device ID's
  }

  interface Category {
    id: number;
    title: string;
  }

  interface Device {
    id: number;
    title: string;
  }
*/

export default {
  devices: [
    {
      id: 1,
      title: 'iPhone',
    },
    {
      id: 2,
      title: 'iPad',
    },
  ],
  categories: [
    {
      id: 1,
      title: '1',
    },
    {
      id: 2,
      title: '2',
    },
  ],
  apps: [
    {
      id: 1,
      title: 'App 1',
      icon: '',
      categoryId: 1,
      link: '',
      price: 0,
      purchases: false,
    },
    {
      id: 2,
      title: 'App 2',
      icon: '',
      categoryId: 2,
      link: '',
      price: 0,
      purchases: false,
      devices: [1],
    },
    {
      id: 3,
      title: 'App 3',
      icon: '',
      categoryId: 2,
      link: '',
      price: 2.50,
      purchases: true,
      devices: [2],
    },
    {
      id: 4,
      title: 'App 4',
      icon: '',
      categoryId: 1,
      link: '',
      price: 0,
      purchases: false,
      devices: [1, 2],
    },
  ],
};
