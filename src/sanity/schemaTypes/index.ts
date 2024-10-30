import { type SchemaTypeDefinition } from 'sanity'
import { post } from '../post'
import { author } from '../author'
import { about } from '../about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,author,about],
}
