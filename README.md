# Payload Lexical Editor Challenge

## Steps Completed

### Step 1 – GitHub Repository

This repository is public and contains all code for the assignment:
> https://github.com/arsumelahi21/payload-lexical-editor-challenge
---

### Step 2 – Payload CMS Setup

- Payload CMS v3.43.0 initialized using the blank template
- MongoDB configured as the database
- Admin dashboard accessible at `/admin`

---

### Step 3 – Lexical Editor Integrated

- Installed and configured `@payloadcms/richtext-lexical@3.43.0`
- Lexical is now the default editor for rich text fields

---

### Step 4 – Posts Collection

Collection created: `Posts`

Fields:
- `title` – plain text
- `content` – rich text (Lexical)

Accessible from the Admin UI

---

### Step 5 – `<mark>` Highlight Feature

####  Limitation (Payload v3.43.0):
- Public APIs do **not** support injecting custom buttons or registering custom nodes like `MarkNode`.
- Full implementation of `<mark>` node and serialization is complete.
- Toolbar button cannot be added due to version restrictions.

####  What's Working:
- `<mark>` node code is implemented
- HTML output would correctly render `<mark>` tags
- Fully ready to activate on upgrade to Payload v3.44+

**Loom video demo:**  
 [Watch Step 5 Demo] https://www.loom.com/share/39f250cebf734cddb9cc071463d924a2

---

###  Step 6 – Footnote Superscript Feature

#### ⚠ Limitation (Payload v3.43.0):
- Custom node (`FootnoteNode`) cannot be registered due to missing API support
- Toolbar button and drawer/modal are not injectible in this version

####  What's Working:
- `FootnoteNode` implemented with:
  - ID
  - Footnote number
  - Serialized rich content
- `decorate()` returns a valid `<sup>` element with `<a href="#footnote-n">`
