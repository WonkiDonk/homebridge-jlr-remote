import {createMock} from 'ts-auto-mock'

interface Interface {
  a: string
  b: number
}

describe('ts-auto-mock', () => {
  let mock: Interface
  beforeEach(() => {
    mock = createMock<Interface>()
  })
  it('should work', () => {
    expect(mock.a).toBe('')
  })
})