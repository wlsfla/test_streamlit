/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v4ig72s6i6r5xwh",
    "created": "2024-01-04 04:32:48.116Z",
    "updated": "2024-01-04 04:32:48.116Z",
    "name": "test",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT hw_list.id, hw_list.build_year, hw_list.build_mon FROM hw_list"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v4ig72s6i6r5xwh");

  return dao.deleteCollection(collection);
})
