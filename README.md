# Inbank internship project

### This repository consists of Inbank 2025 internship project's back-end and front-end repositories which have been changed and tasks have been completed.
<img width="1571" alt="image" src="https://github.com/user-attachments/assets/58d6af08-e6d3-4a7d-b126-948ce3183568" />

## Testing
To run the back-end test, simply run DecisionEngineTest.java in the backend test-folder.

To test the front-end aswell, follow the installation instructions on both, the backend repo and front-end repo.
If installed correctly, run Gradle bootRun and simply run main.dart on front-end.

## Running the load test
Load test is important to check the back-end for issues regarding scalability (or if the back-end works good, it can also show the possibilities for scaling).
first, install k6, for macOS using homebrew:
```
brew install k6
```
Once k6 is installed, run the load test:
```
k6 run --vus 1000 --duration 1m load_test.js
```
This script uses 1000 VUs (Virtual Users) that each make 10 requests per second
### Results gotten from load test:
* Requests per second: 9,827.3 (Very close to target of 10,000)
* Total Requests: 590,520
* Success Rate: 99.86%
* Average Request Duration: 1.19ms
* Median Request Duration: 503µs
* Data Sent: 124MB
* Data Received: 159MB



##
This repository's author is **Robin Juul**.
