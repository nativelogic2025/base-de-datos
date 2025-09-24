/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // update collection data
  unmarshal({
    "name": "productos"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // update collection data
  unmarshal({
    "name": "producto"
  }, collection)

  return app.save(collection)
})
