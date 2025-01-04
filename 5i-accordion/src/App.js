// Import React's useState hook to manage component state
import { useState } from "react";
// Import external CSS styles
import "./style.css";

// Array of FAQ objects, each with a title and corresponding text
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

// Main App component
export default function App() {
  return (
    <div>
      {/* Render the Accordion component and pass the faqs array as data */}
      <Accordion data={faqs} />
    </div>
  );
}

// Accordion component to render a list of collapsible items
function Accordion({ data }) {
  // State to track which item is currently open (null means none are open)
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {/* Iterate through the FAQ data array to create AccordionItem components */}
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen} // Current open item number
          onOpen={setCurOpen} // Function to update the open item
          title={el.title} // Title of the current FAQ
          num={i} // Index number of the current FAQ
          key={el.title} // Unique key for the FAQ
        >
          {/* Content to display when the item is open */}
          {el.text}
        </AccordionItem>
      ))}

      {/* Additional hardcoded AccordionItem for demonstration purposes */}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

// AccordionItem component to represent each individual item in the Accordion
function AccordionItem({ num, title, curOpen, onOpen, children }) {
  // Check if this item is currently open
  const isOpen = num === curOpen;

  // Toggle the open state of the item
  function handleToggle() {
    // If this item is open, close it; otherwise, open it
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      // Apply "open" class if the item is open for conditional styling
      className={`item ${isOpen ? "open" : ""}`}
      // Set up click handler to toggle open state
      onClick={handleToggle}
    >
      {/* Display the item number (formatting single-digit numbers with leading zeros) */}
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      {/* Display the title of the item */}
      <p className="title">{title}</p>
      {/* Show "+" or "-" depending on whether the item is open */}
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {/* Conditionally render the item's content if it is open */}
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
