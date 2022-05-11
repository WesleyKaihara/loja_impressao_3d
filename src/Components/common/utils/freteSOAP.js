var soap = require('soap');

const Myurl = "https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl";
// const url2 = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl";

const Proxy = "https://cors-anywhere.herokuapp.com/";


// async function calculaTarifaServico() {

//Criar um client , passando url e retorna callback
//   await soap.createClient(url2, (err, client) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('ok');
//       client.CalcPreco({
//         nCdEmpresa: '08082650',
//         sDsSenha: '564321',
//         nCdServico: '04014',
//         sCepOrigem: '873030700',
//         sCepDestino: '24358130',
//         nVlPeso: '2',
//         nCdFormato: '1',
//         nVlComprimento: '20',
//         nVlAltura: '20',
//         nVlLargura: '20',
//         nVlDiametro: '0',
//         sCdMaoPropria: 'N',
//         nVlValorDeclarado: 0,
//         sCdAvisoRecebimento: 'N'
//       }, (err, res) => {
//         console.log(res);
//       });
//     }
//   })
// }

// calculaTarifaServico();

async function ConsultaCEP(cep) {
  //Criar um client , passando url e retorna callback
  await soap.createClient(Myurl, (err, client) => {
    if (!err) {
      console.log(client.describe());
      console.log('ok');
      client.consultaCEP({
        cep: cep,
      }, (err, res) => {
        console.log('Retorno:');
        console.log(res.return);
      });
    } else {
      console.log('Erro:');
      console.log(err);
    }
  })
}
