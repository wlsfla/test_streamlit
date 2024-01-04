/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  stat.id, stat.user_id, hw.serial_code\n  from hw_usage_status as stat inner join hw_list as hw\n    on stat.hw_id = hw.id"
  }

  // remove
  collection.schema.removeField("mryzaukw")

  // remove
  collection.schema.removeField("vspepur2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrmm0sen",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wsqzo1ot",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  hw.id, hw.serial_code, stat.user_id\n  from hw_usage_status as stat\n    inner join hw_list as hw\n    on stat.hw_id = hw.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mryzaukw",
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
    "id": "vspepur2",
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
  collection.schema.removeField("qrmm0sen")

  // remove
  collection.schema.removeField("wsqzo1ot")

  return dao.saveCollection(collection)
})
