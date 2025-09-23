# Reports Routes Documentation

## Overview
API endpoints for managing report documents. These routes handle PDF report uploads, updates, and retrievals.

## Endpoints

### Create Report
```http
POST http://localhost:3000/api/reports/create
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: multipart/form-data
- **Form Data**:
  - `pdf`: PDF file (required, max 5MB)
  - `title`: string
  - `description`: string
  - `semester_id`: number
  - `keywords`: string[] (comma-separated keywords)
```json
// Response Example
{
    "status": true,
    "message": "Report created successfully",
    "data": {
        "report_id": 1,
        "title": "Project Analysis 2024",
        "file_path": "uploads/1234567890.pdf"
    }
}
```

### Get All Reports
```http
GET http://localhost:3000/api/reports/list
```
- **Auth Required**: Yes (Bearer Token)
- **Response Example**:
```json
{
    "status": true,
    "data": [
        {
            "report_id": 1,
            "title": "Project Analysis 2024",
            "description": "Annual project analysis report",
            "file_path": "uploads/1234567890.pdf",
            "created_at": "2024-01-20T10:00:00Z",
            "semester": "2024A"
        }
    ]
}
```

### Get Reports by Keyword
```http
GET http://localhost:3000/api/reports/keyword/:keyword
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**:
  - `keyword`: Search keyword
- **Response Example**:
```json
{
    "status": true,
    "data": [
        {
            "report_id": 1,
            "title": "Project Analysis 2024",
            "keywords": ["analysis", "project", "2024"]
        }
    ]
}
```

### Update Report
```http
PUT http://localhost:3000/api/reports/update/:report_id
```
- **Auth Required**: Yes (Bearer Token)
- **Content-Type**: multipart/form-data
- **URL Parameters**:
  - `report_id`: ID of the report to update
- **Form Data**:
  - `pdf`: PDF file (optional)
  - `title`: string (optional)
  - `description`: string (optional)
  - `keywords`: string[] (optional, comma-separated)
```json
{
    "status": true,
    "message": "Report updated successfully",
    "data": {
        "report_id": 1,
        "title": "Updated Project Analysis 2024"
    }
}
```

### Delete Report
```http
DELETE http://localhost:3000/api/reports/delete/:report_id
```
- **Auth Required**: Yes (Bearer Token)
- **URL Parameters**:
  - `report_id`: ID of the report to delete
```json
{
    "status": true,
    "message": "Report deleted successfully",
    "data": null
}
```

## Error Responses
```json
{
    "status": false,
    "message": "Error description",
    "data": null
}
```

## Notes
- PDF files are limited to 5MB in size
- Only authenticated users with appropriate permissions can access these endpoints
- Keywords are stored and searched case-insensitive
- File uploads are automatically stored in the uploads directory
- All operations are logged for audit purposes