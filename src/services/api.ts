export const getFromStorage = (item: string) => localStorage[item];

export const setToStorage = (item: string, value) => localStorage.setItem(item, value);

export const removeFromStorage = (item: string) => localStorage.removeItem(item);

export async function getData(url: string) {
  const response = await fetch(url);
  if (response.status < 300) {
    const data = await response.json();
    return data;
  }
  return new Error(`getData - received ${response.status} on URL ${url}`);
}
