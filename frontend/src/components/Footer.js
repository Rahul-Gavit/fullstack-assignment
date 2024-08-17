import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black">
      <div className="grid grid-cols-1  sm:grid-cols-4 xl:grid-cols-5 text-white">
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold mt-4 ml-4">Abstract</h1>
          <ul className="mt-4 ml-4">
            <li className="text-sm">Branches</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold mt-4 ml-4">Resources</h1>
          <ul className="mt-4 ml-4">
            <li className="text-sm">Blog</li>
            <li className="text-sm">Help Center</li>
            <li className="text-sm">Related Notes</li>
            <li className="text-sm">Status</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold mt-4 ml-4">Community</h1>
          <ul className="mt-4 ml-4">
            <li className="text-sm">Twitter</li>
            <li className="text-sm">LinkedIn</li>
            <li className="text-sm">Facebook</li>
            <li className="text-sm">Dribble</li>
            <li className="text-sm">Podcast</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold mt-4 ml-4">Company</h1>
          <ul className="mt-4 ml-4">
            <li className="text-sm">About Us</li>
            <li className="text-sm">Careers</li>
            <li className="text-sm">Legal</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-semibold mt-4 ml-4">Contact Us</h1>
          <ul className="mt-4 ml-4">
            <li className="text-sm">info@abstract.com</li>
          </ul>
        </div>
      </div>
      <div className="text-white flex justify-between px-4 py-4 bg-black opacity-60">
        <span>@ Copyright 2024</span>
        <span>Abstract Studio Design, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
