# hashmap

## 1. Introduction

- Hashmap is a data structure that stores key-value pairs. It is a collection of key-value pairs where each key is unique. It is also known as a dictionary, map, or associative array.

## 2. Operations

### 2.1 Insert

- Insert a key-value pair into the hashmap. If the key already exists, update the value.

### 2.2 Delete

- Delete a key-value pair from the hashmap.

### 2.3 Search

- Search for a key in the hashmap and return the value.

### 2.4 Load Factor

- The load factor is the ratio of the number of elements to the number of buckets. It is used to determine when to resize the hashmap.

### 2.5 Rehashing

- Rehashing is the process of resizing the hashmap when the load factor exceeds a certain threshold. It involves creating a new hashmap with a larger number of buckets and reinserting all the key-value pairs.

## 3. Implementation

### 3.1 Hash Function

- A hash function is used to convert a key into an index in the hashmap. It should be deterministic and return the same index for the same key.

### 3.2 Collision Handling

- Collisions occur when two keys hash to the same index. There are several strategies for handling collisions, such as chaining or open addressing.

### 3.3 Resizing

- When the load factor exceeds a certain threshold, the hashmap is resized to maintain a low load factor. This involves creating a new hashmap with a larger number of buckets and reinserting all the key-value pairs.

## 4. Complexity Analysis

### 4.1 Time Complexity

- The time complexity of hashmap operations depends on the hash function, collision handling strategy, and resizing strategy. In general, the time complexity of insert, delete, and search operations is O(1) on average.

### 4.2 Space Complexity

- The space complexity of a hashmap is O(n), where n is the number of key-value pairs stored in the hashmap.

## 5. Applications

- Hashmaps are widely used in computer science and programming due to their efficiency and versatility. Some common applications of hashmaps include:
  - Implementing caches
  - Storing metadata
  - Counting occurrences of elements
  - Implementing associative arrays
  - Implementing sets and multisets

## 6. Conclusion

- Hashmaps are a powerful data structure that provides efficient key-value storage and retrieval. They are widely used in various applications and are an essential tool for programmers.

## 7. References

- https://en.wikipedia.org/wiki/Hash_table
- https://www.geeksforgeeks.org/hashing-data-structure/
- https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm
- https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/
- https://www.programiz.com/dsa/hash-table
- https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html

## Inspiration

-  [The Odin Project](https://www.theodinproject.com/) - [Hash Maps](https://www.theodinproject.com/paths/full-stack-javascript/courses/data-structures-and-algorithms/lessons/hash-maps)

## 8. Author

- 👤 **Muhammed**

- GitHub: [@MhmdFais](https://github.com/MhmdFais)
