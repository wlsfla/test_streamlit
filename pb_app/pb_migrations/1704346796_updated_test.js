/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  hw.id, hw.serial_code, stat.user_id\n  from hw_usage_status as stat\n    inner join hw_list as hw\n    on stat.hw_id = hw.id"
  }

  // remove
  collection.schema.removeField("ee6vzeve")

  // remove
  collection.schema.removeField("f3rnp0zj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xiow0bcf",
    "name": "serial_code",
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
    "id": "kzrogrbu",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jp19sz33pm3uawn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  hw.id, hw.serial_code, stat.user_id\n  from hw_list as hw, hw_usage_status as stat\n  where stat.hw_id = hw.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ee6vzeve",
    "name": "serial_code",
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
    "id": "f3rnp0zj",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jp19sz33pm3uawn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("xiow0bcf")

  // remove
  collection.schema.removeField("kzrogrbu")

  return dao.saveCollection(collection)
})
