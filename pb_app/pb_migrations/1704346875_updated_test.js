/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  hw.id, hw.serial_code, stat.user_id\n  from hw_usage_status as stat\n    inner join hw_list as hw\n    on stat.hw_id = hw.id"
  }

  // remove
  collection.schema.removeField("pvywmfzt")

  // remove
  collection.schema.removeField("dhuo89mo")

  // remove
  collection.schema.removeField("tl24vxty")

  // remove
  collection.schema.removeField("sj4zuknb")

  // remove
  collection.schema.removeField("k5w0f1uu")

  // remove
  collection.schema.removeField("5owu2yo5")

  // remove
  collection.schema.removeField("k2ofacyc")

  // remove
  collection.schema.removeField("yz267zuj")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh")

  collection.options = {
    "query": "select\n  hw.id, hw.manage_code, hw.ip_addr, hw.hw_category, hw.vendor_name, hw.build_year, hw.build_mon, hw.model_code, hw.serial_code\n  from hw_list as hw\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvywmfzt",
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
    "id": "dhuo89mo",
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
    "id": "tl24vxty",
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
    "id": "sj4zuknb",
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
    "id": "k5w0f1uu",
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
    "id": "5owu2yo5",
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
    "id": "k2ofacyc",
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
    "id": "yz267zuj",
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
  collection.schema.removeField("iuq9bpyw")

  // remove
  collection.schema.removeField("cta5z5xf")

  return dao.saveCollection(collection)
})
