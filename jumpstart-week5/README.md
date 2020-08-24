# Week 5: Advanced Backend and Testing.

## Agenda
- Backend Basics Cont.
- Testing
  - JUnit 5
  - Mockito
- Advanced Backend
  - DTOs in General
  - Unmarshalling objects into DTOs
  - Backend Validation
  - Other Request Types
  
## Basic Plan
1. Talk about testing in the software development world
  - Types of tests
  - Basic testing with JUnit
    - Show basic test examples
    - Before/BeforeAll annotations
    - Parameterized tests
    - Externals Class
    - Exceptions
  - Mocking objects with Mockito
    - Mocking behavior and returns
    - Spying on objects
    - Argument Captors
    - Show the test created for the backend api module
    
2. DTOs and Marshalling/Unmarshalling
  - What are DTOs
    - What are they used for
    - Why are they necessary
  - Marshalling/Unmarshalling
    - Validating unmarshalled objects/why it's necessary
 
3. Other Request Types
  - POST, PUT, and DELETE
  - What are they commonly used for
  - Other types exist, but we won't cover them
  
## Testing

### Types of Tests

As I'm sure you can tell from the name, testing is the method used to help prove that your code works in the way that 
it is expected to. If you haven't encountered tests before, whether that's because you're new to development or just never thought 
that tests were important enough to spend time on, just know that they're extremely important in helping you 
diagnose issues in your code (if you write meaningful tests) before releases or after making significant changes. 
For smaller projects, they have less of an impact (even if they're still helpful), but as your project grows, and as
you work with more people, they'll save you a lot of time in tracking down and preventing a lot of bugs that come from
unexpected interactions or mistakes that were made in trying to solve the problem.

In the software development side of things, there are around seven tests that you'll probably interact with throughout 
your career, and different organizations may combine or rename a lot of these. We're calling them 'unit', 'integration', 
'functional', 'end-to-end', 'acceptance', 'performance', and 'smoke' tests.

- *Unit* tests are your basic tests which are there to determine if the smallest unit of functionality 
is working correctly.
- *Integration* tests ensure that multiple different units, modules, or services can work together correctly. Sometimes
different pieces of the modules can be checked to verify that the system is working correctly.
- *Functional* tests are very similar to integration tests. The difference is that functional tests apply business
logic when testing, so testing expected behavior, while integration tests are there to make sure multiple modules
can work together as expected. One example is connecting to a database (integration) vs. getting specific values from 
the database (functional).
- *End-To-End* tests are test which try to act as a user and go through different workflows to ensure large
parts of the application are working as expected.
- *Acceptance* tests verify business requirements (and sometime performance).
- *Performance* tests measure the performance of the system under heavy load. They determine speed, reliability,
stability, availability, and other attributes of the application when thoroughly stressed.
- *Smoke* tests check basic functionality quickly to prove that major systems are working as expected.

For more info, check out [Atlassian's document on different types of software 
testing](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing).

### Testing in Java with JUnit 5

JUnit is a plugin which provides a lot of help with testing things in Java. It allows you to do a lot of really useful
stuff when testing, like:

- Declaring a test using the `@Test` annotation
- Run multiple tests with different inputs using the `@ParameterizedTest` annotation
- Run setup/teardowns for each test or all tests using the `@BeforeAll`/`@BeforeEach` and `@AfterAll`/`@AfterEach` 
annotations
- Asserting a ton of different things about tests using methods like `assertTrue`, `assertFalse`, `assertNull`, 
`assertNotNull`, `assertEquals`, and many more
- Assumptions (tests that only run if a preliminary tests succeeds)
- Tests that are repeated a number of times using `@RepeatedTest`

Check out the [JUnit 5 Documentation page](https://junit.org/junit5/docs/current/user-guide/).

#### Testing in JUnit

##### Basic Tests

Most of the time, a test is started with the `@Test` annotation, though. Then it will perform some actions, do a couple
of assertions, and end. If it fails, either Maven or the IntelliJ test window will let you know which tests failed and 
why.

Here is an example:
```java
@Test
public void testUsingAssertEquals() {
    for (int i = 0; i < 10; i++) {
        assertTrue(i > -1); // Makes sure i is positive.
        assertEquals(i, i); // This one just tests that i is equal to itself.
        assertNull(i); // This one will cause the test to fail.
    }
}
```

Tests are usually placed in a directory in <module>/src/test/, which mirrors the <module>/src/main/ directory.
Test classes are placed in the same package (within the test directory) of the class they are testing.
For example, the `PostsProcessor` class in service/src/main/java/com.codeforcommunity/processor/ will be tested by a 
class named something like `PostsProcessorTest` in the service/src/test/java/com.codeforcommunity/processor/ directory.

To run these tests once they've been added, you can just run `mvn` or `mvn install` if you want to do it through Maven.
The tests will be found and run automatically for you, since Maven is set up to look for IntelliJ tests.
If you'd prefer to do it in IntelliJ, all you have to do is hit the green play button, and choose Run or Debug.

##### BeforeEach, BeforeAll, AfterEach, and AfterAll

JUnit provides `@BeforeEach`, `@BeforeAll`, `@AfterEach`, and `@AfterAll` annotations. These allow you to perform 
methods before/after every/each test if it helps to set up or clean up tests without you having to call them manually.
Note: for the "Each" methods, the methods have to be static to work.

Here is an example:
```java
@BeforeEach
public void setup() {
    this.db = new DatabaseImplementation();
    this.processor = new ProcessorThing(this.db);
}
```

The above code will then run before each test in the test suite and set up the processor and database for you.

##### Parameterized Tests

As said previously, you can also run multiple tests using different input parameters by using the `@ParameterizedTest` 
annotation. 

Inputs to your method can be provided using another annotation, which can consist of other annotations.
Three of the most basic ones are `@NullSource`, `@EmptySource` (provides an empty String, List, Set, Map, or any 
array type), and the combination `@NullAndEmptySource`. Those can be combined with `@ValueSource` (or you can use them 
alone if that suits your needs better) to test with a simple set of values.

The `@ValueSource` annotation allows you to provide a list of values of any atomic type (short, byte, int, long, float,
double, char, boolean), as well as String and `Class` types. Note: the input to the annotation must be the pluralized
name of the type you're inputting. As an example, a list of integer inputs would be 
`@ValueSource(ints = {1, 2, 3, ...})`, and booleans would be `@ValueSource(booleans = {true, false})`.

The `@EnumSource` conveniently provides all sub-types of a provided enum class.

If none of those suit your needs, you can also use `@MethodSource`, `@CsvSource`, `@CsvFileSource`, and 
`@ArgumentSource`.

You can see all of the sources of parameterized arguments [on the JUnit 
docs](https://junit.org/junit5/docs/current/user-guide/#writing-tests-parameterized-tests-sources).

Here is an example of a parameterized test using integer inputs:

```java
@ParameterizedTest
@ValueSource(ints = {1, 2, 3})
@NullSource
// Notice how we're using the wrapped integer class "Integer" since we're inputting a null source.
public void testParameterizedTest(Integer value) { 
    if (value == null) {
        assertNull(value);
    }
    else {
        assertTrue(value > 0 && value < 4);
    }
}
```

##### Externals Class

Sometimes you end up testing things where you need to supply your own value (especially if the method providing a value 
is static). For example, when getting a `Router` object in `PostsRouter`. If we have our own version of a `Router` 
object which we want to supply for testing purposes, we need a way to substitute that in.

An `Externals` class (sometimes abbreviated to `externs`) can allow us to do that. We can define a 
`public static class Externals` as a nested class in `PostsRouter`, which has a method 
`public Router getRouter(Vertx vertx)`, which we'll use to do so. In the default `Externals` (the one in `PostsRouter`), 
for now we'll just have that single `getRouter` method. Then, in our test class,
we'll extend that `Externals` class with a new `TestExternals` class, and override the `getRouter` method to have it 
return our custom router object. This can be applied in many different ways for times where you need to override 
behavior in dependencies which is hard to test with.

This is what our `PostsRouter` looked like initially:
```java
public class PostsRouter implements IRouter {
    IPostsProcessor processor;

    // The basic constructor.
    public PostsRouter(IPostsProcessor processor) {
        this.processor = processor;
    }

    @Override
    public Router initializeRouter(Vertx vertx) {
        Router router = Router.router(vertx);
    ...
```

This is what our `PostsRouter` becomes with our externs:
```java
public class PostsRouter implements IRouter {
    IPostsProcessor processor;
    
    // Our new externs.
    Externals externs;

    // The basic constructor.
    public PostsRouter(IPostsProcessor processor) {
        this.processor = processor;
    }

    // The override constructor.
    public PostsRouter(IPostsProcessor processor, Externals override) {
        this.processor = processor;
        this.externs = override;
    }

    public static class Externals {
        public Router getRouter(Vertx vertx) {
            return Router.router(vertx);
        }
    }

    @Override
    public Router initializeRouter(Vertx vertx) {
        Router router = externs.getRouter(vertx);
    ...
```

And this is how we override that behavior in the test class:
```java
public class TestPostsRouter {
    ...

    // Create the new externals, which overides the old behavior.
    public static class TestExterns extends Externals {
        public Router getRouter(Vertx vertx) {
            return myTestRouter;
        }
    }

    @BeforeEach
    public void setup() {
        ...
        this.processor = new Processor(this.db, new TestExterns());
        ...
    }
}
```
