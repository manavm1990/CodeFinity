import React from "react"
import {
  Appear,
  Box,
  Deck,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  Slide,
  Text,
  UnorderedList,
} from "spectacle"
import { Slide as Template } from "templates"
import carbon from "./img/carbon.svg"
import carbon2 from "./img/carbon2.svg"
import electron from "./img/electron.png"
import ionic from "./img/ionic-react.png"
import languages from "./img/languages.png"
import node from "./img/nodejs.svg"
import react from "./img/react.png"
import student from "./img/student.png"
import student2 from "./img/student2.png"

export default () => (
  <Deck template={Template} transitionEffect="fade">
    <Slide
      backgroundImage="url(https://images.unsplash.com/photo-1565299543923-37dd37887442?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1014&q=80)"
      backgroundOpacity={0.4}
    >
      <Image
        src="https://www.claimacademystl.com/images/white-logo.png"
        width={350}
      />
      <Notes>
        <p>We&apos;ll wait a couple of minutes.</p>
        <p>
          Meanwhile, if you can head on over to repl.it and get started there if
          you want to code along when we get to that part a bit later.
        </p>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="72px">
          Manav Misra 👨🏾‍🏫
        </Heading>
        <UnorderedList>
          <ListItem>Mech. Eng. graduate of Missouri S&T</ListItem>
          <ListItem>Freelancing since 2013</ListItem>
          <ListItem>JavaScript Specialist/Instructor since 2018</ListItem>
        </UnorderedList>
        <FlexBox>
          <Box mr="10px">
            <Image src={student} maxWidth="100%" />
          </Box>
          <Box>
            <Image src={student2} maxWidth="100%" />
          </Box>
        </FlexBox>
      </FlexBox>
      <Notes>
        <p>
          The 🔑 is to have some problem-solving experience, combined with,
          grit, determination and focus to practice every day and be
          detailed-oriented.
        </p>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="96px">
          ✨Fundamentals of Computer Science✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A JavaScript Perspective 👩🏾‍💻
        </Heading>
      </FlexBox>
      <Notes>
        <p>
          This presentation will be nothing but an amalgamation of a few of my
          first lessons from bootcamp. Due to our time constraints, this will be
          a bit less interactive and more of a &lsquo;lecture&rsqo; style.
        </p>
        <p>
          Classes go a bit deeper and we have more of a Q&A discussion and some
          &lsquo;hands on&rsquo; lab work.
        </p>
      </Notes>
    </Slide>

    <Slide
      backgroundImage="url(https://images.unsplash.com/photo-1600244479795-ece0beed268c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
      backgroundOpacity={0.5}
    >
      <FlexBox flexDirection="column">
        <Heading margin="0px" fontSize="h2">
          Why JavaScript?
        </Heading>
        <Heading margin="0px" fontSize="h3">
          One Language - Limitless Possibilities
        </Heading>

        <FlexBox>
          <Appear elementNum={0}>
            <FlexBox flexDirection="column">
              <Image src={react} maxWidth="100%" />
              <Text textAlign="center">Mobile/Web UI</Text>
            </FlexBox>
          </Appear>

          <Appear elementNum={1}>
            <FlexBox flexDirection="column" minHeight="580">
              <Image src={node} width="220" />
              <Text textAlign="center" mt="3em">
                Web Servers
              </Text>
            </FlexBox>
          </Appear>

          <Appear elementNum={2}>
            <FlexBox flexDirection="column">
              <Image src={electron} maxWidth="100%" />
              <Text textAlign="center">Native Desktop Apps</Text>
            </FlexBox>
          </Appear>

          <Appear elementNum={3}>
            <FlexBox flexDirection="column">
              <Image src={ionic} width="240" />
              <Text textAlign="center">Native Mobile Apps</Text>
            </FlexBox>
          </Appear>
        </FlexBox>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox flexDirection="column">
        <Image src={languages} maxWidth="70%" />
        <Text>
          Stack Overflow <strong>2020</strong> Survey
        </Text>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading margin="0px" fontSize="72px">
        JavaScript <strong>is</strong> the language of the web! 👑
      </Heading>
      <Appear elementNum={0}>
        <Text textAlign="center">
          Java and C# <em>need</em> JS. JS doesn&apos;t need them!
        </Text>
      </Appear>
    </Slide>

    <Slide transitionEffect="slide">
      <FlexBox height="62.5%" flexDirection="column" alignItems="center">
        <Image src={carbon} />
      </FlexBox>
    </Slide>

    <Slide transitionEffect="slide">
      <FlexBox height="62.5%" flexDirection="column" alignItems="center">
        <Image src={carbon2} width="100%" />
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Heading margin="0px" fontSize="h2">
          Rapid 🔥 Review!
        </Heading>
        <Appear elementNum={0}>
          <Markdown>
            {`
              \`\`\`javascript
                /**
                  * keyword - variable name - assignment operator - data type number
                  * BIND data to a VARIABLE
                  */
                const num1 = 3;
              \`\`\`
          `}
          </Markdown>
        </Appear>

        <Appear elementNum={1}>
          <Markdown>
            {`
              \`\`\`javascript
                /**
                  * keyword - variable name - assignment operator - data type number - concatenation operator
                  * Add '1' to the VALUE BOUND TO 'num1' and ASSIGN to 'num2'
                  */
                let num2 = 1 + num1
              \`\`\`
          `}
          </Markdown>
        </Appear>

        <Appear elementNum={2}>
          <Markdown>
            {`
              \`\`\`javascript
                /**
                  * keyword - expression - comparison operator - boolean (true/false)
                  * ➡️ statement
                  * While it's true that VALUE BOUND TO 'num1' is less than 10...
                  */
                while (num2 < 10){
                  console.log(num2)

                  /**
                    * Keep replacing the VALUE of 'num2' by
                    * adding 1 to the current value.
                    * The previous number is 'garbage collected.'
                    */
                  num2++
                }
              \`\`\`
            `}
          </Markdown>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox flexDirection="column" justifyContent="center" height="100%">
        <Appear elementNum={0}>
          <Markdown>
            {`
              \`\`\`javascript
                // keyword - variable name - parameters - function body
                 function calcRectPerm (len, width) {
                   return 2 * len + 2 * width
                }
              \`\`\`
          `}
          </Markdown>
        </Appear>

        <Appear elementNum={1}>
          <Markdown>
            {`
              \`\`\`javascript
                 // function invocation - arguments
                 calcRectPerm (7,11)
              \`\`\`
          `}
          </Markdown>
        </Appear>
      </FlexBox>

      <Notes>
        <p>Code Examples:</p>
        <ul>
          <li>
            <code>
              {
                // TODO: Write ✍️ a fxn. that takes in an 'age' and returns a boolean to determine whether someone is an adult or not.
                // TODO: Write a fxn. that takes in a percentage score and assigns a letter grade
              }
            </code>
          </li>
        </ul>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox flexDirection="column" justifyContent="center" height="100%">
        <Heading margin="0px" fontSize="h2">
          Arrays
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <UnorderedList>
        <ListItem>
          Arrays are &lsquo;lists&rsquo; of other data types. They can hold{" "}
          <em>any</em> other data types.
        </ListItem>

        <ListItem>
          We reference elements in an array using an index. Each element is
          automatically numbered starting at 0. We just specify the
          &lsquo;numbered index&rsquo; we need inside of <code>[]</code>.
        </ListItem>
      </UnorderedList>
      <Appear elementNum={0}>
        <FlexBox flexDirection="column">
          <Markdown>
            {`
              \`\`\`javascript
                const groceryList = ["Apples", "Bananas", 1, {}, "TP", "Bars", "Bacon", "Eggs"];
                console.log(groceryList[0])
              \`\`\`
          `}
          </Markdown>
          <Image
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/54052879-12e9-477c-9689-a8f2b3f530d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201215T121719Z&X-Amz-Expires=86400&X-Amz-Signature=b7eb3cf4cfd958237db1326883684aedc7f8eed1489f8f8f115bf5463a12191a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
            maxWidth="320px"
          />
        </FlexBox>
      </Appear>
    </Slide>

    <Slide>
      <FlexBox flexDirection="column" height="100%">
        <Image
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e1f1757-6220-413b-a083-64305430aa95/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201215T122255Z&X-Amz-Expires=86400&X-Amz-Signature=307e991f474fb965f35bacbeb0a0cda861a7beaa4de9110169e8563ce8e32f14&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
          maxWidth="100%"
        />
      </FlexBox>

      <Notes>
        <p>
          Let&apos;s use our knowledge of <em>loops</em> to <code>log</code> the
          contents of some Arrays.
        </p>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox flexDirection="column" justifyContent="center" height="100%">
        <Heading margin="0px" fontSize="h2">
          Functions
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <UnorderedList>
        <ListItem>
          Save space and time - less code duplication. 1 line to run 🏃🏽‍♂️ many
          lines! 👍🏽
        </ListItem>

        <ListItem>
          more flexibility. We can define functions to be able to accept
          multiple arguments and and different data types and perform different
          tasks based on this.
        </ListItem>
      </UnorderedList>
      <Appear elementNum={0}>
        <FlexBox flexDirection="column">
          <Markdown>
            {`
              \`\`\`javascript
                function adder(x, y) {
	                return x + y;
                }

                const sum = adder(2, 3);
              \`\`\`
          `}
          </Markdown>
          <Image
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/54052879-12e9-477c-9689-a8f2b3f530d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201215T121719Z&X-Amz-Expires=86400&X-Amz-Signature=b7eb3cf4cfd958237db1326883684aedc7f8eed1489f8f8f115bf5463a12191a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"
            maxWidth="320px"
          />
        </FlexBox>
      </Appear>
      <Notes>
        <p>
          Let&apos;s explore how we can use <code>return</code> to avoid{" "}
          <code>else</code>s.
        </p>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox flexDirection="column" justifyContent="center" height="100%">
        <Heading margin="0px" fontSize="h2">
          Object Literals
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Markdown>
        {`
              \`\`\`javascript
                const me = ["Manav", 23];

                // Access an element by specifying its numerical INDEX (0-based) inside of '[]'.
                console.log(me[0]);
              \`\`\`
          `}
      </Markdown>

      <Notes>
        <p>What are some shortcomings of this approach? 🤔</p>
      </Notes>
    </Slide>
  </Deck>
)
