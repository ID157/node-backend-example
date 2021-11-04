import { Application } from 'express'
import { Repository } from 'typeorm'
import { entities } from '../typeorm/entity'

export type Context = {
  express: Application,
  repositories: { [K in keyof typeof entities]: Repository<InstanceType<(typeof entities[K])>> }
}
