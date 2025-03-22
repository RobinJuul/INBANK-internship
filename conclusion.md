# Conclusion of the intern's work on TASK-101

## Positive things the intern did well
The basic logic of the code was good and classes were initiated correctly
The use of DecisionEngineConstraints class is a good approach for defining minimum/maximum loan periods and loan amounts. This keeps the code logic clean and easily configurable.

## Places for improvement
There were some tweaks and logical faults in the code.
One of the mistakes was a wrong calculation of credit modifiers. The intern useed the last 4 digits of personal ID code to segment the credit modifiers, which is faulty because it causes every personal ID code to be in debt.
To fix this, the credit modifier calculation was fixed to take into account the last 2 digits of personal ID code.
