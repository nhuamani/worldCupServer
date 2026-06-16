import { jest } from '@jest/globals'

const mockQuery = jest.fn()

// Mock del pool
jest.unstable_mockModule('../../src/configs/database.js', () => ({
  pool: {
    query: mockQuery,
  },
}))

// Importa app después del mock
const app = (await import('../../src/app.js')).default

describe('MySQL Connection (mock)', () => {
  test('debe simular consulta a DB', async () => {
    mockQuery.mockResolvedValue([[{ ok: 1 }]])

    const [rows] = await mockQuery('SELECT 1 AS ok')

    expect(rows[0].ok).toBe(1)
  })
})
