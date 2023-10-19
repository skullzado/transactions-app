export default class Utils {
  static calculateFee(amount: number): number {
    if (amount === 0) return 0;
    else if (amount <= 1000) return 5;
    else {
      if (amount % 1000 !== 0) {
        return Math.floor(amount / 1000) * 5 + 5;
      } else {
        return Math.floor(amount / 1000) * 5;
      }
    }
  }
}
