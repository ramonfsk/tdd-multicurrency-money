import { Bank } from '@/bank'
import { Currency } from '@/currency'
import { Expression } from '@/expression'
import { Money } from '@/money'

describe('Money', () => {
  it('should handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
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
})
