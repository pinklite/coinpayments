import { prepareHTTPInterceptor, mockCredentials } from '../helpers'
import CoinpaymentsClient from '../../src'
import { mapGetTxMultiPayload } from '../../src/mappers'

import { CMDS } from '../../src/constants'

describe('Get transaction multi e2e test', () => {
  let client
  const VALID_API_PAYLOAD = ['x', 'y', 'z']
  beforeAll(() => {
    client = new CoinpaymentsClient(mockCredentials)
  })
  it('Should catch valid payload', async () => {
    const VALID_PAYLOAD_MOCK = mapGetTxMultiPayload(VALID_API_PAYLOAD, {
      cmd: CMDS.GET_TX_MULTI,
    })
    const scope = prepareHTTPInterceptor(mockCredentials, VALID_PAYLOAD_MOCK)
    await client.getTxMulti(VALID_API_PAYLOAD)
    expect(scope.isDone()).toBeTruthy()
  })
  it('Should throw error on invalid payload', async done => {
    await expect(client.getTxMulti(42)).rejects.toThrow()
    const rejectCallback = jest.fn(err => {
      expect(err).toBeInstanceOf(Error)
      return done()
    })
    client.getTxMulti(42, rejectCallback)
  })
})