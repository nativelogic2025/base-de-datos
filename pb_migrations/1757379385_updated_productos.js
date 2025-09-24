/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_x5Pc6ZsvgR` ON `productos` (`producto`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
