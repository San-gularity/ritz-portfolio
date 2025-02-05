"use client";
import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

function Graph() {
    const svgRef = useRef();
    const [data, setData] = useState(generateData());

    // Function to generate random data
    function generateData() {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({ x: i, y: Math.random() * 10 });
        }
        return data;
    }

    // Function to update data and animate the chart
    function updateData() {
        setData(generateData());
    }

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Define the scales for x and y axes
        const xScale = d3.scaleLinear().domain([0, 9]).range([0, 300]);
        const yScale = d3.scaleLinear().domain([0, 10]).range([200, 0]);

        // Define the line generator
        const line = d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y));

        // Create the initial line path
        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line)
            .style("stroke", "blue")
            .style("stroke-width", 2)
            .style("fill", "none");

        // Update the line path with animation when data changes
        svg.select(".line")
            .datum(data)
            .transition()
            .duration(1000)
            .attr("d", line);

    }, [data]);

    return (
        <div name="hero" className=" w-full h-screen bg-[#0a192f]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
                <svg ref={svgRef} width={400} height={250}></svg>
                <button onClick={updateData} className="">Update Data</button>
            </div>
        </div>
    );
}

export default Graph;
