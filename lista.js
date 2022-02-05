const lista = [];
console.log(lista);
lista.push({
  id: 1,
  name: "Willian",
  email: "willian@test.com",
  phone: "17997192355",
});

console.log(lista);

lista.push({
  id: 2,
  name: "Beatriz",
  email: "Beatriz@Test.com",
  phone: "17992350842",
});

console.log(lista);

//const resultado = lista.filter(item => item.email == "beatriz@test.com");

const resultado = lista.filter((item) => item.email.indexOf("test.com") !== -1);
console.log(resultado); //filtrado pela posição do texto dentro do e-mail

const resultado1 = lista.filter(
  (item) => item.email.toLowerCase().indexOf("test.com") !== -1
);
console.log(resultado1); //filtrar após formatar todas as letras para minúscula

const formatado = lista.map((item) => ({
  ...item, //manter os dados não mencionados sem formatar
  name: item.name.toUpperCase(), //formatar o 'nome' em letra maiúscula
  email: item.email.toLowerCase(), //formatar o 'email' em letra minúscula
}));
console.log(formatado);
