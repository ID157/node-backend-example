import { setup } from '@/src/submodules/base'
import "reflect-metadata"
import express from 'express'
import { createConnection } from "typeorm"
import { entities } from './typeorm/entity'
import { config } from 'dotenv'

// import controllers
import indexController from '@/src/controllers/index'

try {
  config()
  const connection = await createConnection()
  const repositories = { 
    user: connection.getRepository(entities.user)
  }
  const context = {
    express: express(),
    repositories
  }
  const modules = [
    indexController
  ]

  const setupedContexts = setup(context, modules)
  setupedContexts.express.listen(3000, () => {
    console.log(`App listening at http://localhost:${3000}`)
  })
} catch(e) {
  console.error(e)
}
