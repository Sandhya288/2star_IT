import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./Pichart.css";

class PieRechartComponent extends React.Component {
   COLORS = ["#8884d8", "#82ca9d", "#FF8042"];

   pieData = [
      {
         name: "SOFTWARE",
         description: "• Web Application: • App Development: • SEO: • Desktop Softwares: • Digital Marketing"
      },
      {
         name: "HARDWARE",
         description: "• PC/LAPTOP Repair: • Brand new laptop & Systems: • Republished laptop/Systems: • CCTV Networking, Installation & Services: • Printer, Scanner Toners: • Brand new Tabs"
      },
      {
         name: "INTENSHIP",
         description: "• Full Stack Web Development: • Website Design: • Photo & Video Editing Course: • Artificial Intelligence & Machine Learning: • Tally and GST: • Brainstorm Education (AGE 5-15): • Basic Computer Course"
      }
   ];

   state = {
      activeIndex: null
   };

   handleMouseEnter = (_, index) => {
      this.setState({ activeIndex: index });
   };

   handleMouseLeave = () => {
      this.setState({ activeIndex: null });
   };

   render() {
      const { activeIndex } = this.state;
      const pieDataWithValue = this.pieData.map(item => ({ ...item, value: 1 }));

      return (
         <div className="container">
            <div className="pie-chart">
               <PieChart width={Math.min(700, window.innerWidth * 0.9)} height={400}>
                  <Pie
                     data={pieDataWithValue}
                     dataKey="value"
                     nameKey="name"
                     cx="50%"
                     cy="50%"
                     outerRadius={150}
                     labelLine={false}
                     onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}
                  >
                     {this.pieData.map((entry, index) => (
                        <Cell
                           key={`cell-${index}`}
                           fill={this.COLORS[index % this.COLORS.length]}
                           className={activeIndex === index ? "custom-pie-cell" : ""}
                        />
                     ))}
                  </Pie>
                  <Tooltip
                     contentStyle={{ display: "none" }} // hides tooltip popup
                  />
                  <Legend />
               </PieChart>
            </div>
            <div className="description">
               {activeIndex !== null && (
                  <div>
                     <h3 className="heading">{this.pieData[activeIndex].name}</h3>
                     {this.pieData[activeIndex].description
                        .split(":")
                        .filter(Boolean)
                        .map((line, i) => (
                           <p key={i} className="description-line">• {line.trim()}</p>
                        ))}
                  </div>
               )}
            </div>
         </div>
      );
   }
}

export default PieRechartComponent;
