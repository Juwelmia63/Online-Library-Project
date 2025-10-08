const getStoredData = () => {
  const data = localStorage.getItem("readlist");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const addStoreData = (id) => {
  const storedData = getStoredData();

  const exists = storedData.find((bookId) => bookId === id);

  if (!exists) {
    storedData.push(id);

    localStorage.setItem("readlist", JSON.stringify(storedData));
    alert("local storage a add korlam");
  } else {
    alert(" vai ager a data ace ");
  }
};

const getWishlistdata = () => {
  const wislistdata = localStorage.getItem("wislist");
  if (wislistdata) {
    return JSON.parse(wislistdata);
  } else {
    return [];
  }
};

const storeWislistdata = (id) => {
  const getData = getWishlistdata();

  const existingdata = getData.find((wisId) => wisId === id);

  if (!existingdata) {
    getData.push(id);
    localStorage.setItem("wislist", JSON.stringify(getData));
    alert("wislist a add korlam");
  } else {
    alert("ager a add kora ace ");
  }
};

export { getStoredData, addStoreData, getWishlistdata, storeWislistdata };
