# Keywords Routes Documentation

## Keyword Management Routes

### Create Keyword
```http
POST http://localhost:3000/api/keywords
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "keyword": "Machine Learning"
}
```

### Get All Keywords
```http
GET http://localhost:3000/api/keywords
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update Keyword
```http
PUT http://localhost:3000/api/keywords
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "keyword_id": 1,
    "keyword": "Artificial Intelligence"
}
```

### Delete Keyword
```http
DELETE http://localhost:3000/api/keywords/:keyword_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**: 
  - `keyword_id`: ID of the keyword to delete

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
    "message": "Keyword created successfully",
    "data": {
        "id": 1,
        "keyword": "Machine Learning"
    }
}
```

### Error Response Example
```json
{
    "status": false,
    "message": "Keyword already exists in database",
    "data": null
}
```

## Notes
- All routes require authentication via Bearer token
- Keywords must be unique
- Keywords are limited to 30 characters
- Keywords are used to categorize and search reports
- Deleting a keyword will remove it from all associated reports
- Consider checking for existing report associations before deletion
- Keywords are case-sensitive