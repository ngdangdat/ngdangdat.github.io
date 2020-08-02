---
title: "rustlings exercises"
---

I've finished [rustlings](https://github.com/rust-lang/rustlings) exercises after starting couples of days ago. It was a fun journey.

# My notes
- String in Rust is really interesting, you have no idea how many times I searched for _"difference between String and str rust"_ while working on these exercises. Helpful resources:
  - [Stackoverflow - What are the differences between Rust's `String` and `str`?](https://stackoverflow.com/questions/24158114/what-are-the-differences-between-rusts-string-and-str) Personal note: The top rated answer is really great but you might also need to view other answers as well.
- [Ownership concept in Rust](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html) is really difficult to understand at the first glance. To be honest, up to this point, I still cannot understand 100% the concept. My advice is being patient: read, if you don't understand, take a break/do other stuffs then go back to it later.
- Ownership makes multi-threading programming in Rust more challenging as you need to understand [Arc (Atomic Reference Counting)](https://doc.rust-lang.org/book/ch16-03-shared-state.html#atomic-reference-counting-with-arct) and many other concepts. If it gets too difficult for you, please remember that learning all these hard stuffs is not to make you suffering but to make your program safer and more efficient (it's what being a better programmer all about!). Again, be patient!

# Helpful resources
- Stackoverflow FTW!
- The Rust Programming Language book: [https://doc.rust-lang.org/stable/book/](https://doc.rust-lang.org/stable/book/)
- Official Rust documentation page: [https://doc.rust-lang.org/std/index.html](https://doc.rust-lang.org/std/index.html)

Last but not least, my fork repository with completed exercises in master branch. If you guys need more than hints provided by awesome rustlings contributors, you can check the answer in my repository: [https://github.com/ngdangdat/rustlings](https://github.com/ngdangdat/rustlings). I recommend you to try understanding what authors of exercises want to imply instead of focusing too much on working answer.

Good luck and have fun!
