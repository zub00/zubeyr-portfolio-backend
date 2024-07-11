curl -X POST -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "bio": "Software developer with expertise in React and Node.js.",
  "location": "New York",
  "nationality": "American",
  "availability": true,
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "github": "https://github.com/johndoe",
  "twitter": "https://twitter.com/johndoe",
  "linkedin": "https://www.linkedin.com/in/johndoe",
  "expectedSalary": 100000,
  "haveDrivingLicense": true,
  "noticePeriod": 30,
  "referees": "John Smith, Jane Doe",
  "languages": "English, Spanish",
  "skills": "React, Node.js, JavaScript"
}' http://localhost:3000/api/profile
