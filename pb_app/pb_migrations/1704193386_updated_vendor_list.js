/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ccdvsdl",
    "name": "device_category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "PC",
        "Printer",
        "Monitor",
        "ETC"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // remove
  collection.schema.removeField("1ccdvsdl")

  return dao.saveCollection(collection)
})
