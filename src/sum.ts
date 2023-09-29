import { Bank } from './bank'
import { Currency } from './currency'
import { Expression } from './expression'
import { Money } from './money'

export class Sum implements Expression {
  public augend: Expression
  public addend: Expression

  constructor (augend: Expression, addend: Expression) {
    this.augend = augend
    this.addend = addend
  }

  reduce (bank: Bank, to: Currency): Money {
    const amount = this.augend.reduce(bank, to).amount() + this.addend.reduce(bank, to).amount()
    return new Money(amount, to)
  }

  plus (addend: Expression): Expression {
    return new Sum(this, addend)
  }

  times (multiplier: number): Expression {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }
}
