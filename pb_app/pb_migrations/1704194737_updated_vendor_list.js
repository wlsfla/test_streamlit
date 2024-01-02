/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsgeh4gd",
    "name": "vendor_name",
    "type": "select",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Samsung",
        "LG",
        "ATEC",
        "Lucoms",
        "RedStone",
        "NY",
        "JooYoon",
        "ETC"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsgeh4gd",
    "name": "vendor_name",
    "type": "select",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Samsung",
        "LG",
        "ATEC",
        "Lucoms",
        "RedStone. ETC"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
