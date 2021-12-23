# Auth-fake-api

## Registro

POST: https://auth-fake-api.araujocoding.repl.co/auth/register

**Body**
`
{
"email":"your email",
"password":"your password"
}

`

**Response Example**
`
{
  "access_token": "eyJhbGciO8JIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGZha2UuY29tIiwicGFzc3dvcmQiOiJ0ZXN0YW5kbzEyMyIsImlhdCI6MTY0MDI3NzUwMCwiZXhwIjoxNjQwMjgxMTAwfQ._tQamY4s2Y1Rk0HJS0Ux2Ua0bacDJPkyPMyzFz_Y2c4"
}

`

## Login

POST: https://auth-fake-api.araujocoding.repl.co/auth/login

`
{
"email":"your email registered",
"password":"your password registered"
}

`

**Response Example**
`
{
  "access_token": "e7JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGZha2UuY29tIiwicGFzc3dvcmQiOiJ0ZXN0YW5kbzEyMyIsImlhdCI6MTY0MDI3NzUwMCwiZXhwIjoxNjQwMjgxMTAwfQ._tQamY4s2Y1Rk0HJS0Ux2Ua0bacDJPkyPMyzFz_Y2c4"
}

