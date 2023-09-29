import { Currency } from '@/currency'
import { Expression } from './expression'
import { Sum } from './sum'
import { Bank } from './bank'

export class Money implements Expression {
  private readonly _amount: number
  private readonly _currency: Currency

  constructor (amount: number, currency: Currency) {
    this._amount = amount
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

    return this._amount === other._amount
  }

  times (multiplier: number): Money {
    return new Money(this._amount * multiplier, this._currency)
  }

  plus (addend: Money): Expression {
    return new Sum(this, addend)
  }

  reduce (bank: Bank, to: Currency): Money {
    const rate = bank.rate(this._currency, to)
    return new Money(this._amount / rate, to)
  }

  amount (): number {
    return this._amount
  }

  currency (): string {
    return this._currency
  }
}
