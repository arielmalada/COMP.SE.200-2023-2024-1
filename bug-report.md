# Bug Report

## toString return `0` instead of `-0` when user give input `0`
### Description:
The toString.js module fails to return the string representation of "-0" when the input value is -0.

### Steps to Reproduce:
-  Pass the value -0 to the toString.js function.
-  Observe the return value.

### Actual Behavior:
The function returns "-0" when the input is 0. This happens because the comparison in the function uses the double equal operator (==) 

### Expected Behavior:
Return 0 instead of -0


**Priority**: 4

**Criticality**: 3

**Usage**: 3

**Reporter**: Ariel

## `defaultTo` Not returning default value when given falsy value 
### Description:
the 

### Steps to Reproduce:
- pass falsy value to `value` parameter
- pass any default value to `defaultValue` parameter

### Actual Behavior:
The function return the falsy `value` instead of the the `defaultValue`

### Expected Behavior:
return `defaultValue`

**Priority**: 5

**Criticality**: 5

**Usage**: 4

**Reporter**: Ariel