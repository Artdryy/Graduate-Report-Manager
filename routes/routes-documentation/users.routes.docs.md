# Users Routes Documentation

## Authentication Routes

### Login User
```http
POST http://localhost:3000/api/users/login
```
- **Auth Required**: No
- **Content-Type**: application/json
```json
{
    "user_name": "johndoe",
    "password": "yourpassword123"
}
```

### Refresh Token
```http
POST http://localhost:3000/api/users/refresh-token
```
- **Auth Required**: No
- **Content-Type**: application/json
```json
{
    "refreshToken": "your-refresh-token-here"
}
```

### Logout User
```http
POST http://localhost:3000/api/users/logout
```
- **Auth Required**: No
- **Content-Type**: application/json
```json
{
    "refreshToken": "your-refresh-token-here"
}
```

### Request Password Reset
```http
POST http://localhost:3000/api/users/request-password-reset
```
- **Auth Required**: No
- **Content-Type**: application/json
```json
{
    "email": "user@example.com"
}
```

### Reset Password
```http
POST http://localhost:3000/api/users/reset-password
```
- **Auth Required**: No
- **Content-Type**: application/json
```json
{
    "email": "user@example.com",
    "code": "reset_code",
    "newPassword": "new_password123"
}
```

## User Management Routes

### Create User
```http
POST http://localhost:3000/api/users/create
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "user_name": "newuser",
    "password": "userpass123",
    "email": "newuser@example.com",
    "role_id": 1,
    "is_active": 1
}
```

### Get All Users
```http
GET http://localhost:3000/api/users/list
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update User
```http
PUT http://localhost:3000/api/users/update
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "user_id": 1,
    "user_name": "updateduser",
    "email": "updated@example.com",
    "role_id": 2,
    "is_active": 1
}
```

### Delete User
```http
DELETE http://localhost:3000/api/users/:user_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**: 
  - `user_id`: ID of the user to delete

## Response Format
All endpoints return responses in the following format:
```json
{
    "status": true,
    "message": "Operation message",
    "data": null | {} | []
}
```

## Error Responses
```json
{
    "status": false,
    "message": "Error message",
    "data": null
}
```