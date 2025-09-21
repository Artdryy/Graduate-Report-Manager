# Roles Routes Documentation

## Role Management Routes

### Create Role
```http
POST http://localhost:3000/api/roles
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "role_name": "admin",
    "description": "Administrator role with full access"
}
```

### Get All Roles
```http
GET http://localhost:3000/api/roles
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update Role
```http
PUT http://localhost:3000/api/roles
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "role_id": 1,
    "role_name": "super_admin",
    "description": "Updated role description"
}
```

### Delete Role
```http
DELETE http://localhost:3000/api/roles/:role_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**: 
  - `role_id`: ID of the role to delete

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
    "message": "Role created successfully",
    "data": {
        "id": 1,
        "role_name": "admin",
        "description": "Administrator role with full access"
    }
}
```

### Error Response Example
```json
{
    "status": false,
    "message": "Role already exists in database",
    "data": null
}
```

## Notes
- All routes require authentication via Bearer token
- Role names must be unique
- Deleting a role will affect all users assigned to that role