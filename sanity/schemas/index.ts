import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import partner from './partner'
import post from './post'

export const schemaTypes = [post, blockContent, partner]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, partner],
}
