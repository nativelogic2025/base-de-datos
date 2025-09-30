/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // remove field
  collection.fields.removeById("select3437334670")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2687480828",
    "hidden": false,
    "id": "relation3437334670",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Categoria",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select3437334670",
    "maxSelect": 1,
    "name": "Categoria",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Pasteles",
      "Postres",
      "Velas",
      "Reposteria",
      "Extras"
    ]
  }))

  // remove field
  collection.fields.removeById("relation3437334670")

  return app.save(collection)
})
