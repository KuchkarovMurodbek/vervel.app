import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../public/assets/png/Rectangle 774.png";
import image2 from "../public/assets/png/Rectangle 774 (1).png";
import image3 from "../public/assets/png/Rectangle 774 (2).png";
import image4 from "../public/assets/png/Rectangle 774 (3).png";
import image5 from "../public/assets/png/Rectangle 774 (4).png";
import Girl from "../public/assets/png/Group 1000000788.png";
import { Chart } from "./Chart";
import { BsChevronCompactDown } from "react-icons/bs";

const style = { height: "270px" };

function Content() {
  const thirdColData = [
    {
      title: "Top 10",
      subTitle: "Position in dribbble",
      text: "20% Increase from Last Week",
      color: "rgba(255, 240, 230, 1)",
    },
    {
      title: "26",
      subTitle: "New employees onboarded",
      text: "15% Increase from Last Month",
      color: "rgba(236, 234, 254, 1)",
    },
    {
      title: "500",
      subTitle: "New Clients Approached",
      text: "5% Increase from Last Week",
      color: "rgba(229, 247, 255, 1)",
    },
  ];
  const fiveColData = [
    {
      title: "Ellie joined team developers",
      text: "04 April, 2021 | 04:00 PM",
      src: image1,
    },
    {
      title: "Jenny joined team HR",
      text: "04 April, 2021 | 04:00 PM",
      src: image2,
    },
    {
      title: "Adam got employee of the month",
      text: "03 April, 2021 | 02:00 PM",
      src: image3,
    },
    {
      title: "Robert joined team design",
      text: "02 April, 2021 | 01:00 PM",
      src: image4,
    },
    {
      title: "Jack joined team design",
      text: "01 April, 2021 | 03:00 PM",
      src: image5,
    },
  ];
  return (
    <>
      <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-4 md:grid md:grid-cols-2 md:grid-rows-2 sm:grid sm:grid-cols-1 sm:grid-rows-1">
        <div
          style={style}
          className="text-white border-2 rounded-md border-slate-200"
        >
          <h4 className="mt-4 ml-2 text-gray-900">Teams Strength</h4>
          <div
            className="flex items-end justify-around"
            style={{ height: "110px" }}
          >
            <div
              className="rounded-t-md"
              style={{
                position: "relative",
                background: "rgba(250, 190, 122, 1)",
                width: "23%",
                height: "20%",
              }}
            >
              <span
                style={{
                  color: "#828282",
                  position: "absolute",
                  left: "50%",
                  top: "-20px",
                  transform: "translateX(-50%)",
                }}
              >
                1
              </span>
            </div>
            <div
              className="rounded-t-md"
              style={{
                position: "relative",
                background: "rgba(246, 134, 106, 1)",
                width: "23%",
                height: "60%",
              }}
            >
              <span
                style={{
                  color: "#828282",
                  position: "absolute",
                  left: "50%",
                  top: "-20px",
                  transform: "translateX(-50%)",
                }}
              >
                5
              </span>
            </div>
            <div
              className="rounded-t-md"
              style={{
                position: "relative",
                background: "rgba(89, 230, 246, 1)",
                width: "23%",
                height: "40%",
              }}
            >
              <span
                style={{
                  color: "#828282",
                  position: "absolute",
                  left: "50%",
                  top: "-20px",
                  transform: "translateX(-50%)",
                }}
              >
                3
              </span>
            </div>
            <div
              className="rounded-t-md"
              style={{
                position: "relative",
                background: "rgba(118, 97, 226, 1)",
                width: "23%",
                height: "80%",
              }}
            >
              <span
                style={{
                  color: "#828282",
                  position: "absolute",
                  left: "50%",
                  top: "-20px",
                  transform: "translateX(-50%)",
                }}
              >
                10
              </span>
            </div>
          </div>
          <div className="flex items-end justify-around">
            <div
              style={{ width: "23%", textAlign: "center", color: "#828282" }}
            >
              a
            </div>
            <div
              style={{ width: "23%", textAlign: "center", color: "#828282" }}
            >
              b
            </div>
            <div
              style={{ width: "23%", textAlign: "center", color: "#828282" }}
            >
              c
            </div>
            <div
              style={{ width: "23%", textAlign: "center", color: "#828282" }}
            >
              d
            </div>
          </div>
          <div className="flex flex-wrap mt-2 ml-2">
            <div className="flex items-center mt-2" style={{ width: "50%" }}>
              <div
                className="flex items-center justify-center w-6 h-6 rounded-md "
                style={{ background: "rgba(250, 190, 122, 1)" }}
              >
                a
              </div>
              <h4
                style={{
                  margin: "0 2px 4px",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Marketing
              </h4>
            </div>
            <div className="flex items-center mt-2" style={{ width: "50%" }}>
              <div
                className="flex items-center justify-center w-6 h-6 rounded-md "
                style={{ background: "rgba(246, 134, 106, 1)" }}
              >
                b
              </div>
              <h4
                style={{ margin: "0 4px", color: "#828282", fontSize: "14px" }}
              >
                HR
              </h4>
            </div>
            <div className="flex items-center mt-2" style={{ width: "50%" }}>
              <div
                className="flex items-center justify-center w-6 h-6 rounded-md "
                style={{ background: "rgba(89, 230, 246, 1)" }}
              >
                c
              </div>
              <h4
                style={{ margin: "0 4px", color: "#828282", fontSize: "14px" }}
              >
                Developers
              </h4>
            </div>
            <div className="flex items-center mt-2" style={{ width: "50%" }}>
              <div
                className="flex items-center justify-center w-6 h-6 rounded-md "
                style={{ background: "rgba(118, 97, 226, 1)" }}
              >
                d
              </div>
              <h4
                style={{ margin: "0 4px", color: "#828282", fontSize: "14px" }}
              >
                Design
              </h4>
            </div>
          </div>
        </div>
        <div
          style={style}
          className="text-white border-2 rounded-md border-slate-200"
        >
          <div className="flex items-center justify-between px-3 mt-4">
            <h4 className="text-gray-900 " style={{ margin: "0" }}>
              Employees
            </h4>
            <h6
              className="flex items-center"
              style={{ color: "#787486", fontSize: "12px", margin: "0" }}
            >
              Aug 25-Sept 25 <BsChevronCompactDown />
            </h6>
          </div>
          <div className="flex justify-between p-4">
            <div
              className="flex flex-col justify-evenly"
              style={{ width: "210px", height: "210px" }}
            >
              <div>
                <p
                  style={{ color: "#787486", margin: "0" }}
                  className="flex items-center"
                >
                  <div
                    className="mr-1"
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "#6956E5",
                      borderRadius: "50%",
                    }}
                  ></div>{" "}
                  Inactive
                </p>
                <h6>254</h6>
              </div>
              <div>
                <p style={{ color: "#787486", margin: "0" }}
                className='flex items-center'>
                  <div
                    className="mr-1"
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "#FB896B",
                      borderRadius: "50%",
                    }}
                  ></div>
                  Active
                </p>
                <h6>3000</h6>
              </div>
              <div>
                <p style={{ color: "#787486", margin: "0" }}
                className='flex items-center'>
                  <div
                    className="mr-1"
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "#F8C07F",
                      borderRadius: "50%",
                    }}
                  ></div>
                  Total
                </p>
                <h6>324</h6>
              </div>
            </div>
            <div style={{ width: "270px", height: "270px" }}>
              <Image src={Girl} alt="girl" />
            </div>
          </div>
        </div>

        <div style={style} className=" md:col-span-2 lg:col-span-1">
          {thirdColData.map((item, index) => (
            <div
              key={index}
              style={{
                background: `${item.color}`,
                borderRadius: "10px",
                width: "90%",
                height: "30%",
                margin: "7px auto",
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  margin: "2px 0 0 0 ",
                  fontSize: "19px",
                  fontWeight: "700",
                }}
              >
                {item.title}
              </h4>
              <p style={{ margin: "0", color: "rgba(0, 0, 0, 1)" }}>
                {item.subTitle}
              </p>
              <span
                style={{ color: "rgba(120, 116, 134, 1)", fontSize: "12px" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-5 sm:grid sm:grid-cols-1 sm:mt-5">
        <div style={{ height: "360px" }} className="col-span-2 ">
          <Chart />
        </div>
        <div style={{ height: "360px" }}>
          <div
            className="flex items-center justify-between"
            style={{ width: "90%", margin: "0 auto" }}
          >
            <h4 style={{ color: "#23262F", fontSize: "18px" }}>
              Notifications
            </h4>
            <h6 style={{ color: "rgba(105, 86, 229, 1)", fontSize: "14px" }}>
              View All
            </h6>
          </div>
          {fiveColData.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-3"
              style={{
                width: "90%",
                margin: "0 auto",
                background: "rgba(249, 249, 249, 1)",
                height: "15%",
                marginTop: "7px",
                borderRadius: "10px",
              }}
            >
              <Image src={item.src} alt={item.text} />
              <div style={{ marginLeft: "14px" }}>
                <h5 style={{ margin: "0", color: "#23262F", fontSize: "12px" }}>
                  {item.title}
                </h5>
                <p
                  style={{
                    margin: "0",
                    color: "rgba(112, 128, 153, 1)",
                    fontSize: "12px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Content;
