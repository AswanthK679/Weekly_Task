# TASK_2_OOP_CONCEPT_POLYMORPHISM

**Polymorphism**

**Polymorphism** allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. The word "poly" means many and "morphs" means forms, So it means many forms.

Real Life example: A person at the same time can have different characteristics. Like a man at the same time is a father, a husband, and an employee. So the same person possesses different behavior in different situations. This is called polymorphism.

Types :

- **Compile-time Polymorphism**
- **Runtime Polymorphism**

- **Compile-Time Polymorphism:** It is also known as **static polymorphism.** This type of polymorphism is achieved by **function overloading** or operator overloading. But **Java doesn't support Operator Overloading**.

**Method(Function) Overloading** When there are **multiple functions with the same name but different parameters then these functions are said to be overloaded**. Functions can be **overloaded by changes in the number of arguments or/and a change in the type of arguments**.

- **Runtime Polymorphism:** It is also known as **Dynamic Method Dispatch**. It is a process in which a function call to the overridden method is resolved at Runtime. This type of polymorphism is achieved by **Method Overriding**.

**Method overriding** , on the other hand, occurs when a derived class has a definition for one of the member functions of the base class. That base function is said to be **overridden**.

If a subclass (child class) has the same method as declared in the parent class, it is known as method overriding in Java.

In other words, If a subclass provides the specific implementation of the method that has been declared by one of its parent class, it is known as method overriding.

**Rules for Java Method Overriding**

1. **The method must have the same name as in the parent class**
2. **The method must have the same parameter as in the parent class.**
3. **There must be an IS-A relationship (inheritance).**


