# Education — Public API Contract

Base path: `/api/v1/education`

All responses follow the shape:
```json
{
  "success": true,
  "statusCode": 200,
  "message": "...",
  "data": { ... }
}
```

Error responses:
```json
{
  "success": false,
  "statusCode": 4xx | 5xx,
  "message": "...",
  "errorDetails": [ { "path": "...", "message": "..." } ]
}
```

---

## GET /

Get all education records. Soft-deleted records are excluded. Results are sorted by `sortOrder` ascending, then `startDate` descending.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Education records retrieved successfully",
  "data": [
    {
      "_id": "665f1a2b3c4d5e6f7a8b9c0d",
      "institution": "University of Dhaka",
      "degree": "Bachelor of Science",
      "field": "Computer Science",
      "description": "Graduated with distinction.",
      "logoUrl": "https://cdn.example.com/logos/du.png",
      "location": "Dhaka, Bangladesh",
      "isCurrent": false,
      "startDate": "2019-01-01T00:00:00.000Z",
      "endDate": "2023-01-01T00:00:00.000Z",
      "featured": true,
      "sortOrder": 1,
      "createdAt": "2026-05-17T10:00:00.000Z",
      "updatedAt": "2026-05-17T10:00:00.000Z"
    }
  ]
}
```

Note: `addedBy` and `isDeleted` are excluded from the response.

---

## GET /:id

Get a single education record by MongoDB ID. Soft-deleted records return 404.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Education record retrieved successfully",
  "data": {
    "_id": "665f1a2b3c4d5e6f7a8b9c0d",
    "institution": "University of Dhaka",
    "degree": "Bachelor of Science",
    "field": "Computer Science",
    "description": "Graduated with distinction.",
    "logoUrl": "https://cdn.example.com/logos/du.png",
    "location": "Dhaka, Bangladesh",
    "isCurrent": false,
    "startDate": "2019-01-01T00:00:00.000Z",
    "endDate": "2023-01-01T00:00:00.000Z",
    "featured": true,
    "sortOrder": 1,
    "createdAt": "2026-05-17T10:00:00.000Z",
    "updatedAt": "2026-05-17T10:00:00.000Z"
  }
}
```

Note: `addedBy` and `isDeleted` are excluded from the response.

**Errors:**
| Status | Condition |
|---|---|
| 404 | Record not found or soft-deleted |
