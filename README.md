# flaky-tests-lab

A Node.js service with intermittently failing tests for the flaky test investigation lesson.

---

## What This Repository Is

This is a training lab containing a small Node.js service with an intentionally unstable test suite. The instability reflects patterns that appear in real codebases — not logic errors, but structural issues that cause tests to behave differently across runs. Your goal is to observe the failures, identify the root causes from the test output and CI logs, and apply targeted fixes.

---

## Quick Start

```bash
git clone https://github.com/<your-username>/flaky-tests-lab.git
cd flaky-tests-lab
npm install
npm test
```

Run the suite several times to observe intermittent behaviour:

```bash
for i in {1..10}; do npm test; done
```

Some runs will pass entirely. Others will show one or more failures. The failures are not random noise — each one has a specific, diagnosable cause.

---

## Test Suite Overview

| Test File | Service | What It Tests |
|---|---|---|
| `tests/userService.test.js` | `src/userService.js` | Async user persistence and retrieval |
| `tests/cart.test.js` | `src/cart.js` | Cart item management (add, remove, query) |
| `tests/pricing.test.js` | `src/pricing.js` | Discount calculation logic |

Run with `npm test` to execute all three files using Jest.

---

## Reproducing Instability Locally

The failures do not appear on every run. To surface them reliably, run the suite in a loop:

```bash
for i in {1..10}; do npm test; done
```

You should see at least one failure within ten iterations. Pay attention to which test fails and what the assertion error says — the error message is the starting point for your investigation.

---

## Known Test Instability (Intentional)

This repository contains three categories of test instability. They are listed here by category name only. Identifying which test corresponds to each category, and applying the correct fix, is the exercise.

1. **Async timing issue** — a test makes an assertion before an asynchronous operation has completed.
2. **State isolation issue** — a test is affected by state left behind by a previously executed test.
3. **Non-deterministic value issue** — a test asserts a condition on a value that changes on every run.

Each issue is fixable with a small, targeted change. Retries are not a fix.

---

*Part of Lesson 2.10 — Diagnosing Flaky Tests in CI Pipelines.*


edited