# Certification — Public API Contract

Base path: `/api/v1/certification`

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

Get all certification records. Soft-deleted records are excluded. Results are sorted by `sortOrder` ascending, then `issuedAt` descending.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Certifications retrieved successfully",
  "data": [
    {
      "_id": "665f1a2b3c4d5e6f7a8b9c0d",
      "name": "AWS Certified Developer – Associate",
      "issuer": "Amazon Web Services",
      "issuerLogoUrl": "https://cdn.example.com/logos/aws.png",
      "credentialId": "ABC123XYZ",
      "credentialUrl": "https://aws.amazon.com/verify/ABC123XYZ",
      "certificateUrl": "https://cdn.example.com/certs/aws-dev.pdf",
      "badgeUrl": "https://cdn.example.com/badges/aws-dev.png",
      "isExpired": false,
      "isLifetime": false,
      "issuedAt": "2024-03-15T00:00:00.000Z",
      "expiresAt": "2027-03-15T00:00:00.000Z",
      "courseStartDate": "2024-01-01T00:00:00.000Z",
      "courseEndDate": "2024-03-01T00:00:00.000Z",
      "featured": true,
      "sortOrder": 1,
      "createdAt": "2026-05-17T10:00:00.000Z",
      "updatedAt": "2026-05-17T10:00:00.000Z"
    }
  ]
}
```

Note: `addedBy`, `isDeleted`, and `deletedAt` are excluded from the response.

---

## GET /:id

Get a single certification record by MongoDB ID. Soft-deleted records return 404.

**Auth:** none

**Response `200`:**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Certification retrieved successfully",
  "data": {
    "_id": "665f1a2b3c4d5e6f7a8b9c0d",
    "name": "AWS Certified Developer – Associate",
    "issuer": "Amazon Web Services",
    "issuerLogoUrl": "https://cdn.example.com/logos/aws.png",
    "credentialId": "ABC123XYZ",
    "credentialUrl": "https://aws.amazon.com/verify/ABC123XYZ",
    "certificateUrl": "https://cdn.example.com/certs/aws-dev.pdf",
    "badgeUrl": "https://cdn.example.com/badges/aws-dev.png",
    "isExpired": false,
    "isLifetime": false,
    "issuedAt": "2024-03-15T00:00:00.000Z",
    "expiresAt": "2027-03-15T00:00:00.000Z",
    "courseStartDate": "2024-01-01T00:00:00.000Z",
    "courseEndDate": "2024-03-01T00:00:00.000Z",
    "featured": true,
    "sortOrder": 1,
    "createdAt": "2026-05-17T10:00:00.000Z",
    "updatedAt": "2026-05-17T10:00:00.000Z"
  }
}
```

Note: `addedBy`, `isDeleted`, and `deletedAt` are excluded from the response.

**Errors:**
| Status | Condition |
|---|---|
| 404 | Record not found or soft-deleted |
