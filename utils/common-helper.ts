export const isEmpty = (data: any) => {
  return ['', null, 'null', undefined].includes(data);
};
