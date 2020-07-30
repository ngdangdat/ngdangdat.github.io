---
title: "Storing phone number in database"
---
I started with the question "Should I store phone number in database using int or text?". Why did I ask that question? Although it's phone **number**, it has a problem called trailing zero at beginning of phone number.

In numeric data format, "012" is recognized as "12". Storing the phone number as string can solve the problem. In case we need to have index on phone number column, does storing phone number as string make bad impact on the performance?

I haven't made any experiment to examine but I found some interesting information on this topic.

- 00: [Datatype for phone numbers in postgresql](https://stackoverflow.com/questions/59943384/datatype-for-phone-numbers-in-postgresql)
- 01: [Phone Number DB Types](https://www.mayerdan.com/programming/2017/06/26/db_phone_types)
- 02: [Falsehoods Programmers Believe About Phone Numbers](https://github.com/google/libphonenumber/blob/master/FALSEHOODS.md)

Summary:
- int data type's query performance is slightly better (not much but noticeable)
- int and string aren't much different when it comes to insert performance
- int is more efficient in DB table storage size

