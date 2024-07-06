import React from "react"
import { Component } from "react"

const ThemeContext = React.createContext(null)

class Card extends Component {
  static contextType = ThemeContext
  render() {
    const theme = this.context
    const className =
      theme === "dark"
        ? "flex flex-col rounded-xl flex-wrap bg-gray-800 text-white h-full w-full"
        : "flex flex-col rounded-xl flex-wrap bg-gray-200 text-black h-full w-2/5";
    return (
      <div className="flex justify-center items-center m-2">
        <div className={className}>
          <div className="p-2 justify-center flex items-center flex-col">
            <h1 className="text-2xl font-semibold mt-1">{this.props.name}
            </h1>
            <p className="text-base text-neutral-400 font-bold text-center mt-2">{this.props.descri}</p>
            <img
              src={this.props.img}
              alt={this.props.img}
              className="w-60 rounded h-auto mt-4"
            />
          </div>
        </div>
      </div>
    );
  }
}

const Tarjeta = (props) => {
  return (
    <ThemeContext.Provider value="dark">
      <Card name={props.name} img={props.img} descri={props.descri} />
    </ThemeContext.Provider>
  );
}

export default Tarjeta