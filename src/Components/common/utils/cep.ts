export function getCep(cep: string) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      response.json()
        .then(data => console.log(data));
    });
}
