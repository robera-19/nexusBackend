The given notification class violates all SOLID princples.
Here are the violation areas:

1️) Single Responsibility Principle (SRP)
The class mixes multiple responsibilities: type selection, parameter validation, and message delivery. Each responsibility should live in its own class to reduce coupling and improve clarity.

2️) Open/Closed Principle (OCP)
You must modify the send() method to add new notification types. The class is closed to extension and open to modification—breaking OCP.

3️) Liskov Substitution Principle (LSP)
The class doesn't support clean substitution with child classes due to hardcoded logic for each type. Substituting would break behavior, violating expectations of polymorphism.

4️) Interface Segregation Principle (ISP)
The send() method forces unused parameters depending on the type (emailAddress, phoneNumber, etc.). Clients using this class are burdened with irrelevant data they don't need.

5️) Dependency Inversion Principle (DIP)
The class depends directly on concrete notification logic like email or SMS types. It should rely on abstractions instead of specific implementations.
