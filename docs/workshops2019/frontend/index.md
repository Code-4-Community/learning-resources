# Vue Walkthrough

### Getting started

So we'll start with the simplest Vue project that we can make to show some very basic concepts. Then, once we have a feel for things, we'll look at something a little closer to what you might have for an actual project.

So to start all we need is an html file with a reference to the Vue script in its head tag.

In HTML, you typically have all of your meta data (the things that describe your web page without actually showing up on it) contained within a `<head>` tag. Our script tag with a src attribute says that we want to get some code from the given url, this code is everything that Vue uses under the hood.

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
  <title>Our First Vue App</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script>
</head>
<body>
  <div id="appl">
      Hello World
  </div>
</body>
</html>
```

To actually use Vue we're going to have to write some of our own code in a `<script>` tag in our page body.

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
  <title>Our First Vue App</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script>
</head>
<body>
  <div id="appl">
    We have a mesage: "{{ our-message }}"!
  </div>

  <script>
    var app = new Vue({
      el: '#appl',
      data: {
        our-message: 'Hello my name is Vue'
      }
    })
  </script>
</body>
</html>
```

We first create a Vue app instance, within that object we're going to have two fields, `el` and `data`. `el` is going to find an html element in our body that we are binding our vue instance to. In our case we're finding the element that has `id="appl"`. `data` is going to define all of the variable data that we want to use for our web page, for now just a single string.

Finally, in our actual html code we are going to use our data by referencing it in double bracket notation. This is how we can dynamically display data on our web page.

-- Demonstration --

So lets look at what we have so far.

(Open html file in chrome)
(Explain parts of developer tools)
(Show that we can update our data from the console)


### Fetching Data

So this is cool but lets do some more interesting stuff. Firstly, we're going to get some JSON data that we can use on our webpage [http://myjson.com/]. myjson is a super useful website that will allow you to define your own json data that it'll then create an http link that can retrieve it. I've already gone ahead and defined some data at 'https://api.myjson.com/bins/184sbc' that you can use.

```html
<body>
  <div id="appl">
    {{ products }}}
  </div>

  <script>
    var app = new Vue({
      el: '#appl',
      data: {
        products: []
      },
      created() {
        fetch('https://api.myjson.com/bins/184sbc')
          .then(response => response.json())
          .then(json => {
            this.products = json.products
          })
      }
    })
  </script>
</body>
```

