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

  // eslint-disable-next-line no-unused-vars
  plus (addend: Expression): Expression {
    return null
  }
}
