//Вязкость
export const getViscosity1 = (x: number, y: number) => {
  return 29.294 + 819.8383 * x - 32.8641 * y;
};

export const getViscosity2 = (x: number, y: number) => {
  return (
    -43.621 +
    2811.9621 * y +
    365.5409 * x -
    8351.5551 * Math.pow(y, 2) -
    2275.8001 * x * y +
    2564.79 * Math.pow(x, 2)
  );
};

//Фильтрация
export const getFiltering1 = (x: number, y: number) => {
  return (
    388 -
    1479.9 * x -
    920.1 * y +
    1600.1 * x * y +
    1599.9 * Math.pow(x, 2) +
    1000.1 * Math.pow(y, 2)
  );
};

export const getFiltering2 = (x: number, y: number) => {
  return 440.81 - 1022.388 * x - 757.82 * y;
};

export const getFiltering3 = (x: number, y: number) => {
  return 1221.67 - 5309.76 * x - 5149.04 * y;
};

//Растекаемость
export const getSpreadability1 = (x: number, y: number) => {
  return (
    220.079 +
    594.23 * y -
    54.7803 * x -
    661.3888 * Math.pow(y, 2) -
    644.0422 * x * y -
    81.8865 * Math.pow(x, 2)
  );
};
export const getSpreadability2 = (x: number, y: number) => {
  return (
    271.124 +
    836.3447 * y -
    464.8676 * x -
    1326.5561 * Math.pow(y, 2) -
    905.5659 * x * y +
    803.4287 * Math.pow(x, 2)
  );
};
export const getSpreadability3 = (x: number, y: number) => {
  return 348.333 - 916.667 * x + 175.0 * y;
};
