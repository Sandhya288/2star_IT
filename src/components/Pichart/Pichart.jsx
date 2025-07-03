import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Label } from "recharts";
import "./Pichart.css";

class PieRechartComponent extends React.Component {
   COLORS = ["#8884d8", "#82ca9d", "#FF8042", "#FF8042", "#AF19FF"];
   pieData = [
      {
         name: "SOFTWARE",
         
         description: "•Web Application: •App Development: •SEO: •Desktop Softwares: •Digital Marketing"
      },
      {
         name: "HARDWARE",
        
         description: "•PC/LAPTOP Repair: •Brand new laptop & Systems: •Republished laptop/Systems: •CCTV Networking, Installation & Services: •Printer, scanner Toners: •Brand new Tabs"
      },
      {
         name: "INTENSHIP",
         
         description: "•Full Stack Web Development: •Website Design: •Photo & Video Editing Course: •Artificial Intelligence & Machine learning: •Tally and GST: •Brainstorm Education(AGE 5-15): •Basic Computer Course"
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

      return (
         <div className="container">
            <div className="pie-chart">
               <PieChart width={Math.min(700, window.innerWidth * 0.9)} height={Math.min(900, window.innerHeight * 0.8)}>
                  <Pie
                     data={this.pieData}
                     color="#000000"
                    
                     nameKey="name"
                     cx="50%"
                     cy="50%"
                     outerRadius={150}
                     fill="#8884d8"
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
                     {activeIndex !== null && (
                        <Label 
                           key={`label-${activeIndex}`} 
                           content={this.pieData[activeIndex].description} 
                           position="outside" 
                           fill="#fff" 
                           style={{ fontSize: "20px" }}
                        />
                     )}
                  </Pie>
                  <Tooltip />
                  <Legend />
               </PieChart>
            </div>
            <div className="description">
               {activeIndex !== null && (
                  <div>
                     <h3 className="heading">{this.pieData[activeIndex].name}</h3>
                     {this.pieData[activeIndex].description.split(":").map((part, index) => (
                        <p key={index} className="description-line">{part}</p>
                     ))}
                  </div>
               )}
            </div>
         </div>
      );
   }
}

export default PieRechartComponent;
