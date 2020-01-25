import React, { Component } from "react";
import ReactDOM from "react-dom";
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      sizes: ["tiny", "small", "medium", "large", "huge"],
      colors: [
        "navy",
        "blue",
        "aqua",
        "teal",
        "olive",
        "green",
        "lime",
        "yellow",
        "orange",
        "red",
        "maroon",
        "fuchsia",
        "purple",
        "silver",
        "gray",
        "black"
      ],
      fruits: [
        "apple",
        "banana",
        "watermelon",
        "orange",
        "peach",
        "tangerine",
        "pear",
        "kiwi",
        "mango",
        "pineapple"
      ],
      items: [],
      selectedItems: []
    };
  }

  handleChange(selectedItems, items) {
    this.setState({ selectedItems, items });
  }

  render() {
    const { sizes, colors, fruits, selectedItems } = this.state;
    let { items } = this.state;

    items = sizes.reduce(
      (items, size, sizeindex) => [
        ...items,
        ...fruits.reduce(
          (acc, fruit, fruitindex) => [
            ...acc,
            ...colors.reduce(
              (acc, color, colorindex) => [
                ...acc,
                {
                  id: `${sizeindex}-${fruitindex}-${colorindex}`,
                  label: `${size} ${color} ${fruit}`
                }
              ],
              []
            )
          ],
          []
        )
      ],
      []
    );

    return (
      <MultiSelect
        items={items}
        selectedItems={selectedItems}
        onChange={this.handleChange}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
