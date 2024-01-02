/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a8wfs2ru0cphkvi",
    "created": "2024-01-02 10:57:39.972Z",
    "updated": "2024-01-02 10:57:39.972Z",
    "name": "product_list",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "w5nqexrt",
        "name": "year",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2000,
          "max": 2050,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "nyvezr9l",
        "name": "month",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a8wfs2ru0cphkvi");

  return dao.deleteCollection(collection);
})
