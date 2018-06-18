/*
  interface Data {
    apps: AppEntry[];
    categories: Category[];
    collections: Collection[];
    devices: Device[];
  }

  interface AppEntry {
    id: number; // Primary Key - integer
    title: string;
    icon: string; // icon URL
    categoryId: number: // Foreign Key - integer
    collectionId: number; // Foreign Key
    link: string; // href
    price: number; // 0 if free
    purchases: boolean; // in-app purchases
    devices?: number[]; // list of Foreign Keys - device ID's
  }

  interface Category {
    id: number;
    title: string;
  }

  interface Collection {
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
      title: 'Игры',
    },
    {
      id: 2,
      title: 'Приложения',
    },
  ],
  collections: [
    {
      id: 1,
      title: 'Новое и интересное',
    },
    {
      id: 2,
      title: 'Любителям классики',
    },
    {
      id: 3,
      title: 'Вам может понравиться',
    },
    {
      id: 4,
      title: 'Фавориты прошлых недель',
    },
  ],
  apps: [
    {
      id: 1,
      title: 'App 1',
      icon: '',
      categoryId: 1,
      collectionId: 1,
      link: '',
      price: 0,
      purchases: false,
    },
    {
      id: 2,
      title: 'App 2',
      icon: '',
      categoryId: 1,
      collectionId: 1,
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
      collectionId: 2,
      link: '',
      price: 2.50,
      purchases: true,
      devices: [2],
    },
    {
      id: 4,
      title: 'App 4',
      icon: '',
      categoryId: 2,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: false,
      devices: [1],
    },
    {
      id: 5,
      title: 'App 5',
      icon: '',
      categoryId: 1,
      collectionId: 3,
      link: '',
      price: 0,
      purchases: false,
      devices: [1, 2],
    },
    {
      id: 6,
      title: 'App 6',
      icon: '',
      categoryId: 1,
      collectionId: 3,
      link: '',
      price: 0,
      purchases: false,
      devices: [2],
    },
    {
      id: 7,
      title: 'App 7',
      icon: '',
      categoryId: 2,
      collectionId: 4,
      link: '',
      price: 0,
      purchases: false,
      devices: [1, 2],
    },
    {
      id: 8,
      title: 'App 8',
      icon: '',
      categoryId: 2,
      collectionId: 4,
      link: '',
      price: 0,
      purchases: false,
      devices: [2],
    },
  ],
};
