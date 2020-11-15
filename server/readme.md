**Fancy Todo App**
----

* **URL**

  /users/register

* **Method:**
  
  `POST`
  
* **Data Params**

  {
    "email": "agungS@maIl.com",
    "password": "123456"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** 
  {
    "message": "User with e-mail agungs@mail.com registered successfully"
  }
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
  {
    "errorMessage": "Email already registered"
  }

--------------
* **URL**

  /users/login

* **Method:**
  
  `POST`
  
* **Data Params**

  {
    "email": "agungS@maIl.com",
    "password": "123456"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzNzQ0Mn0.ibZ3_ZIz_B1BNBgf4WvR9WYc3KHtZ4DmHVQxbeqcIWs"
  }
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
  {
    "errorMessage": "Username/Password error"
  }

-------------------
  * **URL**

  /users/googleLogin

* **Method:**
  
  `POST`
  
* **Data Params**

  { "token" : eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NDZiMTM3NzM3Yjk3MzczOGU1Mjg2YzIwOGI2NmU3YTM5ZWU3YzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzkwMjA3MjQxMTgxLTQ4Yjk5amdiZGlzY3BxdGljYmRwb282aHZjZmtjdnZyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzkwMjA3MjQxMTgxLTQ4Yjk5amdiZGlzY3BxdGljYmRwb282aHZjZmtjdnZyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2MzE1Mjk0MDUyNDgzODMzMzk0IiwiZW1haWwiOiJhZ3VuZ3dhc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImRRY2thMTExRlRxQ0tWRTVrWS1OWmciLCJuYW1lIjoiQWd1bmcgU2V0eWEgUHJhdGFtYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHam5od1JObkJ4blpiTW9NVy1rM2Z1RnV3WTRHb05ya3hYdHlXT2pRQT1zOTYtYyIsImdpdmVuX25hbWUiOiJBZ3VuZyIsImZhbWlseV9uYW1lIjoiU2V0eWEgUHJhdGFtYSIsImxvY2FsZSI6ImlkIiwiaWF0IjoxNjA1NDM3NDg0LCJleHAiOjE2MDU0NDEwODQsImp0aSI6IjBiN2EzNjBmODk5NmY0OTM3ZDcxNjk5MWQyOGYyZmNiOTkwMGJmNTkifQ.ItI8FmZRggS4ZfYysfaBoiTQ6G2yC-Pjhhvo3r--QpjMAcWLKX4U4uxpVEZ6MDr4JlTG_RIcfS2RvM_FxAfUFEMnXlR-Yy_cvx-bdr27dIX9hhprsx9FsguXfqCeAhv87QGlL7kAONiUoCBHWlESCrY73yWMsJh0lWZti00J_I_bXdgvDXGoD8ovNrfMf9f4_TScJ_s5179jhAbBE5bCVZAgViWUibpKExuLbrtiwC7XniHzzfBhcCKhyrGlKtotVaaP2p4uY8gVJNQY5d8cUJyZ8tytgySb_qiHWJPPh1vm50I6A68E3IeZ7lqvqXmDZSXsdD3dkqX31n_Uxl6J8A
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzNzQ0Mn0.ibZ3_ZIz_B1BNBgf4WvR9WYc3KHtZ4DmHVQxbeqcIWs"
  }
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `
  {
    "errorMessage": "Internal Server Error"
  }

------------------
* **URL**

  /todos

* **Method:**
  
  `GET`
  
* **Data Params**

  **Headers:**
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzODY0Mn0.G6qaC04WXfWBJgsRCGAgaYjFdGH-s5bmFJslb_DMCnE"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
  [
    {
        "id": 9,
        "title": "Agung",
        "description": "jangan berhenti berbuat baik yak",
        "status": false,
        "due_date": "2020-11-09T00:00:00.000Z",
        "userFK": 1,
        "createdAt": "2020-11-08T19:06:37.383Z",
        "updatedAt": "2020-11-08T19:06:37.383Z"
    },
    {
        "id": 8,
        "title": "Agung",
        "description": "jangan lupa bahagia",
        "status": true,
        "due_date": "2020-11-09T00:00:00.000Z",
        "userFK": 1,
        "createdAt": "2020-11-08T19:06:28.419Z",
        "updatedAt": "2020-11-08T19:07:51.345Z"
    }
  ]
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
  {
    "errorMessage": "You have to login first"
  }
  OR
  {
    "errorMessage": "Username/password error"
  }

-----------------
* **URL**

  /todos

* **Method:**
  
  `POST`
  
* **Data Params**

  **Headers:**
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzODY0Mn0.G6qaC04WXfWBJgsRCGAgaYjFdGH-s5bmFJslb_DMCnE"
  }
  **Body:**
  {
    "title": "Mencari kunci",
    "description": "disini",
    "status": false,
    "due_date": "2020-10-31"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** 
  {
    "id": 25,
    "title": "Mencari kunci",
    "description": "disini",
    "status": false,
    "due_date": "2020-12-31T00:00:00.000Z",
    "userFK": 1,
    "updatedAt": "2020-11-15T11:34:24.940Z",
    "createdAt": "2020-11-15T11:34:24.940Z"
  }
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
  {
    "errorMessage": "Date must to greater than now"
  }
  OR
  {
    "errorMessage": "Title is required"
  }
  
--------------
* **URL**

  /todos

* **Method:**
  
  `POST`
  
* **Data Params**

  **Headers:**
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzODY0Mn0.G6qaC04WXfWBJgsRCGAgaYjFdGH-s5bmFJslb_DMCnE"
  }
  **Body:**
  {
    "title": "Mencari kunci",
    "description": "disini",
    "status": false,
    "due_date": "2020-10-31"
  }

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** 
  {
    "id": 25,
    "title": "Mencari kunci",
    "description": "disini",
    "status": false,
    "due_date": "2020-12-31T00:00:00.000Z",
    "userFK": 1,
    "updatedAt": "2020-11-15T11:34:24.940Z",
    "createdAt": "2020-11-15T11:34:24.940Z"
  }
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
  {
    "errorMessage": "Date must to greater than now"
  }
  OR
  {
    "errorMessage": "Title is required"
  }
  
--------------
* **URL**

  /todos/:id

*  **URL Params**

   **Required:** 
   `id=[integer]`

* **Method:**
  
  `GET`
  
* **Data Params**

  **Headers:**
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzODY0Mn0.G6qaC04WXfWBJgsRCGAgaYjFdGH-s5bmFJslb_DMCnE"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
  {
    "id": 8,
    "title": "Agung",
    "description": "jangan berhenti berbuat baik yak",
    "status": true,
    "due_date": "2020-11-09T00:00:00.000Z",
    "userFK": 1,
    "createdAt": "2020-11-08T19:06:28.419Z",
    "updatedAt": "2020-11-08T19:07:51.345Z"
  }
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
  {
    "errorMessage": "Todo not found"
  }
  OR
  * **Code:** 401 <br />
    **Content:** `
  {
    "errorMessage": "You are forbidden to do this"
  }

--------------
* **URL**

  /todos/:id

*  **URL Params**

   **Required:** 
   `id=[integer]`

* **Method:**
  
  `PATCH`
  
* **Data Params**

  **Headers:**
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzODY0Mn0.G6qaC04WXfWBJgsRCGAgaYjFdGH-s5bmFJslb_DMCnE"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
  {
    "id": 8,
    "title": "Agung",
    "description": "jangan berhenti berbuat baik yak",
    "status": true,
    "due_date": "2020-11-09T00:00:00.000Z",
    "userFK": 1,
    "createdAt": "2020-11-08T19:06:28.419Z",
    "updatedAt": "2020-11-08T19:07:51.345Z"
  }
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
  {
    "errorMessage": "Todo not found"
  }
  OR
  * **Code:** 401 <br />
    **Content:** `
  {
    "errorMessage": "You are forbidden to do this"
  }

--------------
* **URL**

  /todos/:id

*  **URL Params**

   **Required:** 
   `id=[integer]`

* **Method:**
  
  `PUT`
  
* **Data Params**

  **Headers:**
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzODY0Mn0.G6qaC04WXfWBJgsRCGAgaYjFdGH-s5bmFJslb_DMCnE"
  }
  **Body:**
  {
    "title": "Mencari kunci",
    "description": "disini",
    "status": false,
    "due_date": "2020-10-31"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
  {
    "id": 8,
    "title": "Agung",
    "description": "jangan berhenti berbuat baik yak",
    "status": true,
    "due_date": "2020-11-09T00:00:00.000Z",
    "userFK": 1,
    "createdAt": "2020-11-08T19:06:28.419Z",
    "updatedAt": "2020-11-08T19:07:51.345Z"
  }
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
  {
    "errorMessage": "Todo not found"
  }
  OR
  * **Code:** 401 <br />
    **Content:** `
  {
    "errorMessage": "You are forbidden to do this"
  }
  OR
  * **Code:** 400 <br />
  **Content:** `
  {
    "errorMessage": "Date must to greater than now"
  }
  OR
  {
    "errorMessage": "Title is required"
  }

--------------
* **URL**

  /todos/:id

*  **URL Params**

   **Required:** 
   `id=[integer]`

* **Method:**
  
  `DELETE`
  
* **Data Params**

  **Headers:**
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZ3VuZ0BtYWlsLmNvbSIsImlhdCI6MTYwNTQzODY0Mn0.G6qaC04WXfWBJgsRCGAgaYjFdGH-s5bmFJslb_DMCnE"
  }

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
  {
    "id": 8,
    "title": "Agung",
    "description": "jangan berhenti berbuat baik yak",
    "status": true,
    "due_date": "2020-11-09T00:00:00.000Z",
    "userFK": 1,
    "createdAt": "2020-11-08T19:06:28.419Z",
    "updatedAt": "2020-11-08T19:07:51.345Z"
  }
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `
  {
    "errorMessage": "Todo not found"
  }
  OR
  * **Code:** 401 <br />
    **Content:** `
  {
    "errorMessage": "You are forbidden to do this"
  }