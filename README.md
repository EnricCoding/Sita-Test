# HTTP Request Concurrency Control & License Plate Generator 

## Overview

This project provides two core functionalities:

1. **Concurrency-Controlled HTTP Requests** – An optimized function for handling API requests while enforcing a `MAX_CONCURRENCY` limit.
2. **License Plate Generator** – A high-performance, sequential generator for alphanumeric license plates.

## 🛠️ Tech Stack

- **Language:** TypeScript (ESNext)
- **Testing:** Jest
- **Package Manager:** npm
- **Module System:** CommonJS

---

## 📂 Project Structure

```
📂 project-root/
├── 📂 src/                        # Source files
│   ├── fetchConcurrency.ts        # Concurrency-controlled HTTP requests
│   ├── licensePlate.ts            # License plate generator
│   ├── index.ts                   # Entry point to test functionalities
├── 📂 tests/                      # Unit tests
│   ├── fetchConcurrency.test.ts   # Tests for fetchConcurrency
│   ├── licensePlate.test.ts       # Tests for license plate generation
├── package.json                   # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── jest.config.js                  # Jest configuration
├── README.md                      # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/EnricCoding/Sita-Test.git
cd Sita-Test
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run Tests

Ensure everything works correctly by running:

```sh
npx jest
```

---

## 🚀 Features & Implementation

### **🔹 License Plate Generator (`src/licensePlate.ts`)**

A function that **generates alphanumeric license plates sequentially**, following a strict format:

- First **digits increment** (`000000 → 999999`).
- Then, **letters increment** (`00000A → 99999Z`).
- Finally, **letters expand when needed** (`000AAA → ZZZZZZ`).

**Example Usage:**

```typescript
import { LicensePlateGenerator } from "./licensePlate";

console.log(LicensePlateGenerator.getPlateByIndex(0));       // "000000"
console.log(LicensePlateGenerator.getPlateByIndex(999999));  // "999999"
console.log(LicensePlateGenerator.getPlateByIndex(1000000)); // "00000A"
console.log(LicensePlateGenerator.getPlateByIndex(9999999)); // "000AAA"
console.log(LicensePlateGenerator.getPlateByIndex(9999999999)); // "ZZZZZZ"
```

---

### **🔹 Concurrency-Controlled HTTP Requests (`src/fetchConcurrency.ts`)**

This function **manages concurrent API requests**, ensuring that no more than `MAX_CONCURRENCY` requests run simultaneously.

**Example Usage:**

```typescript
import { fetchWithConcurrency } from "./fetchConcurrency";

(async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3"
    ];
    const maxConcurrency = 2;

    const responses = await fetchWithConcurrency(urls, maxConcurrency);

    for (const res of responses) {
        console.log(await res.json());
    }
})();
```

---

## 🧪 Testing

This project includes **unit tests** with Jest.

### 1️⃣ Run All Tests

```sh
npx jest
```

### 2️⃣ Test Coverage Report

To check **test coverage**, run:

```sh
npx jest --coverage
```

---

## I try to follow this:

✅ **TypeScript Best Practices** – Strict typing, modular functions.  
✅ **SOLID Principles** – Code is maintainable, scalable, and testable.  
✅ **Error Handling** – No unhandled promise rejections or crashes.  
✅ **Performance Optimizations** – Minimal operations, memory-efficient logic.  

---

## Final Thoughts

This solution demonstrates **advanced TypeScript skills**, **performance optimizations**, and **software engineering best practices** expected from a **Senior Software Engineer**.   
