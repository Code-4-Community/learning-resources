# Frontend Basics and Introduction to git

Terminal cont.
Git basics
  - idea of version control
  - local vs remote repos
  - commit, push, pull
Front end basics
- HTML
    - elements
    - tags
    - attributes
- Basic CSS
- Javascript


Basic plan
1. Have everyone clone the git repository
- Open terminal
- Go to a folder
- Run a git clone

2. Tell everyone to ignore most of the boiler plate, get everyone to be able to run our base code
- Introduce the idea of node
- npm install
- npm run start
- Open localhost, explain the idea

3. Use our example code to lecture about the basics of HTML
- Bring up file for the homepage
- Talk about format of HTML
- Introduce tags, attributes
- divs & spans

4. Add some basic color and positioning CSS to make a basic layout
- Have a stylesheet that is imported into homepage
- Introduce className and id and css selector syntax
- Have a CSS to define a layout already, have students use class names to insert elements into the layout

5. Walk through building out a simple post component


## What is HTML, CSS and Javascript?

HTML provides the basic structure of sites. What is on the page?

CSS is used to control presentation, formatting, and layout. How does the page look?

JavaScript is used to control the behavior of different elements. What can the page do?

HTML, CSS, and Javascript are ever evolving technologies that were created around the year 2000, practically ancient in web development terms. They all have their own systems for adding new features and aren't always consistent with each other or even within themselves. Because of this, there are often dozens of ways to do the same thing with HTML, CSS and Javascript. This can be confusing to beginners or even experienced developers, but it's important to not get discouraged and to always keep an open mind to alternative approaches even if you don't need them.

