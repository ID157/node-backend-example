import { setup } from '@/src/submodules/base'
import "reflect-metadata"
import express from 'express'
import { createConnection, Connection } from "typeorm"
import { entities } from './typeorm/entity'
import { config } from 'dotenv'

// import controllers
import indexController from '@/src/controllers/index'

const DEFAULT_PORT = 3000

config()
createConnection().then((connection: Connection) => {
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
  setupedContexts.express.listen(process.env.PORT || DEFAULT_PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT || DEFAULT_PORT}`)
  })
}).catch(err => console.error(err))
