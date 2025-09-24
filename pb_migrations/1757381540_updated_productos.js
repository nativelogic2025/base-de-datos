/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  // remove field
  collection.fields.removeById("text1590518851")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_x5Pc6ZsvgR` ON `productos` (`producto`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1590518851",
    "max": 0,
    "min": 0,
    "name": "producto",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
