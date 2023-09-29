import { Bank } from './bank'
import { Currency } from './currency'
import { Expression } from './expression'
import { Money } from './money'

export class Sum implements Expression {
  public augend: Money
  public addend: Money

  constructor (augend: Money, addend: Money) {
    this.augend = augend
    this.addend = addend
  }

  reduce (bank: Bank, to: Currency): Money {
    const amount = this.augend.amount() + this.addend.amount()
    return new Money(amount, to)
  }
}
