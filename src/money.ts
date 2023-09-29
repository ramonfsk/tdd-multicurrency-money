export abstract class Money {
  protected amount: number
  protected _currency: string

  constructor (amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  abstract times (multiplier: number): Money

  static dollar (amount: number): Dollar {
    return new Dollar(amount, 'USD')
  }

  static euro (amount: number): Euro {
    return new Euro(amount, 'EUR')
  }

  equals (other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false
    }

    return this.amount === other.amount
  }

  currency (): string {
    return this._currency
  }
}

class Dollar extends Money {
  times (multiplier: number): Dollar {
    return Money.dollar(this.amount * multiplier)
  }
}

class Euro extends Money {
  times (multiplier: number): Euro {
    return Money.euro(this.amount * multiplier)
  }
}
