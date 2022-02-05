const { cpf, cnpj } = require("cpf-cnpj-validator");

function validarCpf(valor) {
  if (cpf.isValid(valor)) {
    return "Sim";
  }
  return "Não";
}

console.log(validarCpf("47756509803"));

function validarCnpj(valor) {
  if (cnpj.isValid(valor)) {
    return "Sim";
  }
  return "Não";
}

console.log(validarCnpj("66722336000176"));
