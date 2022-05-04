# cognito-workshops

```bash
curl -H "Authorization: Bearer <access_token>" http://localhost:5000/
```

https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-as-user-directory.html

https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-configuring-app-integration.html

### Cognito redirect

http://localhost:3000/cb#access_token=eyJraWQiOiJLSm55clBKSllSTDNla2tWVDBaNFwvOXZlM0U1eTV6U0JQVExOSG5aVE1VND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNjk4ODQyYy1hNzE4LTQ1OWUtYTI0Mi1iM2UyYzZiODBjYTQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6InBob25lIG9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY1MTY5NDg3OSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfcTlQU0h3ajBtIiwiZXhwIjoxNjUxNjk4NDc5LCJpYXQiOjE2NTE2OTQ4NzksInZlcnNpb24iOjIsImp0aSI6IjljZTMwZGFhLTdlMTAtNDhmMC05Y2EwLWI1YTJiOWY1NzhiNyIsImNsaWVudF9pZCI6IjF2ZWN1aW9iOTI5MzZhbmtlb3E4czJ1cmprIiwidXNlcm5hbWUiOiJjNjk4ODQyYy1hNzE4LTQ1OWUtYTI0Mi1iM2UyYzZiODBjYTQifQ.JiwI3jlBblm4xYlhFh8NUw1EbGNuiku3yD63Bgk1kRwaikx-vKF2wCKoYxqEM7Z99U4eu1_98Nqefh6Us4aYyDFQZl1m91mBSZpfm6o5iDbHVc6ciO3ak88jfLmxHnb42NX8tmf3vxHdT_YW7e2eakVJeP3AsUgt6xG_zHxEH8rQNuu9wZ5OR8U5EI_E18PfwP8hR8RoagJED9hP60LrbzaPFnPWMcPdDPQG4zKhoT2GbEtnyy6OTAt7Y2LfZwoJ7BA4_pIcyRA6e3Qp8ly7OhVCGMf5EO1-FWfHdt9BRKAvt164tO_dtszwpUauaTbCTVhXlXrBFJYXteUZLXclgg&id_token=eyJraWQiOiJYd1o2aUpObFI3RFdDc1QxVGtscFRha1lLMzhSVHUzZmNtYUxSQ2xQc2VjPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiUzFMRkIxd3RuYVFDWlFzNkJvVER5dyIsInN1YiI6ImM2OTg4NDJjLWE3MTgtNDU5ZS1hMjQyLWIzZTJjNmI4MGNhNCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9xOVBTSHdqMG0iLCJjb2duaXRvOnVzZXJuYW1lIjoiYzY5ODg0MmMtYTcxOC00NTllLWEyNDItYjNlMmM2YjgwY2E0IiwiYXVkIjoiMXZlY3Vpb2I5MjkzNmFua2VvcThzMnVyamsiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1MTY5NDg3OSwiZXhwIjoxNjUxNjk4NDc5LCJpYXQiOjE2NTE2OTQ4NzksImp0aSI6IjI4NzA5MmQ5LTMxYWEtNDZhZC1iMTg1LTBmZGExNDI5OWQ0YiIsImVtYWlsIjoiYW5uYS5sYWNoQGJyYWluaHViLnBsIn0.HhPYDrWL9bw9YiEn8pnisesg_4EbWgWAtzTHShHZultNFeSdAnpKYjgijLS6CzhDTHwKGXDgAV7gNXKPmp-tagvyMpoD7EJ5t2i7s_AvPjtqK3ictj5foqZVM-zyg9kk7l9r5WlwmpcboXdFP0Ab-HsK04zWMAg_UkmG3C2RxhV8sT5SKYVeLQpRGUyKxlqP8SYKk7Y9JSTfbbxzVkeoU51KvIQyrdPT5Wt3iD7tFmkkX3LMZzKAZZ8Ztk8n-rqI4gY0c6CYxg0ZiRbkHy7_U_m5P90veiCXVq1fzG61AKGiQaWyfzx-Bg4cSi_wBoOCr8aNHY9q6pMVcMcSlcElDg&token_type=Bearer&expires_in=3600

### Example access token

