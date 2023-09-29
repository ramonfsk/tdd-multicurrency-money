export abstract class Money {
  protected amount: number

  static dollar (amount: number): Dollar {
    return new Dollar(amount)
  }

  static euro (amount: number): Euro {
    return new Euro(amount)
  }

  equals (other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false
    }

    return this.amount === other.amount
  }

  abstract times (multiplier: number): Money
}

class Dollar extends Money {
  constructor (amount: number) {
    super()
    this.amount = amount
  }

  times (multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}

class Euro extends Money {
  constructor (amount: number) {
    super()
    this.amount = amount
  }

  times (multiplier: number): Euro {
    return new Euro(this.amount * multiplier)
  }
}
