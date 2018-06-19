/*
  interface Data {
    apps: AppEntry[];
    categories: Category[];
    collections: Collection[];
    devices: Device[];
    banners: {
      big: string[];
      small: string[];
    };
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
      title: 'Minecraft',
      // icon: 'assets/app-icons/minecraft.png',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: 'https://itunes.apple.com/ru/app/minecraft/id479516143?mt=8',
      price: 529,
      purchases: true,
    },
    {
      id: 2,
      title: 'App 2',
      icon: 'assets/app-icons/sample.png',
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
      icon: 'assets/app-icons/sample.png',
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
      icon: 'assets/app-icons/sample.png',
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
      icon: 'assets/app-icons/sample.png',
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
      icon: 'assets/app-icons/sample.png',
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
      icon: 'assets/app-icons/sample.png',
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
      icon: 'assets/app-icons/sample.png',
      categoryId: 2,
      collectionId: 4,
      link: '',
      price: 0,
      purchases: false,
      devices: [2],
    },
    {
      id: 9,
      title: 'App 9',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 10,
      title: 'App 10',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 11,
      title: 'App 11',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 12,
      title: 'App 12',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 13,
      title: 'App 13',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 14,
      title: 'App 14',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 15,
      title: 'App 15',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 16,
      title: 'App 16',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 17,
      title: 'App 17',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 18,
      title: 'App 18',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 19,
      title: 'App 19',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 20,
      title: 'App 20',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 21,
      title: 'App 21',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
    {
      id: 22,
      title: 'App 22',
      icon: 'assets/app-icons/sample.png',
      categoryId: 1,
      collectionId: 2,
      link: '',
      price: 0,
      purchases: true,
    },
  ],
  banners: {
    small: [
      'assets/banners/small_sample.jpg',
      // 'assets/banners/small_1.jpg',
      // 'assets/banners/small_2.jpg',
      // 'assets/banners/small_3.jpg',
    ],
    big: [
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      'assets/banners/big_sample.jpg',
      // 'assets/banners/big_1.jpg',
      // 'assets/banners/big_2.jpg',
      // 'assets/banners/big_3.jpg',
    ],
  },
};
