# Unexpected NaN Propagation in JavaScript Functions

This repository demonstrates a common JavaScript issue involving the propagation of NaN (Not a Number) through function calls.  When NaN is involved in a calculation, the result is always NaN. This can be surprising if you're not aware of how NaN behaves.

## The Problem

The `foo` and `bar` functions perform simple arithmetic operations.  However, when `NaN` is passed as an argument, the result is unexpected.  The NaN value propagates through the functions, resulting in a final NaN output.

## The Solution

The solution involves adding checks to handle potential NaN inputs.  This prevents NaN from propagating and causing unexpected results.  The solution file provides a modified version of the functions with NaN handling.