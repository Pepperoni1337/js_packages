class PeppeMath {
  static squares(row,column) {
      if (column < Math.pow(row+1,2)) {
          return false;
      }

      return column < Math.pow(row + 2, 2);
  }

  static resolvePrime(maxDivisor,number) {
      for  (let k = 2; k < maxDivisor + 1; k++) {
          if (number===1) {
              return true;
          }
          if ((number) % k === 0) {
              return false;
          }
      }
      return true;
  }

    static isPrime(number) {
        return this.resolvePrime(Math.floor(Math.sqrt(number)),number);
    }


}