/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // remove field
  collection.fields.removeById("bool2231372053")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool2231372053",
    "name": "sabores",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
