import { Repository } from "typeorm"
export type EntityType<T> = T extends Repository<infer R> ? R : never
