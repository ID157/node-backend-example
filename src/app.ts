import { setup } from '@/src/submodules/base'
import { PrismaClient } from '@prisma/client'
import express from 'express'
// import controllers
import indexController from '@/src/controllers/index'

// setup contexts
const prisma = new PrismaClient()

const context = {
  express: express(),
  prisma
}
const modules = [
  indexController
]

const setupedContexts = setup(context, modules)
setupedContexts.express.listen(3000)
