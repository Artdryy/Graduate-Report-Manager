# Companies Routes Documentation

## Company Management Routes

### Create Company
```http
POST http://localhost:3000/api/companies/create
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "company_name": "Tech Solutions Inc",
    "description": "Leading technology solutions provider",
    "address": "123 Tech Street, Silicon Valley",
    "phone_number": "+1 (555) 123-4567",
    "email": "contact@techsolutions.com"
}
```

### Get All Companies
```http
GET http://localhost:3000/api/companies/list
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json

### Update Company
```http
PUT http://localhost:3000/api/companies/update
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: application/json
```json
{
    "company_id": 1,
    "company_name": "Tech Solutions International",
    "description": "Global technology solutions provider",
    "address": "456 Innovation Avenue",
    "phone_number": "+1 (555) 987-6543",
    "email": "contact@techsolutions-intl.com"
}
```

### Delete Company
```http
DELETE http://localhost:3000/api/companies/delete/:company_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**: 
  - `company_id`: ID of the company to delete

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
    "message": "Company created successfully",
    "data": {
        "id": 1,
        "company_name": "Tech Solutions Inc",
        "description": "Leading technology solutions provider",
        "address": "123 Tech Street, Silicon Valley",
        "phone_number": "+1 (555) 123-4567",
        "email": "contact@techsolutions.com"
    }
}
```

### Error Response Example
```json
{
    "status": false,
    "message": "Company already exists in database",
    "data": null
}
```

## Notes
- All routes require authentication via Bearer token
- Company names must be unique
- Email format must be valid
- Phone numbers are optional but must follow a valid format if provided
- Deleting a company may affect related records (e.g., reports)