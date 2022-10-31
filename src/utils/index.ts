export const saveItem = (id: string, status: boolean) => {
  localStorage.setItem(id, String(status));
};

export const deleteItem = (id: string) => {
  localStorage.removeItem(id);
};
export const getItem = (id: string) => {
  return localStorage.getItem(id);
};
