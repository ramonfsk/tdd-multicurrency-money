import { Currency } from './currency'
import { Expression } from './expression'
import { Money } from './money'

interface Pair {
  from: Currency
  to: Currency
}

const currenciesToKey = (currencies: Pair): string => {
  return `${currencies.from}-${currencies.to}`
}

interface Rates {
  [index: string]: number
}

export class Bank {
  private rates: Rates = {}

  reduce (source: Expression, to: Currency): Money {
    return source.reduce(this, to)
  }

  // eslint-disable-next-line no-unused-vars
  addRate (from: Currency, to: Currency, rate: number): void {
    const currencies: Pair = { from, to }
    this.rates[currenciesToKey(currencies)] = rate
  }

  rate (from: Currency, to: Currency): number {
    if (from === to) {
      return 1
    }

    const currencies: Pair = { from, to }
    return this.rates[currenciesToKey(currencies)]
  }
}
