# SDK Test Checklist

## Authentication
- [ ] `POST /auth/auth-token` returns `access_token` and `refresh_token`
- [ ] Invalid credentials return `401`
- [ ] Disabled key returns `401`
- [ ] Expired key returns `401`

## Workspaces
- [ ] `GET /workspaces/drive`
- [ ] `GET /workspaces?team_id=...`
- [ ] `GET /workspaces/details?workspace_id=...`
- [ ] `GET /workspaces/teams?team_id=...`
- [ ] `POST /workspaces/create`
- [ ] `PUT /workspaces/update`
- [ ] `DELETE /workspaces/delete`

## Folders
- [ ] `GET /folders?workspace_id=...`
- [ ] `GET /folders/details?folder_id=...`
- [ ] `GET /folders/content?folder_id=...`
- [ ] `POST /folders/create`
- [ ] `PUT /folders/update`
- [ ] `DELETE /folders/delete`
- [ ] `POST /folders/move`

## Documents
- [ ] `GET /documents?workspace_id=...`
- [ ] `GET /documents/details?document_id=...`
- [ ] `GET /documents/stream?document_id=...`
- [ ] `POST /documents/upload`
- [ ] `PUT /documents/update`
- [ ] `DELETE /documents/delete`
- [ ] `POST /documents/archive`
- [ ] `POST /documents/restore`
- [ ] `POST /documents/move`

## Teams
- [ ] `GET /teams`
- [ ] `POST /teams/create`
- [ ] `GET /teams/info?team_id=...`
- [ ] `PUT /teams/update`
- [ ] `DELETE /teams/delete`
- [ ] `GET /teams/dashboard`
- [ ] `GET /teams/workspaces?team_id=...`
- [ ] `GET /teams/logs?team_id=...`
- [ ] `GET /teams/members?team_id=...`
- [ ] `POST /teams/members/add`
