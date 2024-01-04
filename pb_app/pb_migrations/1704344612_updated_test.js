/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select hw_list.id, hw_list.manage_code, hw_list.ip_addr, hw_list.hw_category, hw_list.vendor_name, hw_list.build_year, hw_list.build_mon, hw_list.model_code, hw_list.serial_code from hw_list"
  }

  // remove
  collection.schema.removeField("xcuiafl7")

  // remove
  collection.schema.removeField("rirm3a26")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycn7212w",
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
    "id": "qjhf9rbk",
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
    "id": "3jwsla7q",
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
    "id": "onvhbmrm",
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
    "id": "renokbb9",
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
    "id": "5hqp6lai",
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
    "id": "p9jr8sxw",
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
    "id": "iezwxqvr",
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
    "query": "SELECT hw_list.id, hw_list.build_year, hw_list.build_mon FROM hw_list"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcuiafl7",
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
    "id": "rirm3a26",
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

  // remove
  collection.schema.removeField("ycn7212w")

  // remove
  collection.schema.removeField("qjhf9rbk")

  // remove
  collection.schema.removeField("3jwsla7q")

  // remove
  collection.schema.removeField("onvhbmrm")

  // remove
  collection.schema.removeField("renokbb9")

  // remove
  collection.schema.removeField("5hqp6lai")

  // remove
  collection.schema.removeField("p9jr8sxw")

  // remove
  collection.schema.removeField("iezwxqvr")

  return dao.saveCollection(collection)
})
