export const setLocalStorage = (name: string, items: any) => {
  // prevent build error
  if (typeof window !== "undefined") {
    localStorage.setItem(name, JSON.stringify(items));
  }
};
export const getLocalStorage = (name: string) => {
  // prevent build error
  let data;
  if (typeof window !== "undefined") {
    data = localStorage.getItem(name);
  }

  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem(name, JSON.stringify([]));
    return [];
  }
};
