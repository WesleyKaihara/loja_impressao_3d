const { consultarCep, calcularPrecoPrazo } = require('correios-brasil');

export function ConsultaCep(cep) {
  consultarCep(cep).then((response) => {
    console.log(response);
  });
}



export async function calculaPrecoPrazo(args) {
  await calcularPrecoPrazo(args).then((response) => {
    console.log(response);
  });
}


