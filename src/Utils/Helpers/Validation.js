
export default class Validate {

  static Validate = null;
  x = null;

  constructor() {
    this.x = { message: "", code: "", data: "" };
  }

  setStatusIncorrect(err) {
    this.setMessage(err);
    this.setCode(400);
    return { code: this.x.code, message: this.x.message }
  }

  setStatusCorrectLong(message = "Operación Correcta", data = "", code = 201) {
    this.setMessage(message);
    this.setCode(code);
    this.setData(data);
    return { message: this.x.message, data: this.x.data };
  }

  setStatusCorrectShort(message = "Operación Correcta") {
    this.setMessage(message);
    return { message: this.x.message };
  }

  setMessage(err) {
    this.x.message = err;
  }
  setCode(code) {
    this.x.code = code;
  }
  setData(dat) {
    this.x.data = dat;
  }
}


