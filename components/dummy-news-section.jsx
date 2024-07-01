"use client";
import React from "react";

function DummyNewsSection({ newsList }) {
  return (
    <ul className="max-w-[650px] space-y-4 mb-4">
     
    </ul>
  );
}

function DummyNewsSectionStory() {
  const dummyNews = [
    "ニュース記事1の内容がここにきます。",
    "ニュース記事2の内容がここにきます。",
    "ニュース記事3の内容がここにきます。",
  ];

  return (
    <div>
      <DummyNewsSection newsList={dummyNews} />
    </div>
  );
}

export default DummyNewsSection;