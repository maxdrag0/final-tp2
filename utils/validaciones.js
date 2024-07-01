const sondaValida = (valor) => {
  return valor>=1 && valor<=5;
};

const temperaturaValida = (valor) => {
  return valor>=-20 && valor<=100;
};

export default { sondaValida, temperaturaValida };
