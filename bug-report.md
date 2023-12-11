# Bug Report

## toString return `"undefined"` instead of `undefined` when user give input `undefined`
### Description:
The toString.js module fails to return empty string when the input value is null or undefined.

### Steps to Reproduce:
-  Pass the value `null` or `undefined` to the toString.js function.
-  Observe the return value.

### Actual Behavior:
The function returns "null" or "undefined" when the input is `null` or `undefined`. This happens because the comparison in the function uses the double equal operator (==) 

### Expected Behavior:
Return "" (empty string) instead of "null" or "undefined"


**Priority**: 4

**Criticality**: 4

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

**Usage**: 3

**Reporter**: Ariel