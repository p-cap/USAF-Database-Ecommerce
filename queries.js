const { request, response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'pcap',
  host: 'localhost',
  database: 'ecommerce',
  password: 'mypass',
  port: 5432,
})

  const createUser = (request, response) => {
    const {first_name , last_name , email , sales_id} = request.body
  
    pool.query('INSERT INTO users (first_name , last_name, email , sales_id) VALUES ($1, $2, $3, $4)', [first_name , last_name , email , sales_id], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results)
      //response.status(200).send(`User added with ID: ` + results.oid)
      response.status(200).send(`User added successfully`)
    })
  }

  const readUser = (request, response) => {
    const id = parseInt(request.params.userid)
    pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.userid)
    const {first_name , last_name , email , sales_id} = request.body
  
    pool.query(
      'UPDATE users SET first_name = $1, last_name = $2, email = $3, sales_id = $4 WHERE user_id = $5',
      [first_name , last_name , email , sales_id, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: {$0}`)
      }
    )
  }


const deleteUser = (request, response) => {
    const id = parseInt(request.params.userid)
  
    pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

const listOFUsers = (request, response) => {
  
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows)
  })
}


module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  listOFUsers
}

