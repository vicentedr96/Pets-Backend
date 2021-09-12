
class Generador {
  static verificarIndifinidos(DATA) {
    let errores = [];

    for (let dat in DATA) {
      if (DATA[dat] == undefined || DATA[dat] == "" || DATA[dat] == null) {
        errores.push({ texto: "Faltan datos" });
        break;
      }
    }

    if (errores.length > 0) {
      return false;
    } else {
      return true;
    }
  }

}

module.exports = Generador;
