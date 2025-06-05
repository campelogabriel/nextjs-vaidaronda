function convertorName(name) {
  let value;
  switch (name) {
    case "uv":
      value = "Índice UV";
      break;
    case "temp_c":
      value = "Temperatura";
      break;
    case "humidity":
      value = "Humidade do Ar";
      break;
    case "precip_mm":
      value = "Precipitação (mm)";
      break;
    default:
      value = name;
      break;
  }
  return value;
}

export default convertorName;
