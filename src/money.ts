import { Currency } from '@/currency'
import { Expression } from './expression'

export class Money implements Expression {
  private readonly amount: number
  private readonly _currency: Currency

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

  plus (addend: Money): Expression {
    return new Money(this.amount + addend.amount, this._currency)
  }

  currency (): string {
    return this._currency
  }
}