https://jwt.io/#debugger-io?token=eyJraWQiOiJLSm55clBKSllSTDNla2tWVDBaNFwvOXZlM0U1eTV6U0JQVExOSG5aVE1VND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNjk4ODQyYy1hNzE4LTQ1OWUtYTI0Mi1iM2UyYzZiODBjYTQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6InBob25lIG9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY1MTY5NDg3OSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfcTlQU0h3ajBtIiwiZXhwIjoxNjUxNjk4NDc5LCJpYXQiOjE2NTE2OTQ4NzksInZlcnNpb24iOjIsImp0aSI6IjljZTMwZGFhLTdlMTAtNDhmMC05Y2EwLWI1YTJiOWY1NzhiNyIsImNsaWVudF9pZCI6IjF2ZWN1aW9iOTI5MzZhbmtlb3E4czJ1cmprIiwidXNlcm5hbWUiOiJjNjk4ODQyYy1hNzE4LTQ1OWUtYTI0Mi1iM2UyYzZiODBjYTQifQ.JiwI3jlBblm4xYlhFh8NUw1EbGNuiku3yD63Bgk1kRwaikx-vKF2wCKoYxqEM7Z99U4eu1_98Nqefh6Us4aYyDFQZl1m91mBSZpfm6o5iDbHVc6ciO3ak88jfLmxHnb42NX8tmf3vxHdT_YW7e2eakVJeP3AsUgt6xG_zHxEH8rQNuu9wZ5OR8U5EI_E18PfwP8hR8RoagJED9hP60LrbzaPFnPWMcPdDPQG4zKhoT2GbEtnyy6OTAt7Y2LfZwoJ7BA4_pIcyRA6e3Qp8ly7OhVCGMf5EO1-FWfHdt9BRKAvt164tO_dtszwpUauaTbCTVhXlXrBFJYXteUZLXclgg&publicKey=%7B%0A%20%20%22e%22%3A%20%22AQAB%22%2C%0A%20%20%22kty%22%3A%20%22RSA%22%2C%0A%20%20%22n%22%3A%20%22vOAmxY5hQGD8zR97u12zB9BW5zb5sW_pA7qDl-isNkk9QcTOwW0jBKjGHOIqjMcvrUhIf6hCRF-YdkFXRWmTJrasEsETvLtXxt6rXUcG71-iLPLF8JZDbAihCLShag4wCihvYrQqgxle2ZZs73bfNwdoD0VYF6Lb8_8AEEFQ5cAP9pMnfSadz0s5CWoQNgHBXOBNGCD88PRPoQMrZOV1TFlphGGtBkIaMyXxTUPQBw82f--ql1-6Sw7_9eUcQ-RVW6ybq2mDGc7yKvWwIB9OQUy55uH4ZKIN6OksdgeBPy4cBHSAFnFgdM1ORMLzhOkOVHW1SOLiW5aHwfuTSn2Fjw%22%0A%7D

### Example id token

https://jwt.io/#debugger-io?token=eyJraWQiOiJYd1o2aUpObFI3RFdDc1QxVGtscFRha1lLMzhSVHUzZmNtYUxSQ2xQc2VjPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiUzFMRkIxd3RuYVFDWlFzNkJvVER5dyIsInN1YiI6ImM2OTg4NDJjLWE3MTgtNDU5ZS1hMjQyLWIzZTJjNmI4MGNhNCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9xOVBTSHdqMG0iLCJjb2duaXRvOnVzZXJuYW1lIjoiYzY5ODg0MmMtYTcxOC00NTllLWEyNDItYjNlMmM2YjgwY2E0IiwiYXVkIjoiMXZlY3Vpb2I5MjkzNmFua2VvcThzMnVyamsiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1MTY5NDg3OSwiZXhwIjoxNjUxNjk4NDc5LCJpYXQiOjE2NTE2OTQ4NzksImp0aSI6IjI4NzA5MmQ5LTMxYWEtNDZhZC1iMTg1LTBmZGExNDI5OWQ0YiIsImVtYWlsIjoiYW5uYS5sYWNoQGJyYWluaHViLnBsIn0.HhPYDrWL9bw9YiEn8pnisesg_4EbWgWAtzTHShHZultNFeSdAnpKYjgijLS6CzhDTHwKGXDgAV7gNXKPmp-tagvyMpoD7EJ5t2i7s_AvPjtqK3ictj5foqZVM-zyg9kk7l9r5WlwmpcboXdFP0Ab-HsK04zWMAg_UkmG3C2RxhV8sT5SKYVeLQpRGUyKxlqP8SYKk7Y9JSTfbbxzVkeoU51KvIQyrdPT5Wt3iD7tFmkkX3LMZzKAZZ8Ztk8n-rqI4gY0c6CYxg0ZiRbkHy7_U_m5P90veiCXVq1fzG61AKGiQaWyfzx-Bg4cSi_wBoOCr8aNHY9q6pMVcMcSlcElDg&publicKey=%7B%0A%20%20%22e%22%3A%20%22AQAB%22%2C%0A%20%20%22kty%22%3A%20%22RSA%22%2C%0A%20%20%22n%22%3A%20%22vEBHTCm6hH5aA9Zx-ogCsfcLUvb44uxw6517pNTVEXhBcQRgSSiLgV-iL_ByjUb5-rqAbQKoH3eNEflRCFd9MpucYOHZkxWfeyCLPN7F81Nv_kuHPamGzwlx8fLwxxm1j84pqN3_V3vJTRi_nqtaJPF-jch4QPJqUye4t5Nc3QqguPoRLRJ07h0e8968YckjnnXzbXdU1OQ9X-KKNN3nWuZLqIpf050sFwTZX9x7TzMTOrwcKBbbf9NQ_PYY5Ws0plyn-ymFTKL5zONL4O_7jnakof2NBd12c31jUkPn1OMTNdYfGPggUFocrhADLl4krH2ep6jU77Q-ykUao8zcKQ%22%0A%7D
