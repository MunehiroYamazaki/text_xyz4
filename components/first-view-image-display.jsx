"use client";
import React from "react";

function FirstViewImageDisplay({ imgSrc }) {
  return (
    <div>
      <img
        src={imgSrc}
        alt="ファーストビュー画像"
        className="w-full h-auto mb-4"
      />
    </div>
  );
}

function FirstViewImageDisplayStory() {
  return (
    <div>
      <FirstViewImageDisplay imgSrc="https://ucarecdn.com/e4d11c1b-14af-4823-8b5a-a43fdfae5ca0/" />
      <FirstViewImageDisplay imgSrc="relative/path/to/another-image.jpg" />
    </div>
  );
}

export default FirstViewImageDisplay;