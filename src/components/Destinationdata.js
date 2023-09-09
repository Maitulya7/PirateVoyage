import { Component } from "react";
import "./Destinationstyle.css";

class DestinationDate extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>
            {" "}
            <i class="fa-solid fa-arrow-right"></i> {this.props.heading}
          </h2>
          <p>{this.props.text}</p>
        </div>

        <div className="images">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationDate;
