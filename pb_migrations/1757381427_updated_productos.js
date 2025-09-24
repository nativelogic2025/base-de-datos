/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // add field
  collection.fields.addAt(5, new Field({
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

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1027380240",
    "max": 0,
    "min": 0,
    "name": "Nombre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3891617292")

  // remove field
  collection.fields.removeById("select3437334670")

  // remove field
  collection.fields.removeById("text1027380240")

  return app.save(collection)
})
