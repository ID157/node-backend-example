import { Application } from 'express'
import { PrismaClient } from '@prisma/client'

export type Context = {
  express: Application,
  prisma: PrismaClient
}
