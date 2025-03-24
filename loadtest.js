import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

// Configuration
export const options = {
  stages: [
    { duration: '10s', target: 1000 }, // Ramp-up to 1000 VUs over 10 seconds
    { duration: '1m', target: 1000 },   // Stay at 1000 VUs for 1 minute
    { duration: '10s', target: 0 },     // Ramp-down to 0 VUs over 10 seconds
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],  // Less than 1% of requests should fail
    http_req_duration: ['p(95)<50'], // 95% of requests should complete below 50ms
  },
};

const BASE_URL = 'http://localhost:8080/loan/decision';  // Your backend URL

export default function () {
  const payload = JSON.stringify({
    personalCode: "49002010976",
    loanAmount: 3000,
    loanPeriod: 24,
  });

  const headers = { 'Content-Type': 'application/json' };

  const res = http.post(BASE_URL, payload, { headers });

  check(res, {
    'is status 200': (r) => r.status === 200,
    'transaction time OK': (r) => r.timings.duration < 50,
  });

  sleep(0.1);  // Slight delay between requests to simulate real usage
}
