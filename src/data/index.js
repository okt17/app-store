import getConvertedApps from './getConvertedApps';

/*
  // Typescript интерфейсы в качестве псевдокода - описание моделей данных

  // все данные
  interface Data {
    apps: AppEntry[];
    categories: Category[];
    collections: Collection[];
    devices: Device[];
    banners: string[];
  }

  // данные об одном приложении
  interface AppEntry {
    id: number; // Primary Key
    title: string; // название
    icon: string; // URL иконки
    categoryId: number: // Foreign Key
    collectionId: number; // Foreign Key
    link: string; // ссылка
    price: number; // цена. 0 - бесплатно
    purchases: boolean; // наличие покупок в приложении
    devices?: number[]; // список поддерживаемых устройств. Если undefined - поддерживается все
    pos_curr: number; // позиция в рейтинге
  }

  // данные о категории приложений
  interface Category {
    id: number;
    title: string;
  }

  // данные о коллекции приложений
  interface Collection {
    id: number;
    title: string;
    banner?: string; // URL баннера
  }

  // данные об устройстве
  interface Device {
    id: number;
    title: string;
  }
*/

const devices = [
  {
    id: 1,
    title: 'iPhone',
  },
  {
    id: 2,
    title: 'iPad',
  },
];

const categories = [
  {
    id: 1,
    title: 'Приложения',
  },
  {
    id: 2,
    title: 'Интересное',
  },
  {
    id: 3,
    title: 'Популярное',
  },
  {
    id: 4,
    title: 'Удобства',
  },
];

const collections = [
  {
    id: 1,
    title: 'Новое и интересное',
    banner: 'assets/banners/small_1.jpg',
  },
  {
    id: 2,
    title: 'Любителям классики',
    banner: 'assets/banners/small_2.jpg',
  },
  {
    id: 3,
    title: 'Вам может понравиться',
    banner: 'assets/banners/small_3.jpg',
  },
  {
    id: 4,
    title: 'Фавориты прошлых недель',
    banner: 'assets/banners/small_1.jpg',
  },
  {
    id: 5,
    title: 'Коллекция 1',
    banner: 'assets/banners/small_2.jpg',
  },
  {
    id: 6,
    title: 'Коллекция 2',
    banner: 'assets/banners/small_3.jpg',
  },
  {
    id: 7,
    title: 'Коллекция 3',
    banner: 'assets/banners/small_1.jpg',
  },
  {
    id: 8,
    title: 'Коллекция 4',
    banner: 'assets/banners/small_2.jpg',
  },
  {
    id: 9,
    title: 'Коллекция 5',
    banner: 'assets/banners/small_3.jpg',
  },
  {
    id: 10,
    title: 'Коллекция 6',
    banner: 'assets/banners/small_1.jpg',
  },
  {
    id: 11,
    title: 'Коллекция 7',
    banner: 'assets/banners/small_2.jpg',
  },
  {
    id: 12,
    title: 'Коллекция 8',
    banner: 'assets/banners/small_3.jpg',
  },
];

const banners = [
  'assets/banners/big_1.jpg',
  'assets/banners/big_2.jpg',
  'assets/banners/big_3.jpg',
  'assets/banners/big_1.jpg',
  'assets/banners/big_2.jpg',
  'assets/banners/big_3.jpg',
  'assets/banners/big_1.jpg',
  'assets/banners/big_2.jpg',
  'assets/banners/big_3.jpg',
  'assets/banners/big_1.jpg',
  'assets/banners/big_2.jpg',
  'assets/banners/big_3.jpg',
  'assets/banners/big_1.jpg',
  'assets/banners/big_2.jpg',
  'assets/banners/big_3.jpg',
];

const apps = getConvertedApps({
  maxCategoryId: categories.length,
  maxCollectionId: collections.length,
});

export default {
  devices,
  categories,
  collections,
  apps,
  banners,
};
