"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Abhishek Namdeo Thote</div>

        <div className="mt-3 md:mt-0 flex items-center gap-4">
          <a
            href="/mnt/data/a231198b-2151-4ed8-a737-00bb7f047895.pdf"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Download Resume
          </a>
          <span>•</span>
          <a href="mailto:abhishekthote8446@gmail.com" className="underline">
            abhishekthote8446@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
