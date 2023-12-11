# Bug Report

## toString return `0` instead of `-0` when user give input `0`
### Description:
[The toString.js module fails to return the string representation of "-0" when the input value is -0.]

### Steps to Reproduce:
[Step 1] Pass the value -0 to the toString.js function.
[Step 2] Observe the return value.

### Actual Behavior:
The function returns "-0" when the input is 0. This happens because the comparison in the function uses the double equal operator (==) 

### Expected Behavior:
Return 0 instead of -0

Priority: 4
Criticality: 3
Usage: 3

Reporter: Ariel