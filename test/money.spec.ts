import { Bank } from '@/bank'
import { Currency } from '@/currency'
import { Expression } from '@/expression'
import { Money } from '@/money'
import { Sum } from '@/sum'

describe('Money', () => {
  it('should handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2)).toEqual(Money.dollar(10))
    expect(five.times(3)).toEqual(Money.dollar(15))
  })

  it('should handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('should handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual(Currency.USD)
    expect(Money.euro(1).currency()).toEqual(Currency.EUR)
  }
  )
  it('should handle simple addition', () => {
    const five = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank = new Bank()
    const reduced: Money = bank.reduce(sum, Currency.USD)
    expect(reduced.equals(Money.dollar(10))).toBeTruthy()
  })

  it('should return a sum when plus is used', () => {
    const five = Money.dollar(5)
    const result: Expression = five.plus(five)
    const sum = result as Sum
    expect(sum.augend).toEqual(five)
    expect(sum.addend).toEqual(five)
  })

  it('should reduce from a sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduce(sum, Currency.USD)
    expect(result).toEqual(Money.dollar(7))
  })

  it('should reduce from a money', () => {
    const bank = new Bank()
    const result: Money = bank.reduce(Money.dollar(1), Currency.USD)
    expect(result).toEqual(Money.dollar(1))
  })

  it('should reduce from differente currencies', () => {
    const bank = new Bank()
    bank.addRate(Currency.EUR, Currency.USD, 2)
    const result = bank.reduce(Money.euro(2), Currency.USD)
    expect(result).toEqual(Money.dollar(1))
  })

  it('should hanlde indentity rate', () => {
    expect(new Bank().rate(Currency.USD, Currency.USD)).toEqual(1)
  })

  it('should handle mixed addition', () => {
    const fiveBucks: Expression = Money.dollar(5)
    const tenEuros: Expression = Money.euro(10)
    const bank = new Bank()
    bank.addRate(Currency.EUR, Currency.USD, 2)
    const result = bank.reduce(fiveBucks.plus(tenEuros), Currency.USD)
    expect(result).toEqual(Money.dollar(10))
  })
})
