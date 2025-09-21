# Semester Routes Documentation

## Semester Management Routes

### Create Semester
```http
POST http://localhost:3000/api/semesters
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "semester": "2025-2"
}
```

### Get All Semesters
```http
GET http://localhost:3000/api/semesters
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update Semester
```http
PUT http://localhost:3000/api/semesters
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "semester_id": 1,
    "semester": "2025-1"
}
```

### Delete Semester
```http
DELETE http://localhost:3000/api/semesters/:semester_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**: 
  - `semester_id`: ID of the semester to delete

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
    "message": "Semester created successfully",
    "data": {
        "id": 1,
        "semester": "2025-2"
    }
}
```

### Error Response Example
```json
{
    "status": false,
    "message": "Semester already exists in database",
    "data": null
}
```

## Notes
- All routes require authentication via Bearer token
- Semester values must be unique
- Semester values are limited to 30 characters
- Recommended format: "YYYY-N" where N is the semester number
- Deleting a semester will affect all reports associated with it
- Consider checking for existing reports before deletion