To learn more, [this blog](https://blog.hubspot.com/marketing/web-design-html-css-javascript) gives a good overview.

> Side Note: Javascript is a programming language, HTML and CSS have their own syntax and can do some similar things, but they are *not* programming languages.

> Side Note: Browsers are essentially parsers of HTML, CSS, and Javascript. The reason the development of HTML, CSS, and Javascript are so distributed / hard to follow is because for a new feature to be added, browsers have to update their engines to support the feature. You'll often see compatibility charts for newer features that show which browser versions support the feature and which do not (this is why you hear web developers curse internet explorer so much).

## HTML

HTML is a subset of XML.

#### What is XML?

XML defines a syntax (a set of rules) to express data. There are 3 main aspects of XML.

A tag (or element) is the basic unit.

Example: `<element>`

Every tag has a name which is the first word following immediately after the opening bracket (`<`). Every tag also has to have a closing tag after it. A closing tag is simply `</element>` where `element` is just the name of the tag repeated again. 

Between the opening and closing tags are the second aspect of XML, children. Between an element's two tags is a list of either other XML tags or text. Every item in this list is a child of the element that is surrounding them. Of course, an XML element that is the child of an element can also have its own children. You'll often here the term "depth" of an XML element to refer to the number of parents that element has.

```xml
<parent>
    <first-child>
        Richard
        <first-grandchild>
            Jamie
        </first-grandchild>
        <second-grandchild>
            Jessica
        </second-grandchild>
    </first-child>
    <second-child>
        John
    </second-child>
    <third-child>
        Dylan
        <third-grandchild>
          Alice
        </third-grandchild>
    </third-child>
</parent>
```

> Side note: Often it'll be the case that an XML element has zero children. You can still write out both the opening and closing tags with nothing between them but XML also has a shorthand that saves some time retyping the closing tag:
> `<element></element` === `<element />`

The third aspect of XML is attributes. Attributes live within the opening tag of XML elements. Attributes have a name and a value, both of which are just plain strings (words). The attribute value will always be wrapped in double quotes or single quotes.

`<element attributeName="attributeValue">`

Attributes allow you to specify extra information about an element.

#### How is HTML different than XML?

Like we said earlier, HTML is a subset of XML. All HTML is also XML, not all XML is HTML.

HTML defines several XML elements and gives guidelines on how they can be used together. There are a ton of different HTML elements that are defined and a lot of them aren't super useful so don't bother trying to learn all of them (google is your friend though).

A couple of the important HTML elements to know are:

- `<div>`: Defines a block element
- `<span>`: Defines an inline element
- `<p>`: Stands for paragraph, use this to wrap text

For each defined element, HTML also defines a ton of different attributes that you can optionally add to an element. We'll see more of these in practice, and two important ones when we talk about CSS.

In addition, for a file to be considered an HTML file, there are a couple of standard patterns you need to follow. But, because we're using React for everything, React takes care of all of that for us, so we won't cover it here. See [here](http://csis.pace.edu/~wolf/HTML/htmlnotepad.htm) for details.


## CSS

CCS is the standard for adding styling to your web page. HTML can exist without CSS but CSS cannot do anything without HTML. A CSS file is just a list of rules. A rule defines some criteria for which HTML elements it applies to, and a list of properties those elements should follow.

CSS, like HTML, defines 100s of different properties for elements, some of which you will use a lot and some you will be fine never using.

```css
p {
    font-size: 12px;
    font-weight: bold;
}

#app {
    text-align: center;
    height: 400px;
}

.blog-post {
    width: 100%;
    height: 50px;
    color: lightblue;
}
```

#### Selectors

CSS provides about a dozen ways of defining the elements you want a rule to apply to. We'll cover 3 of the most basic. You can generally get by with these for most use cases, but if a situation requires more complex selection logic you should be aware that other methods exist and you can google them.

The first type of selector is an element tag. You simply write the name of an HTML element and all elements of that type will be selected.

The next two types of selectors are looking for HTML elements with particular attribute values. Every HTML element can optionally define an attribute called 'id' and attribute called 'class'. We can then select an element with a particular id value by preceding the id value with a `#` and we can select an element with a particular class value by preceding the value with a `.`.

The only difference between the two is that an element's id value should be unique, no other element on the page should have the same id value. Many elements can have the same class value however. Generally, you should favor using classes rather than ids because it makes your code more reusable.

For the rest of the CSS selectors, see [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).


#### Properties

> Google is your best friend

CSS properties allow you to do just about anything to HTML elements. The three big concepts you'll be doing with CSS in order of complexity are adding style/color to text or elements, changing the size of elements, and defining the layout of your elements.

##

Styling element's color or text is often a trial of finding the right attribute for your use case. The fastest way to get better at CSS is by trying to write HTML and CSS webpages and using google to find the right techniques for your situation.

To make things even more confusing, for each property there can be multiple ways of expressing the same value. The `color` property lets you specify an element's color, and it takes a color value. A color value can be just the name of the color ('red', 'blue', 'gray'), an RGB value ('rgb(255, 0, 255)', 'rgb(0, 0, 255)', 'rgb(125,125,125)'), a Hex color ('#FF0000', '#0000FF', '666666'), or just about any other way you can [define a color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).

##

To tackle sizing and positioning of elements, you first have to understand the "box model".

Every HTML element has several boxes around it whose dimensions can be controlled through CSS. Every element has all of these boxes around it, though often these boxes can coincide.

The innermost box is the "content box". This is the space that all the children of that element occupy. 

The next box is the "border box". This includes all the content of the content box PLUS the border of the element.

Then is the "padding box". This includes the border box PLUS some padding (empty space) that the element should be surrounded by.

Finally is the "margin box". This includes the padding box PLUS the margins around the element. Margins and padding both define empty space that should surround elements. The main difference is that two adjacent elements can share the same margins, but they can't share the same padding.

For each of these boxes, you can define a width and a height with a corresponding CSS property, these values change the difference between the box and the next inner box (i.e. `border-width: 10px` makes the border box 10 px bigger on every side than the content box). 

There is also regular `width` and `height` properties. By default, these define the size of the content box, but you can override this behavior so that they refer to the size of the content plus the border. This is common practice now because it often makes development simpler.

For now, we'll only deal with lengths in units of pixels or `px`. You can also define lengths with [different units](https://css-tricks.com/the-lengths-of-css/) including units that are relative to the font size, relative to the size of the browser size, and relative to the parent element.

> Side Note: pixels don't actually refer to the pixels on your screen, they're a set length that is meant to be consistent across devices and browsers.

##

Defining layouts can be one of the hardest parts of mastering CSS and figuring out how to position an element just right can frustrate even seasoned developers. This is challenging because a good layout has to be adaptable to many different browser sizes that a user may have.

The two prominent CSS systems for creating flexible layouts are called 'flexbox' and 'grid'. Flexbox is great for items that should be grouped together but don't need to have a particular size. Grid is great when there are very clear boundaries for where elements should be. These layouts can be used together as well for more complicated layout patterns. To learn more about these layouts and how to implement themselves you can visit [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for flexbox and [here](https://css-tricks.com/snippets/css/complete-guide-grid/) for grid.

For now, we will use the CSS we have already designed to fill in a layout. <Go into demo here>

<Mention that CSS can be written in many different places>

## Javascript

Javascript allows you to add interactivity and complex functionality to your website. Javascript started as a simple scripting language designed to complete simple tasks on a webpage. Now we have Javascript frameworks like React that dominate modern web development. We'll see a lot more Javascript as we start working with React but for now we will stick to simple use cases.

<Show boldIt & revertIt simple methods>

Javascript is fairly intuitive to pick up if you're familiar with Python or a different scripting language but can be tricky if you don't have much general coding experience.

For a great interactive tutorial through the basics of Javascript try [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).









