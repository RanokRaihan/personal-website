# Message — Public API Contract

Base path: `/api/v1/message`

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

Submit a contact message. Sends an email notification to the portfolio owner.

**Auth:** none

**Rate limit:** 5 requests per 10 minutes per IP → `429` when exceeded.

**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Collaboration opportunity",
  "message": "Hi, I'd love to work with you on..."
}
```

**Validation:**
- `name` — required, 1–100 characters
- `email` — required, valid email format
- `subject` — optional, 1–200 characters
- `message` — required, 10–2000 characters

**Response `201`:**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "Message sent successfully",
  "data": { "_id": "<objectId>" }
}
```

Note: `ipAddress` and `userAgent` are captured server-side and stored in the database but never returned to the caller.

**Errors:**
| Status | Condition |
|---|---|
| 400 | Validation failure |
| 429 | Rate limit exceeded (5 requests per 10 minutes per IP) |
