# Testimonial — Public API Contract

Base path: `/api/v1/testimonial`

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

## POST /

Submit a new testimonial. New submissions are unpublished (`isPublished: false`) by default until an admin/moderator approves them.

**Auth:** none

**Request body:**
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "role": "Senior Engineer at Google",
  "company": "Google",
  "avatar": "https://example.com/avatar.jpg",
  "linkedIn": "https://linkedin.com/in/janesmith",
  "quote": "Working with Ranok was an exceptional experience...",
  "relation": "PEER",
  "featured": true,
  "sortOrder": 1
}
```

**Validation:**
- `name` — required, 1–100 characters
- `email` — required, valid email address
- `role` — required, 1–150 characters
- `company` — optional, 1–150 characters
- `avatar` — optional, valid URL
- `linkedIn` — optional, valid URL
- `quote` — required, 10–1000 characters
- `relation` — required, one of: `MENTOR` `PEER` `CLIENT` `INSTRUCTOR` `OTHER`
- `featured` — optional boolean (default `false`)
- `sortOrder` — optional non-negative integer (default `0`)

**Response `201`:**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "Testimonial submitted successfully",
  "data": {
    "_id": "<objectId>",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "Senior Engineer at Google",
    "company": "Google",
    "avatar": "https://example.com/avatar.jpg",
    "linkedIn": "https://linkedin.com/in/janesmith",
    "quote": "Working with Ranok was an exceptional experience...",
    "relation": "PEER",
    "featured": true,
    "sortOrder": 1,
    "isPublished": false,
    "createdAt": "2026-05-17T10:00:00.000Z",
    "updatedAt": "2026-05-17T10:00:00.000Z"
  }
}
```

**Errors:**
| Status | Condition |
|---|---|
| 400 | Validation failure |

---

## GET /

List all **published** testimonials (non-deleted).

**Auth:** none

**Query parameters:**
| Param       | Type                                           | Description                                         |
|-------------|------------------------------------------------|-----------------------------------------------------|
| `featured`  | `true` \| `false`                              | Filter by featured status                           |
| `relation`  | `MENTOR` \| `PEER` \| `CLIENT` \| `INSTRUCTOR` \| `OTHER` | Filter by relation type              |
| `search`    | string                                         | Regex search across `name`, `company`, `quote`      |
| `sortBy`    | string                                         | Field to sort by (default: `createdAt`)             |
| `sortOrder` | `asc` \| `desc`                                | Sort direction (default: `asc`)                     |
| `page`      | number                                         | Page number (default: `1`)                         |
| `limit`     | number                                         | Results per page (default: `10`)                   |

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Testimonials retrieved successfully",
  "data": [
    {
      "_id": "<objectId>",
      "name": "Jane Smith",
      "role": "Senior Engineer at Google",
      "company": "Google",
      "avatar": "https://example.com/avatar.jpg",
      "linkedIn": "https://linkedin.com/in/janesmith",
      "quote": "Working with Ranok was an exceptional experience...",
      "relation": "PEER",
      "featured": true,
      "sortOrder": 1,
      "createdAt": "2026-05-17T10:00:00.000Z",
      "updatedAt": "2026-05-17T10:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 8,
    "totalPage": 1
  }
}
```

Note: `addedBy`, `email`, `isPublished`, and `isDeleted` are excluded from the response. Only testimonials with `isPublished: true` are returned.

---

## GET /featured

List published, **featured** testimonials only (non-deleted).

**Auth:** none

**Query parameters:**
| Param       | Type                                           | Description                                         |
|-------------|------------------------------------------------|-----------------------------------------------------|
| `relation`  | `MENTOR` \| `PEER` \| `CLIENT` \| `INSTRUCTOR` \| `OTHER` | Filter by relation type              |
| `search`    | string                                         | Regex search across `name`, `company`, `quote`      |
| `sortBy`    | string                                         | Field to sort by (default: `createdAt`)             |
| `sortOrder` | `asc` \| `desc`                                | Sort direction (default: `asc`)                     |
| `page`      | number                                         | Page number (default: `1`)                         |
| `limit`     | number                                         | Results per page (default: `10`)                   |

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Featured testimonials retrieved successfully",
  "data": [
    {
      "_id": "<objectId>",
      "name": "Jane Smith",
      "role": "Senior Engineer at Google",
      "company": "Google",
      "avatar": "https://example.com/avatar.jpg",
      "linkedIn": "https://linkedin.com/in/janesmith",
      "quote": "Working with Ranok was an exceptional experience...",
      "relation": "PEER",
      "featured": true,
      "sortOrder": 1,
      "createdAt": "2026-05-17T10:00:00.000Z",
      "updatedAt": "2026-05-17T10:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 3,
    "totalPage": 1
  }
}
```

Note: `addedBy`, `email`, `isPublished`, and `isDeleted` are excluded from the response.
