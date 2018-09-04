# Workshop 3 - Functions

You’ll be working in pairs again - **driver/navigator** style, same as before.
Start by setting up the workshop in the same way as the previous two.

For each of the **bold** questions below:

<p style="text-align: center; font-size: 1.3em;">
  <span style="display: inline-block; padding: 0 1em">🗣 Discuss</span>
  <span style="display: inline-block; padding: 0 1em">👩‍💻 Change</span>
  <span style="display: inline-block; padding: 0 1em">👀 Observe</span>
  <span style="display: inline-block; padding: 0 1em">🔄 Repeat</span>
</p>

1. **🗣 Discuss** the question with your partner
1. **👩‍💻 Change the code** - what do you expect your changes to do?
1. **👀 Observe the results** - what happened when you ran your code? How did it
   differ from your expectations
1. **🔄 Repeat** - keep discussing, changing, and running the code until you
   feel you understand it

**Remember, it’s about exploration and understanding. Take your time!**

**Don’t move on until you fully understand what’s happening.**

# Part 1

Functions let us break a program up into **small, reusable chunks**. We’ve
written some already - `draw` and `setup` are special functions that P5.js
already knows about. We’ve used lots of functions as well - any word followed by
`()` is a function - `ellipse(...)`, `rect(...)`, `fill(...)`, `background(...)`
etc.

Create a new sketch with this code: (if you're not sure how to create a new
sketch, refer back to the previous workshop)

```js
function setup() {
  size(400, 400)
  background(255)
}

function draw() {
  fill(255, 130, 0)
  stroke(0)
  triangle(0, 30, 40, 0, 80, 30)
  rect(5, 30, 70, 70)
}
```

**Annotate each line with a `// comment` describing what it does**

**Predict what this will draw when you run it.** Try using a pen and paper to
help you figure it out.

Let’s add our own function. Processing has built-in functions for drawing
rectangles and other shapes, but let’s add a new one that draws squares. Add
this code to your sketch:

```js
function square(x, y, size) {
  rect(x, y, size, size)
}
```

Replace `rect(5, 30, 70, 70)` with `square(5, 30, 70)` and run your code.

**What’s going on here? What might `x, y, size` mean?**

**Add a comment above your function saying what the inputs and outputs of your
function are (name, description, data type) and what your functions does.** You
should add a comment like this to every function you write.

Let’s create some more functions - one for drawing the roof of the house, and
another for drawing the entire house.

C**reate functions using the code below as a starting point.** Your house
function should only use the square and roof functions that we defined.

```js
function roof(x, y) {
  // ...
}

function house(x, y) {
  // ...
}
```

## Tasks

1. Change `draw` to use the new `house` function.
2. Change `draw` to show a `hous at the position of the mouse pointer.
3. Change `draw` to show a row of three houses.
4. Change your `house` function so it needs `width` and `height` as well as `x`
   any `y`
5. Update `draw` so your row of three houses each has a different size.

**What are three reasons you might choose to move to some code into a
function?**

1. ...
2. ...
3. ...

# Part 2

As well as executing a set of instructions, functions can give information back
to the code that uses them. For example, let’s say you’re writing an application
to help you do your taxes - exciting, I know. You might have a line of code like
this:

```js
var taxAmount =
  (56.6 * myIncome) / theTaxRate - catNumber + (theTaxRate - (67.2 % ennui))
```

> _(i dont know how taxes work but this random crap i wrote is probably more or
> less it right?)_

That’s a pretty complicated calculation, so we might decide to clear up the code
by **refactoring** it into a function:

```js
function calculateTaxAmount(income, taxRate) {
  return (56.6 * income) / taxRate - catNumber + (taxRate - (67.2 % ennui))
}

var taxAmount = calculateTaxAmount(myIncome, theTaxRate)
```

Now, whenever we need to calculate a tax amount, we can call that function and
not need to worry about the messy calculation.

That `return` key word is important - when we call a function, whatever comes
after `return` gets used as a value by the program. For example:

```js
function double(someNumber) {
  return someNumber + someNumber
}

// these three lines all do the same thing:
console.log(double(4))
console.log(4 + 4)
console.log(8)
```

---

Look closely at this line:

```js
function calculateTaxAmount(income, taxRate) {
```

**What might each section mean?**

- `function`: ...
- `calculateTaxAmount`: ...
- `income, taxRate`: ...

All together, that line is describes most of the function’s **signature**. The
signature is the **name** of the function, its **inputs**, and its **outputs**.

# Part 3

Look at the programs below. Read each one carefully, and write down what you
expect the output to be. Then, run the code and see what the actual output is.
If it’s different, find out why and write it down.

## Program 1

```js
function setup() {
  console.log(3 + 3 + 3)
}
```

### Expected Output

### Actual Output

### Different? Why?

## Program 2

```js
var two = 4
function setup() {
  console.log(two + two + two)
}
```

### Expected Output

### Actual Output

### Different? Why?

## Program 3

```js
function boop(a, b) {
  return a + b
}

function setup() {
  console.log(boop(1, 2))
}
```

### Expected Output

### Actual Output

### Different? Why?

## Program 4

```js
function boop(a, b) {
  return a + b
}

function setup() {
  console.log(boop(boop(1, 2), boop(3, 4)))
}
```

### Expected Output

### Actual Output

### Different? Why?

## Program 5

```js
function boop(a, b) {
  return 'Boop is good'
}

function setup() {
  console.log(boop(5, 7))
}
```

### Expected Output

### Actual Output

### Different? Why?

**What does return mean in JavaScript?**

# Part 4

Create a new sketch using this code:

```js
var x = 0
var speed = 2

function setup() {
  size(300, 100)
}

function draw() {
  background(0)

  x = x + speed

  if (x < 0) {
    speed = speed * -1
  } else if (x > 300) {
    speed = speed * -1
  }

  ellipse(x, 30, 10, 10)
}
```

**Before you run it, try to predict what will happen on screen.** If you find
this difficult, sketch it out on a piece of paper and trace through the code
step by step, as if you were the computer.

**Run the code and see what happens. Was your prediction accurate? If not,
why?**

Replace the section that causes the ball to bounce with this:

```js
if (ballShouldBounce(ballPosition)) {
  speed = speed * -1
}
```

- Implement the `ballShouldBounce` function.
- Move the entire bounce `if` statement into a new function.
- Make the ball move vertically as well as horizontally
- Refactor your code by adding functions until `draw` only uses functions you've
  written, not ones from processing