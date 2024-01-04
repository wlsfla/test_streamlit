/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  hw.id, hw.serial_code, stat.user_id\n  from hw_list as hw\n    inner join hw_usage_status as stat\n    on stat.hw_id = hw.id"
  }

  // remove
  collection.schema.removeField("q5xydkfa")

  // remove
  collection.schema.removeField("1j4o9l7f")

  // remove
  collection.schema.removeField("33b8esrv")

  // remove
  collection.schema.removeField("oawhff8z")

  // remove
  collection.schema.removeField("pqun9k1u")

  // remove
  collection.schema.removeField("sgcddoe6")

  // remove
  collection.schema.removeField("aztotsty")

  // remove
  collection.schema.removeField("yg2ytiyh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygubh8pn",
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
    "id": "ebizccbh",
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
    "query": "select\n  hw.id, hw.manage_code, hw.ip_addr, hw.hw_category, hw.vendor_name, hw.build_year, hw.build_mon, hw.model_code, hw.serial_code\n  from hw_list as hw"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q5xydkfa",
    "name": "manage_code",
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
    "id": "1j4o9l7f",
    "name": "ip_addr",
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
    "id": "33b8esrv",
    "name": "hw_category",
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
    "id": "oawhff8z",
    "name": "vendor_name",
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
    "id": "pqun9k1u",
    "name": "build_year",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sgcddoe6",
    "name": "build_mon",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aztotsty",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yg2ytiyh",
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

  // remove
  collection.schema.removeField("ygubh8pn")

  // remove
  collection.schema.removeField("ebizccbh")

  return dao.saveCollection(collection)
})
