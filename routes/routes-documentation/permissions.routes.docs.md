# Permissions Routes Documentation

## Permission Management Routes

This API provides endpoints for managing both individual permissions and role-permission relationships.

### Create Permission
```http
POST http://localhost:3000/api/permissions/create
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
GET http://localhost:3000/api/permissions/list
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update Permission
```http
PUT http://localhost:3000/api/permissions/update
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
DELETE http://localhost:3000/api/permissions/delete/:permission_id
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

## Role-Permission Management Routes

### Get Permissions for Role
```http
GET http://localhost:3000/api/permissions/role/:role_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**:
  - `role_id`: ID of the role to get permissions for
- **Description**: Retrieves all permissions associated with a specific role
- **Success Response Example**:
```json
{
    "status": true,
    "message": "Permissions retrieved successfully",
    "data": [
        {
            "module_id": 1,
            "module_name": "Reports",
            "permissions": [
                {
                    "permission_id": 1,
                    "permission": "CREATE_REPORT",
                    "is_granted": 1
                }
            ]
        }
    ]
}
```

### Assign Permissions to Role
```http
POST http://localhost:3000/api/permissions/assign-to-role
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "role_id": 1,
    "permissions": [
        {
            "module_id": 1,
            "permissions": [1, 2, 3]
        },
        {
            "module_id": 2,
            "permissions": [4, 5]
        }
    ]
}
```
- **Description**: Assigns multiple permissions to a role, organized by modules
- **Success Response Example**:
```json
{
    "status": true,
    "message": "Permissions assigned successfully",
    "data": {
        "role_id": 1,
        "affected_modules": 2
    }
}
```

## Notes
- All routes require authentication via Bearer token
- Permission names must be unique
- Permission names are limited to 50 characters
- Recommended to use UPPERCASE_WITH_UNDERSCORES format
- Permissions are used in combination with modules and roles
- Deleting a permission will affect all role-module-permission associations
- When assigning permissions to roles:
  - Multiple module-permission combinations can be assigned at once
  - Existing permissions will be updated
  - Missing permissions will be removed
  - Invalid module or permission IDs will cause the operation to fail
  - Each module can have multiple permissions assigned
  - The operation is atomic - either all assignments succeed or none do