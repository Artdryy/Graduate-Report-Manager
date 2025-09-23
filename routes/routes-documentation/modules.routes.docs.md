# Modules Routes Documentation

## Module Management Routes

### Create Module
```http
POST http://localhost:3000/api/modules/create
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "module_name": "reports"
}
```

### Get All Modules
```http
GET http://localhost:3000/api/modules/list
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update Module
```http
PUT http://localhost:3000/api/modules/update
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "module_id": 1,
    "module_name": "reports_management"
}
```

### Delete Module
```http
DELETE http://localhost:3000/api/modules/delete/:module_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**: 
  - `module_id`: ID of the module to delete

## Response Format
All endpoints return responses in the following format:
```json
{
    "status": true,
    "message": "Operation message",
    "data": null | {} | []
}
```

### Success Response Example
```json
{
    "status": true,
    "message": "Module created successfully",
    "data": {
        "id": 1,
        "module_name": "reports"
    }
}
```

### Error Response Example
```json
{
    "status": false,
    "message": "Module already exists in database",
    "data": null
}
```

## Notes
- All routes require authentication via Bearer token
- Module names must be unique
- Module names are limited to 20 characters
- Deleting a module will affect role permissions associated with it
- Modules are core components of the system's permission structure