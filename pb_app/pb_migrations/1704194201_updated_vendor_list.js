/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // remove
  collection.schema.removeField("fcwidjyh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsgeh4gd",
    "name": "vendor_name",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Samsung",
        "LG",
        "ATEC",
        "Lucoms",
        "RedStone"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcwidjyh",
    "name": "vendor_name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zsgeh4gd")

  return dao.saveCollection(collection)
})
