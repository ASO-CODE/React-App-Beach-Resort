import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, perspiciatis!",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, perspiciatis!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, perspiciatis!",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, perspiciatis!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <article className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{ item.info}</p>
              </article>
            );
          })}
        </article>
      </section>
    );
  }
}
