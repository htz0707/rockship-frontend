"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import d3Tip from "d3-tip";
import style from "./GanttChart.module.scss";

export default function GanttChart({ data }) {
  const svgRef = useRef(null);
  let maxDays =
    Math.ceil(data.reduce((acc, current) => acc + current.days, 0) / 5) * 5 + 5;
  if (data.reduce((acc, current) => acc + current.days, 0) % 10 === 0) {
    maxDays += 5;
  }
  if (maxDays < 33) maxDays = 33;

  // Chart dimensions
  const width = 30 * maxDays;
  const height = data.length * 40 + 32; // Adjust the height to accommodate day labels and bars
  const barHeight = 30;
  const spacing = 10;
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.style("background-color", "#f9f9f9");

    // Create a d3-tip instance
    const tip = d3Tip()
      .attr("class", style["d3-tip"])
      .direction("s")
      .offset([10, 0]) // Adjust the offset to move the tooltip up
      .html((d) => {
        const tasksList = d.tasks
          .map(
            (task) =>
              `<div class=${style["task-item"]}><div>${task.name}</div><div>${task.days}</div></div>`
          )
          .join("");
        return `<div class=${style["d3-tip-container"]}><div class=${style["main-task-container"]}><div>${d.name}</div><div>${d.days} days</div></div><div class=${style["sub-task-container"]}>${tasksList}</div></div>`;
      });
    svg.call(tip);

    // Create scales
    let xScale = d3.scaleLinear().domain([0, maxDays]).range([0, width]);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Append day labels
    for (let day = 1; day <= maxDays; day++) {
      svg
        .append("text")
        .attr("x", xScale(day) - 15)
        .attr("y", 18) // Adjust the position based on your design
        .attr("text-anchor", "middle")
        .text(day)
        .style("fill", "#000")
        .style("font-size", 12)
        .style("font-weight", "bold");
    }

    const g1 = svg.append("g").attr("transform", `translate(0,26)`);
    g1.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", width)
      .attr("height", height - 20) // Adjust to exclude space for day labels
      .attr("fill", "#EBEBEB");

    // Draw day background lines
    for (let day = 0; day <= maxDays; day++) {
      g1.append("line")
        .attr("x1", xScale(day))
        .attr("x2", xScale(day))
        .attr("y1", 0)
        .attr("y2", height)
        .style("stroke", "#fff")
        .style("stroke-width", 1);
    }

    // Create a group for each data point
    const barGroups = g1
      .selectAll(".bar-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "bar-group")
      .attr(
        "transform",
        (d, i) => `translate(0, ${i * (barHeight + spacing) + 5})`
      )
      .on("mouseover", function (event, d) {
        d3.select(this).selectAll(".bar").style("stroke", "#0094FF");
        tip.show(d, this); // Pass the data and the DOM element to tip.show()
      })
      .on("mouseout", function () {
        d3.select(this).selectAll(".bar").style("stroke", null);
        tip.hide();
      });

    // Append bars, labels, and tags within each group
    barGroups
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.start))
      .attr("width", (d) => xScale(d.days))
      .attr("height", barHeight)
      .attr("fill", "#fff")
      .attr("rx", 4)
      .attr("ry", 4);

    barGroups
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => xScale(d.start) + 12 + xScale(d.days))
      .attr("y", barHeight / 2 + 2)
      .attr("alignment-baseline", "middle")
      .style("font-size", 12)
      .text((d) => d.name);

    // barGroups
    //   .append("rect")
    //   .attr("class", "label-box")
    //   .attr("x", (d) => xScale(d.start))
    //   .attr("width", (d) => {
    //     const textWidth = d.name.length * 7;
    //     return textWidth > xScale(d.days) ? textWidth + 14 : xScale(d.days);
    //   })
    //   .attr("height", barHeight - 2)
    //   .style("stroke", (d) => {
    //     const textWidth = d.name.length * 7;
    //     return textWidth > xScale(d.days) ? "black" : null;
    //   })
    //   .style("stroke-dasharray", "3")
    //   .style("fill", "none");

    barGroups
      .append("rect")
      .attr("class", "tag")
      .attr("x", (d) => xScale(d.start) + 5)
      .attr("y", 3)
      .attr("width", 3)
      .attr("height", barHeight - 6)
      .attr("fill", (d, i) => colorScale(i))
      .attr("rx", 2)
      .attr("ry", 2);
  }, [data, height, maxDays, width]);

  return <svg ref={svgRef} width={width} height={height} />;
}
