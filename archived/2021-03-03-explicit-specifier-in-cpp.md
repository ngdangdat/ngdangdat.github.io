---
title: "explicit specifier in C++"
---

Let's take a look at the source code of Foo class first.

```cpp
#include <iostream>

class Foo
{
public:
  Foo(int foo): m_foo(foo) {}
  
  int GetFoo() {
    return m_foo;
  }
private:
  int m_foo;
};

void DoBar(Foo foo)
{
  int i = foo.GetFoo();
  std::cout << i << "\n";
}

int main()
{
  DoBar(10);
  
  return 0;
}
```

And then we try compiling and running the program.
```bash
clang++ main.cpp -o main
./main
10
```

As you may notice, C++ compiler allows us to do type conversion (an implicit one) from int to Foo when we call DoBar function (requires a Foo parameter but we passed an int). It's because of the first public constructor we defined.

This is convenient but dangerous. From C++11, `explicit` is added to avoid accidental constructions that can hide bugs.

Let's try adding explicit and compile the source again.
```cpp
...
  explicit Foo (int foo): m_foo(foo) {}
...
```
And the compiler raises error as expected.
```bash
main.cpp:32:3: error: no matching function for call to 'DoBar'
  DoBar(10);
  ^~~~~
main.cpp:26:6: note: candidate function not viable: no known conversion from 'int' to 'Foo' for 1st argument
void DoBar(Foo foo) {
     ^
1 error generated.
```
To fix this, we need to modify the call to DoBar function to pass parameter with correct type (instance of Foo class).

```cpp
...
int main() {
  DoBar(Foo(10));
  return 0;
}
...
```

In my opinion, for the sake of safety, we should define constructors using explicit specifier unless we need C++'s implicit type conversion feature.

Thanks to StackOverflow fellow for [the helpful answer](https://stackoverflow.com/questions/121162/what-does-the-explicit-keyword-mean). My example is also taken from there.
