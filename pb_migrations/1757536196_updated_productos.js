/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select4156523479",
    "maxSelect": 1,
    "name": "tipo_de_pan",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "chocolate",
      "vainilla"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // remove field
  collection.fields.removeById("select4156523479")

  return app.save(collection)
})
