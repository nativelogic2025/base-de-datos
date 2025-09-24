/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select614793622",
    "maxSelect": 1,
    "name": "Tamano",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "chico",
      "mediano",
      "grande"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // remove field
  collection.fields.removeById("select614793622")

  return app.save(collection)
})
