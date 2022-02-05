const axios = require("axios");

function getOldCep(valor) {
  var url = "https://viacep.com.br/ws/" + valor + "/json";
  axios
    .get(url)
    .then(function ({ data }) {
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
getOldCep(15806100);

async function getNewCep(valor) {
  try {
    const url = `https://viacep.com.br/ws/${valor}/json`;
    const { data } = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getNewCep(15806100);
