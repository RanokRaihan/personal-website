# Site Settings — Public API Contract

Base path: `/api/v1/setting`

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

Get public site settings — portfolio owner info, bio, social links, SEO metadata, and availability status.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Site settings retrieved successfully",
  "data": {
    "_id": "665f1a2b3c4d5e6f7a8b9c0d",
    "name": "Ranok Raihan",
    "title": "Full Stack Developer",
    "bio": "I build scalable web applications.",
    "avatar": "https://cdn.example.com/avatar.png",
    "resumeUrl": "https://cdn.example.com/resume.pdf",
    "openToWork": true,
    "availableFrom": "2026-06-01T00:00:00.000Z",
    "socials": {
      "github": "https://github.com/ranokraihan",
      "linkedin": "https://linkedin.com/in/ranokraihan",
      "twitter": "https://twitter.com/ranokraihan",
      "devTo": "https://dev.to/ranokraihan",
      "youtube": "https://youtube.com/@ranokraihan",
      "email": "ranok@example.com"
    },
    "metaTitle": "Ranok Raihan – Full Stack Developer",
    "metaDescription": "Portfolio of Ranok Raihan, Full Stack Developer.",
    "ogImage": "https://cdn.example.com/og.png",
    "footerText": "© 2026 Ranok Raihan. All rights reserved.",
    "createdAt": "2026-05-17T10:00:00.000Z"
  }
}
```

Note: `updatedAt` is excluded from the response.

**Errors:**
| Status | Condition |
|---|---|
| 404 | Settings not yet configured |
