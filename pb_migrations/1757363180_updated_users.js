/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select240467767",
    "maxSelect": 1,
    "name": "rol",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "colaborador",
      "admin"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("select240467767")

  return app.save(collection)
})
