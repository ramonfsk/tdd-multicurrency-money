export class Money {
  protected amount: number
  protected _currency: string

  constructor (amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  static dollar (amount: number): Dollar {
    return new Dollar(amount, 'USD')
  }

  static euro (amount: number): Euro {
    return new Euro(amount, 'EUR')
  }

  equals (other: Money): boolean {
    if (this._currency !== other._currency) {
      return false
    }

    return this.amount === other.amount
  }

  times (multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency)
  }

  currency (): string {
    return this._currency
  }
}

class Dollar extends Money {}
class Euro extends Money {}
