# Project — Public API Contract

Base path: `/api/v1/project`

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

Get all **published** projects.

**Auth:** none

**Query parameters:**

| Param              | Type            | Description                                                  |
|--------------------|-----------------|--------------------------------------------------------------|
| `search`           | string          | Text search across `title`, `tagline`, `summary`, `tags`    |
| `category`         | enum            | `FULL_STACK` `FRONTEND` `BACKEND` `MOBILE` `CLI_TOOL` `LIBRARY` `API` `PACKAGE` `OTHER` |
| `type`             | enum            | `PERSONAL` `FREELANCE` `OPEN_SOURCE` `CLIENT` `HACKATHON` `OTHER` |
| `complexity`       | enum            | `BEGINNER` `INTERMEDIATE` `ADVANCED`                        |
| `featured`         | boolean         | Filter featured projects                                     |
| `isFeaturedOnHome` | boolean         | Filter home-featured projects                                |
| `sortBy`           | string          | Field to sort by (default: `createdAt`)                     |
| `sortOrder`        | `asc` \| `desc` | Sort direction (default: `asc`)                              |
| `page`             | number          | Page number (default: `1`)                                  |
| `limit`            | number          | Results per page (default: `10`)                            |

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Projects retrieved successfully",
  "data": [
    {
      "_id": "665f1a2b3c4d5e6f7a8b9c0d",
      "title": "My Portfolio Backend",
      "slug": "my-portfolio-backend",
      "tagline": "A RESTful API for my developer portfolio",
      "summary": "Full-featured backend with auth, projects, and more.",
      "description": "Detailed description...",
      "category": "BACKEND",
      "type": "PERSONAL",
      "status": "PUBLISHED",
      "complexity": "INTERMEDIATE",
      "myRole": "Solo Developer",
      "coverImage": "https://example.com/cover.png",
      "highlights": ["JWT auth", "Zod validation"],
      "techStack": {
        "backend": ["Node.js", "Express", "TypeScript"],
        "database": ["MongoDB"]
      },
      "tags": ["api", "typescript"],
      "featured": false,
      "isFeaturedOnHome": false,
      "frontendLiveUrl": "https://example.com",
      "backendLiveUrl": "https://api.example.com",
      "frontendRepoUrl": "https://github.com/user/frontend",
      "backendRepoUrl": "https://github.com/user/backend",
      "startedAt": "2024-01-01T00:00:00.000Z",
      "completedAt": "2024-06-01T00:00:00.000Z",
      "createdAt": "2026-05-16T10:00:00.000Z",
      "updatedAt": "2026-05-16T10:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 42,
    "totalPage": 5
  }
}
```

Note: `isDeleted`, `deletedBy`, `deletedAt`, and `addedBy` are excluded from the response.

---

## GET /slug/:slug

Get a single **published** project by slug.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Project retrieved successfully",
  "data": { "...full published project fields..." }
}
```

**Errors:**
| Status | Condition |
|---|---|
| 404 | Project not found, not published, or slug does not match |

---

## GET /:id

Get a single **published** project by MongoDB ID.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Project retrieved successfully",
  "data": { "...full published project fields..." }
}
```

**Errors:**
| Status | Condition |
|---|---|
| 404 | Project not found or not published |
