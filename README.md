# Contextual React Notes App (Local-First Architecture)

A privacy-focused, local-first React application designed to balance manual user organization with automatic, semantic/contextual note categorization. By keeping all processing and storage constrained to the client side, this application eliminates common cloud-based security concerns while delivering smart classification.

---

## Core Architecture & Design Patterns

### 1. Local-First Architecture
* **Privacy Horizon:** All raw input data and generated thoughts remain strictly on the client hardware. No text content is sent to third-party servers or external cloud horizons for indexing.
* **Storage Framework:** Backed natively by browser storage mechanisms (configured for robust serialization and deserialization cycles) to ensure offline availability and low-latency interaction.

### 2. Defensive Join-Table State Machine
To handle overlapping categorization mechanics without creating chaotic data references, the application employs a defensive join-table style database schema to model many-to-many relationships safely.

* **`notes` Entity:** Stores individual text content, timestamps, and metadata.
* **`categories` Entity:** Contains categorical entries created manually by the user or dynamically suggested by semantic matching.
* **`noteCategories` Schema:** The junction model linking notes to categories.

```typescript
interface NoteCategoryJunction {
  noteId: string;
  categoryId: string;
  isLocked: boolean; // Protects manual intent from automatic context overwrites
}