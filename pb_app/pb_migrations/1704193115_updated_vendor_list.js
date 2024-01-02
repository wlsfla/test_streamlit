/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "glvsf7az",
    "name": "model_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u8ymhv2v",
    "name": "model_code",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi")

  // remove
  collection.schema.removeField("glvsf7az")

  // remove
  collection.schema.removeField("u8ymhv2v")

  return dao.saveCollection(collection)
})
