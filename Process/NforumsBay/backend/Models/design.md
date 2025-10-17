SO THIS IS THE PLAN FOR CREATING THE DB FOR FORUMSBAY.

there are 4 schemas in total:

# 🧩 ForumsBay Database Plan

This document outlines the **database schema design** for **ForumsBay**.  
There are a total of **4 main collections (schemas)**.

---

## 🗂️ 1. BoardCategories Collection

This collection stores categories that group related boards.

### **Schema**
```js
{
  _id: ObjectId,                // auto-generated unique identifier
  id: Number,                   // developer-defined ID for custom use
  name: String,                 // category name, e.g., "Technology"
  description: String,          // brief description of the category
  boards: [                     // linked boards
    { _id: ObjectId, name: String }
  ],
  maxNumber: Number             // max number of boards allowed in this category
}

Notes

Added _id as the primary MongoDB identifier.
boards array now references board _id values for linking, keeping it lightweight.
maxNumber ensures a limit on boards per category for basic control.

2. Boards Collection
This collection represents individual boards within categories.
Schema

_id: ObjectId (auto-generated unique identifier)
board_id: Number (developer-defined ID for custom use)
name: String (name of the board, e.g., "General")
slug: String (unique URL keyword, e.g., "gen", must be unique)
description: String (brief description of the board)
threads: Array (contains thread _id values for quick access)
maxThreads: Number (maximum number of threads allowed)

Notes

Added _id as the primary identifier.
threads now stores thread _id references instead of full objects to avoid redundancy.
maxThreads adds a basic limit on thread count per board.
slug uniqueness should be enforced with an index.

3. Threads Collection
This collection stores threads, each starting with an original post (OP).
Schema

_id: ObjectId (auto-generated unique identifier)
post_id: Number (developer-defined ID for custom use)
name: String (thread title or name, optional)
description: String (brief thread description)
op_post: Object (contains only the original post details)

name: String (poster name, e.g., "Anonymous")
description: String (OP content)
user: String (optional user identifier, e.g., IP hash)
date: Date (timestamp of OP creation)
file: String (path or reference to image/gif file)
url: String (optional URL included in OP)
replies: Array (contains _id values of reply posts in sequence)



Notes

Added _id as the primary identifier.
op_post is an embedded object for the OP, with replies referencing post _id values.
date uses Date type for proper timestamp handling.
Removed nested replies objects to simplify; links via _id instead.

4. Posts Collection
This collection stores all posts, including replies, with references to threads and other posts.
Schema

_id: ObjectId (auto-generated unique identifier)
prev_postId: Number (ID of the previous post in the thread, 0 for OP)
post_id: Number (unique post ID)
next_replyId: Number (ID of the next reply, 0 if none)
user: String (optional user identifier, e.g., IP hash)
caption: String (post content)
file: String (path or reference to image/gif file)
url: String (optional URL in post)
replies: Array (contains _id values of direct replies)
date: Date (timestamp of post creation)

Notes

Added _id as the primary identifier.
Renamed com to caption for clarity.
prev_postId and next_replyId enable a linked list structure for thread navigation.
replies array tracks direct replies’ _id values for threading.
date uses Date type for consistency.

Fixes and Basic Functionality Added

Issue Fixes:

Added _id to all collections as MongoDB requires a unique identifier.
Replaced nested objects (e.g., boards in BoardCategories, threads in Boards) with _id references to avoid document size issues and improve query performance.
Corrected op_post in Threads to be a single object (not an array) since it’s the OP only.
Standardized date as Date type instead of assuming a string.


Basic Functionality:

Added maxNumber and maxThreads for basic limits.
Introduced prev_postId and next_replyId in Posts for sequential navigation within threads.
Included replies arrays for tracking reply relationships.