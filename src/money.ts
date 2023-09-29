import { Currency } from '@/currency'

export class Money {
  protected amount: number
  protected _currency: Currency

  constructor (amount: number, currency: Currency) {
    this.amount = amount
    this._currency = currency
  }

  static dollar (amount: number): Money {
    return new Money(amount, Currency.USD)
  }

  static euro (amount: number): Money {
    return new Money(amount, Currency.EUR)
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
