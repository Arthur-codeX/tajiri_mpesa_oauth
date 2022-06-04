
class Print {
    constructor(DEBUG=True) {
      this.debug=DEBUG
    }
  
    mess = (data) => {
      if (!this.debug) return;
      console.log(data);
    };
  
    table = (data) => {
      if (!this.debug) return;
      console.table(data);
    };
  
    err = (data) => {
      if (!this.debug) return;
      console.error(data);
    };
  }
  



module.exports= Print