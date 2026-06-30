# Skill — Public API Contract

Base path: `/api/v1/skill`

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

Get all skills. Results are sorted by `sortOrder` ascending, then `name` ascending.

**Auth:** none

**Query parameters:**

| Param      | Type | Description                                                                      |
|------------|------|----------------------------------------------------------------------------------|
| `category` | enum | Filter by: `FRONTEND` `BACKEND` `DATABASE` `DEVOPS` `LANGUAGE` `TOOL` `OTHER`  |

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Skills retrieved successfully",
  "data": [
    {
      "_id": "665f1a2b3c4d5e6f7a8b9c0d",
      "name": "TypeScript",
      "slug": "typescript",
      "category": "LANGUAGE",
      "level": "ADVANCED",
      "iconUrl": "https://cdn.example.com/icons/typescript.svg",
      "iconName": "typescript",
      "featured": true,
      "sortOrder": 1,
      "createdAt": "2026-05-17T10:00:00.000Z",
      "updatedAt": "2026-05-17T10:00:00.000Z"
    }
  ]
}
```

Note: `addedBy` is excluded from the response.

---

## GET /:id

Get a single skill by MongoDB ID.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Skill retrieved successfully",
  "data": {
    "_id": "665f1a2b3c4d5e6f7a8b9c0d",
    "name": "TypeScript",
    "slug": "typescript",
    "category": "LANGUAGE",
    "level": "ADVANCED",
    "iconUrl": "https://cdn.example.com/icons/typescript.svg",
    "iconName": "typescript",
    "featured": true,
    "sortOrder": 1,
    "createdAt": "2026-05-17T10:00:00.000Z",
    "updatedAt": "2026-05-17T10:00:00.000Z"
  }
}
```

Note: `addedBy` is excluded from the response.

**Errors:**
| Status | Condition |
|---|---|
| 404 | Skill not found |
