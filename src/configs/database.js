import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export const testConnection = async () => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result ')
    console.log('✅ MySQL connection successful. Test result:', rows[0].result)

    const [date] = await pool.query('SELECT NOW() AS fecha')
    console.log(date)
  } catch (error) {
    console.error('❌ Failed to connect to the database:', error)
  }
}
