# Conclusion of the intern's work on TASK-101

### Positive things the intern did well
The basic logic of the code was good and classes were initiated correctly
The use of DecisionEngineConstraints class is a good approach for defining minimum/maximum loan periods and loan amounts. This keeps the code logic clean and easily configurable.


### Places for improvement
There were some tweaks and logical faults in the code.
One of the mistakes was a wrong calculation of credit modifiers. The intern useed the last 4 digits of personal ID code to segment the credit modifiers, which is faulty because it causes every personal ID code to be in debt and resulted in exception NoValidLoanFound.
To fix this, the credit modifier calculation was fixed to take into account the last 2 digits of personal ID code.


The loan_form.dart file also needed improvements for the loan period ranges to be correct (12 months minimum instead of 6 months and 48 months maximum).

Regarding the SOLID principles:

### **SRP Violation** (Most significant shortcoming in this code)

The calculateApprovedLoan method is too overloaded:
* input verification handling
* calculating of loan amount on various scenarios
* handling maximum loan calculation
* handling age-related checks

This should be fixed by dividing into different smaller classes.

### OCP 
* Current design is difficult to extend without implementing modifications to existing code logic

This should be fixed by implementing interfaces for Credit Score calculations and Loan Eligibilty checks.

### LSP
* The handling of null-values could be improved

### ISP
* Responsibilities, such as personal code validation should be split into smaller interfaces in aims of making the code more modular

### DI
* dependencies, such as pesonal code validation could be injected via separate constructor

### The code has been fixed and TICKET - 102 has been implemented aswell. The back-end code was improved, relying on the SOLID-principles and required functionalities which the task required.

## Few comments
In the backend repo, there are examples of Requests and Responses.

**Request example:**

```json
{
"personalCode": "50307172740",
"loanAmount": "5000",
"loanPeriod": "24"
}
```

The response body contains the following fields:

- loanAmount: The approved loan amount.
- loanPeriod: The approved loan period.
- errorMessage: An error message, if any.

**Response example:**

```json
{
"loanAmount": 2400,
"loanPeriod": 24,
"errorMessage": null
}
```

Since this spec was given, I completed the task with types given in example, but I did think about changing both types to match. 

Right now the request consists of String-values and response consists of Integer-values but a good practice would be to change them to the same value-type. 

If I had to further develop the code, I would make them of the same type.

##

Author: **Robin Juul**
