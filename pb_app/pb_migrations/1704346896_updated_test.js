/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  hw.id, hw.serial_code, stat.user_id\n  from hw_list as hw\n    inner join hw_usage_status as stat\n    on stat.hw_id = hw.id"
  }

  // remove
  collection.schema.removeField("iuq9bpyw")

  // remove
  collection.schema.removeField("cta5z5xf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tr1pelxa",
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
    "id": "1kqjziyi",
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
    "query": "select\n  hw.id, hw.serial_code, stat.user_id\n  from hw_usage_status as stat\n    inner join hw_list as hw\n    on stat.hw_id = hw.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iuq9bpyw",
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
    "id": "cta5z5xf",
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
  collection.schema.removeField("tr1pelxa")

  // remove
  collection.schema.removeField("1kqjziyi")

  return dao.saveCollection(collection)
})
