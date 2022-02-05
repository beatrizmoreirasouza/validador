const axios = require("axios");

async function getUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const { data } = await axios.get(url);
    const resultado = data.filter(
      (item) => item.address.zipcode.indexOf("2") !== -1
    );
    console.log(
      resultado.map((item) => ({
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        zipcode: item.address.zipcode,
      })).length
    );
  } catch (error) {
    console.error(error);
  }
}

getUsers();

//-----------------------------------------------------
//-----------------------------------------------------

async function getUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const { data } = await axios.get(url);
    return data.reduce((prev, curr) => {
      if (curr.address.zipcode.indexOf("3") !== -1) {
        prev.push({
          id: curr.id,
          name: curr.name,
          email: curr.email,
          phone: curr.phone,
          zipcode: curr.address.zipcode,
        });
      }
      return prev;
    }, []);
  } catch (error) {
    console.error(error);
  }
}

getUsers().then((resultado) => {
  console.log(resultado.length);
});
