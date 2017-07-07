// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#1F2022",
  secondary: "white",
  tertiary: "#f7df1e",
  quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide bgImage="https://images.unsplash.com/photo-1484882918957-e9f6567be3c8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=81dc5ae844a16ff136e2a4f6781210ac" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ES6 Codelab
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Who's afraid of Modern Javascript?
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=6367eb61d0e9bb735f3b572a996d9c4e" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The Origins of Modern Javascript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            And how to follow the future
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=08ccf46749538ff73543865840c47fca" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Prologue | Basic ES6 Setup
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to use Babel for cross browser support
          </Text>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="primary">
          <Heading margin="30" size={6} caps fit textColor="tertiary">Let's get it started 🎉</Heading>
          <Terminal title="1. amite: ~(zsh)" output={[
            "npm install babel-core babel-loader babel-preset-env webpack --save-dev",

          ]}
          />
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=08ccf46749538ff73543865840c47fca" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Esnext support with babel
          </Heading>
          <CodePane
            textSize={16}
            lang="js"
            source={require("raw-loader!../assets/code/es-webpack-with-babel.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            You might need custom .babelrc
          </Heading>
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/es6-custom-babelrc.example")}
          />
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1490041125797-76d80076bf80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=36b47feeaec8b55cf01be5cd46cbae1a" bgDarken={0.50} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module One - Arrow Functions
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            What they are and how to use them!
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=08ccf46749538ff73543865840c47fca" bgDarken={0.60} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Using the common for loop - Exercise
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            http://bit.ly/es5-for-loop
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Using the common for loop - Solution
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es5-for-loop.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Using higher order function MAP - Solution
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es-6-hoc-map.example")}
          />
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=08ccf46749538ff73543865840c47fca" bgDarken={0.60} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Getting lost in `this` world
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es5-this-bug.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Did anybody order a NaN?
          </Heading>
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/es5-this-nan.example")}
          />
        </Slide>

        <Slide bgImage="https://images.unsplash.com/photo-1497146135827-2b04f80ccd23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=c22825dd54f9842fa704a7850dba6035" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Two - Defaults and Destructuring
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Remove  guard clauses and repetition from your code
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Too much to guard against
          </Heading>
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/es5-no-defaults.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            No more Guards 😀
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es6-defaults")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Destructure complex objects
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es6-destructure-profile.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Destructure complex objects - Solution
          </Heading>
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/es6-destructure-profile-solution.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Destructure arrays
          </Heading>
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/es6-destructure-arrays.example")}
          />
        </Slide>

        <Slide bgImage="https://images.unsplash.com/photo-1477003009257-97a7b7c598e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=097b611bf1eb55536063bed83245f1ee" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Six - Using Object and Array Spread
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Learn to spreee..aaaad that data
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Adding arrays using the array spread operator
          </Heading>
          <CodePane
            textSize={15}
            lang="js"
            source={require("raw-loader!../assets/code/es6-spreading-concat-arrays.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Object Spread Operator
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es6-object-spread.example")}
          />
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1495210960925-18e290e30641?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=b5ea36f4e82cd5ecc591540adfe9e018" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Three - Bringing Classes into Javascript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How and when to use es6 classes?
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Do classes really exist in Javascript?
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es6-class-basics.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Getters and Setters work 😃
          </Heading>
          <CodePane
            textSize={20}
            lang="js"
            source={require("raw-loader!../assets/code/es6-getters-setters.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            You can have static properties
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-static-properties.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Use classes to generate objects
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-class-as-factory.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Inheritance without explicit prototypes
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-class-inheritance.example")}
          />
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=30fa16d53354bae230f354209e64105b" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Four - Use modules to organize your application
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Organize, Design and Import/Export your code
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Different ways to export your code
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            http://bit.ly/es6-export-syntax
          </Text>
        </Slide>

        <Slide bgImage="https://images.unsplash.com/photo-1473655551229-a39d1a982885?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=dc9f45cc5872fe040f366ece9ffdceca" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Five - The joy of es6 template strings
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Say goodbye to template engines
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Simple template rendering
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-simple-template.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Looping data inside a multiline template
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-template-string-function.example")}
          />
        </Slide>

        <Slide bgImage="https://images.unsplash.com/photo-1486229868416-95ac9da0a349?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=4068f278db83d372a48dd3dbd23de7b6" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Seven - Block scoping with let and const
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            The new way to scope your JS code
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=4a5f05bbac5b705b7c50a5c076571b4c" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Eight - Callbacks, Generators, Promises and Async
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            The asynchronous side of Javascript
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            The trouble with callbacks
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-callbacks.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            What are callbacks?
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-event-callback.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Are all callbacks asynchronous?
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-synchronous-callbacks.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Asynchronous callbacks
          </Heading>
          <CodePane
            textSize={17}
            lang="js"
            source={require("raw-loader!../assets/code/es6-ajax-callback.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Getting Promises at a coffee shop ☕️
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} lineHeight={1} textColor="tertiary">
            Promises can be in three states
          </Heading>
          <Appear>
            <List>
              <ListItem>Pending</ListItem>
              <ListItem>Fulfilled</ListItem>
              <ListItem>Rejected</ListItem>           
            </List>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Writing your own Promise - I
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-writing-own-promise.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Writing your own Promise - II
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-writing-own-promise-2.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            From callbacks to promises
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-callbacks-to-promises.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Promises can be resolved together
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-promises-all.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Here Comes Async
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-simple-async.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Making Concurrent Requests
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-concurrent-async-requests.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="secondary">
            Making Parallel Requests with Promise.all
          </Heading>
          <CodePane
            textSize={19}
            lang="js"
            source={require("raw-loader!../assets/code/es6-parallel-async-requests.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} lineHeight={1} textColor="tertiary">
            Async Coding Challenge
          </Heading>
          <Text size={6} textColor="secondary">http://bit.ly/chained-promises</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
