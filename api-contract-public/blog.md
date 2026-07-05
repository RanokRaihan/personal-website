# Blog — Public API Contract

Base path: `/api/v1/blog`

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

List all **published** blog posts.

**Auth:** none

**Query parameters:**
| Param       | Type            | Description                                            |
|-------------|-----------------|--------------------------------------------------------|
| `search`    | string          | Regex search across `title`, `summary`, `tags`        |
| `sortBy`    | string          | Field to sort by (default: `createdAt`)               |
| `sortOrder` | `asc` \| `desc` | Sort direction (default: `asc`)                        |
| `page`      | number          | Page number (default: `1`)                            |
| `limit`     | number          | Results per page (default: `10`)                      |

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Blogs retrieved successfully",
  "data": [
    {
      "_id": "<objectId>",
      "title": "Getting Started with TypeScript",
      "slug": "getting-started-with-typescript",
      "summary": "A beginner-friendly intro to TypeScript...",
      "content": "# Getting Started\n\n...",
      "coverImage": "https://example.com/cover.jpg",
      "tags": ["typescript", "javascript"],
      "status": "PUBLISHED",
      "views": 142,
      "readTime": 5,
      "metaTitle": "Getting Started with TypeScript | Ranok Raihan",
      "metaDescription": "Learn the basics of TypeScript...",
      "ogImage": "https://example.com/og.jpg",
      "featured": true,
      "publishedAt": "2026-05-17T10:00:00.000Z",
      "createdAt": "2026-05-17T09:00:00.000Z",
      "updatedAt": "2026-05-17T10:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 24,
    "totalPage": 3
  }
}
```

Note: `addedBy`, `isDeleted`, and `deletedAt` are excluded from the response.

---

## GET /:slug

Get a single **published** blog post by slug. Atomically increments the view count on each call.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Blog retrieved successfully",
  "data": {
    "_id": "<objectId>",
    "title": "Getting Started with TypeScript",
    "slug": "getting-started-with-typescript",
    "summary": "A beginner-friendly intro to TypeScript...",
    "content": "# Getting Started\n\n...",
    "coverImage": "https://example.com/cover.jpg",
    "tags": ["typescript", "javascript"],
    "status": "PUBLISHED",
    "views": 143,
    "readTime": 5,
    "metaTitle": "Getting Started with TypeScript | Ranok Raihan",
    "metaDescription": "Learn the basics of TypeScript...",
    "ogImage": "https://example.com/og.jpg",
    "featured": true,
    "publishedAt": "2026-05-17T10:00:00.000Z",
    "createdAt": "2026-05-17T09:00:00.000Z",
    "updatedAt": "2026-05-17T10:00:00.000Z"
  }
}
```

Note: `addedBy`, `isDeleted`, and `deletedAt` are excluded from the response.

**Errors:**
| Status | Condition |
|---|---|
| 404 | Blog not found, not published, or soft-deleted |
