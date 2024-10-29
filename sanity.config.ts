import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { schemaTypes } from './sanity/schemas'

const config = defineConfig({
  projectId: "d9aqllzw",
  dataset: "production",
  title: "Espace administratif | Sunalt invest",
  apiVersion: "2023-03-09",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes }
})

export default config