To get our data from the server we're going to override one of Vue's lifecycle hooks. All that means is we're going to write a function in our Vue app that will get executed at some point while we're making our app [https://vuejs.org/v2/api/#created]. The created function will run when we create our app. It's going to fetch data from the given url, turn it into json, and then update our Vue data to equal what we were given.

Just printing out our data gives us something pretty incomprehensible so we'll have to do a little more to get it into a state we can present.

### Directives

```html
<div id="appl">
<ul>
  <li v-for="product in products">
    [{{ product.stock }}] {{ product.name }}: ${{ product.price }}
    <span v-if="product.stock === 0">--- OUT OF STOCK</span>
  </li>
</ul>
</div>
```

The first thing we'll do is print each of our products separately. To do that we're going to use one of Vue's directives. A directive is just a special html attribute that starts with 'v-' whose value is a javascript expression. This syntax can seem kind of strange when you start because you're writing JS in a string, it seemed to me that this felt like magic when I started, but really all that is happening is Vue is parsing through your HTML and replacing it with it's own computed HTML.

We're using a for directive to print out all of our data, we can also use an if directive to maybe print out a different DOM element.


### Computed Properties

So now we have some data that we can work with but lets elevate our webpage by doing some more interesting things with our data and giving our users a way to interact.

```html
<body>
  <div id="appl">
    <ul>
      <li v-for="product in products">
        [{{ product.stock }}] {{ product.name }}: ${{ product.price }}
        <span v-if="product.stock === 0">--- OUT OF STOCK</span>
      </li>
    </ul>
    <h2>Our inventory is worth: ${{ inventoryCost }}</h2>
  </div>

  <script>
    var app = new Vue({
      el: '#appl',
      data: {
        products: []
      },
      computed: {
        inventoryCost() {
          let totalCost = 0
          for (let i = 0; i < this.products.length; i++) {
            totalCost += (this.products[i].stock * this.products[i].price)
          }
          return totalCost
        }
      },
      created() {
        fetch('https://api.myjson.com/bins/184sbc')
          .then(response => response.json())
          .then(json => {
            this.products = json.products
          })
      }
    })
  </script>
</body>
```

The first thing we'll add is a way to see how much money all of our products are worth. To do this we'll add an `<h2>` at the bottom of our list and have a message with some variable for the total inventory cost. At this point, we have two options. The first thing we might do is add another field to our data object. If we do this then we would have to have some way of storing our inventory cost and also keeping it consistent with the products we have. While this may work for our small web page, we are violating one of the big rules of writing good code by having these two seperate fields, `products` and `inventoryCost` that rely on each other being a certain way. This is called having parallel data structures and is a bad idea because any time one of these fields change we have to know to change the other and this leaves a big hole for bugs to get into our code.

Instead, we're going to use what's called a __computed__ variable in Vue. This is another field in our Vue app but now instead of setting our inner objects equal to some data, we're going to define `inventoryCost` as a function. This is going to compute our inventory cost from our list of products. By deriving one variable from another, we've eliminated the parallel constraints from the two.

### Interactivity

```html
<button v-else v-on:click="product.stock -= 1">Sell</button>
```

So to really see the benefit of our computed data we'll have to add some way for our data to change. Let's say we want to add a sell button for each of our products. To make our button do something, we're going to use a vue event listener.

To make an event listener, we're going to use the 'on' directive. We want our sell feature to be a button so we can make our directive activate on a 'click' event.

So this is a little weird to understand at first. Basically what's happening is HTML has an internal event system. So whenever things like a button being clicked or a form being submitted happens, an 'event' object will be created for what happened. Vue then has event listeners that are waiting to see if any specific events get created. When one of the Vue listeners notice an event they're interested in they can then run some piece of code. In our case, whenever our HTML button transmits a 'click' event, we listen for that and then decrease our data's stock by 1.

(Make sure people understand this)

Additionally, we don't want to be able to sell product that is out of stock so we'll add a v-else directive that will know to only render our button if we haven't already rendered our out of stock message. Notice that it's totally okay to have multiple attributes on the same tag and that we can have attributes without any values.


### Working with a real project

So if we're making a real Vue app we're not going to just be coding in a single file. Just to introduce you to what this might look like we're going to use a command line interface that Vue makes available for us. You can download it if you google Vue CLI. It just takes care of setting up the basics of a Vue project and adds packages that are helpful for general apps.

https://cli.vuejs.org/guide/creating-a-project.html#vue-create

Different libraries that can be installed with the CLI and what they do:
- Bable
    - A compiler to allow you to use advanced JS features and still work with older versions of JS
- Typescript
    - Adds types to Javascript, makes it more object oriented
- Progressive Web App
    - PWA basically keep their logic on the client side
- Router
    - Makes it easier to link different pages of your application
- Vuex
    - Gives a centeral location for you to store all the data that you use throughout your application
- CSS Pre-Processors
    - Can give you better ways of organizing your CSS
- Linter / Formatter
    - A linter or formatter will basically be checking that your code style is consistent
- Unit Testing
    - Test your functions! Ask Jack Blanc!
- E2E Testing
    - End-to-end testing, test your whole application! Ask Jack Blanc!



## Additional Resources

- General HTML and CSS (Great place to get better at the basics)
    - https://designshack.net/articles/css/5-steps-to-drastically-improve-your-css-knowledge-in-24-hours/
- The Vue bible
    - https://vuejs.org/v2/guide/installation.html
- 1hr Crash Course from Traversy Media
    - https://www.youtube.com/watch?v=Wy9q22isx3U
- YouTube Tutorial from Academind
    - https://www.youtube.com/playlist?list=PL55RiY5tL51p-YU-Uw90qQH419BM4Iz07
- Another Vue tutorial
    - https://www.taniarascia.com/getting-started-with-vue/





