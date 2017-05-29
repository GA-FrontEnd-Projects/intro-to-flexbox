# intro-to-flexbox
Learn all about the magic of flexbox

If you've spent much time building HTML layouts (especially if the layout comes from a creative designer) you'll know that centering items vertically and/or horizontally can be a huge pain. There are a number of different ways to center items, and most of them feel like hacks or magic incantations. After many, many years of suffering the W3C decided to bless us with flexbox.

Flexbox gives us the ability to create common, modern layouts without all the feelings of hackiness associated with laying content out using the tools available to us before this point. This CSS module gives us dramatically more control over the direction, ordering, and position of elements inside the flex context. You can find the full flexbox spec here: [https://www.w3.org/TR/css-flexbox-1/]()

To set up a flexbox layout, you'll need two components:

1) A container element, known as the **flex container**  
2) The items inside the flex container, known as **flex items** 

The flex container needs a CSS `display` value of `flex` (or `inline-flex`, if you want the flex container to render inline), and a few other new properties will determine how the flex items are laid out.

Open index.html for a demonstration of the effects different properties and values configurations have on flex content.
