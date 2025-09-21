# Permissions Routes Documentation

## Permission Management Routes

### Create Permission
```http
POST http://localhost:3000/api/permissions
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "permission": "CREATE_REPORT"
}
```

### Get All Permissions
```http
GET http://localhost:3000/api/permissions
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update Permission
```http
PUT http://localhost:3000/api/permissions
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "permission_id": 1,
    "permission": "MANAGE_REPORTS"
}
```

### Delete Permission
```http
DELETE http://localhost:3000/api/permissions/:permission_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**: 
  - `permission_id`: ID of the permission to delete

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
    "message": "Permission created successfully",
    "data": {
        "id": 1,
        "permission": "CREATE_REPORT"
    }
}
```

### Error Response Example
```json
{
    "status": false,
    "message": "Permission already exists in database",
    "data": null
}
```

## Notes
- All routes require authentication via Bearer token
- Permission names must be unique
- Permission names are limited to 50 characters
- Recommended to use UPPERCASE_WITH_UNDERSCORES format
- Permissions are used in combination with modules and roles
- Deleting a permission will affect all role-module-permission associations