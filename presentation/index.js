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
}, {
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
            "npm install react react-dom next",

          ]}
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
        <Slide bgImage="https://images.unsplash.com/photo-1497146135827-2b04f80ccd23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=c22825dd54f9842fa704a7850dba6035" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Two - Defaults and Destructuring
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Remove  guard clauses and repetition from your code
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1495210960925-18e290e30641?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=b5ea36f4e82cd5ecc591540adfe9e018" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Three - Bringing Classes into Javascript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How and when to use es6 classes?
          </Text>
        </Slide>
        <Slide bgImage="https://images.unsplash.com/photo-1493217465235-252dd9c0d632?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=30fa16d53354bae230f354209e64105b" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Four - Use modules to organize your application
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Organize, Design and Import/Export your code
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
        <Slide bgImage="https://images.unsplash.com/photo-1477003009257-97a7b7c598e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=097b611bf1eb55536063bed83245f1ee" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Six - Using Object and Array Spread
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Learn to spreee..aaaad that data
          </Text>
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
        <Slide bgImage="https://images.unsplash.com/photo-1492464063426-31c70befa4b7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=e02d5aa11564f5ad309f806689112d32" bgDarken={0.40} transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Module Nine - Map and Sets
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            New Data Structures in Javascript
          </Text>
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
