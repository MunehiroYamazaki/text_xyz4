"use client";
import React from "react";
import DummyNewsSection from "./dummy-news-section";
import FirstViewImageDisplay from "./first-view-image-display";

function MainComponent({ firstViewImgSrc, dummyNews }) {
  return (
    <div className="bg-[#fff0e6] font-serif">
      <header className="flex flex-col items-center p-4">
        <h1 className="text-4xl">テストカフェ</h1>
        <nav className="mt-4">
          <ul className="flex space-x-8">
            <li className="text-xl">HOME</li>
            <li className="text-xl">こだわり</li>
            <li className="text-xl">商品紹介</li>
            <li className="text-xl">ニュース</li>
            <li className="text-xl">店舗情報</li>
          </ul>
        </nav>
      </header>
      <main className="max-w-[1000px] mx-auto p-4 space-y-16">
        <section className="text-center">
          <FirstViewImageDisplay imgSrc={firstViewImgSrc} />
        </section>
        <section className="text-center">
          <h2 className="text-3xl mb-4">こだわり</h2>
          <p className="mb-4">テストカフェのこだわりの内容がここに入ります。</p>
          <a href="#" className="text-blue-500 underline">
            くわしくはこちら
          </a>
        </section>
        <section className="text-center">
          <h2 className="text-3xl mb-4">商品紹介</h2>
          <p className="mb-4">テストカフェの商品紹介がここに入ります。</p>
          <a href="#" className="text-blue-500 underline">
            くわしくはこちら
          </a>
        </section>
        <section className="text-center">
          <h2 className="text-3xl mb-4">ニュース</h2>
          <DummyNewsSection newsList={dummyNews} />
          <a href="#" className="text-blue-500 underline">
            くわしくはこちら
          </a>
        </section>
        <section className="text-center">
          <h2 className="text-3xl mb-4">店舗情報</h2>
          <p className="mb-4">テストカフェの店舗情報がここに入ります。</p>
          <a href="#" className="text-blue-500 underline">
            くわしくはこちら
          </a>
        </section>
      </main>
    </div>
  );
}

function StoryComponent() {
  const dummyNews = [
    "ニュース記事1の内容がここに入ります。",
    "ニュース記事2の内容がここに入ります。",
    "ニュース記事3の内容がここに入ります。",
  ];

  return (
    <div>
      <MainComponent
        firstViewImgSrc="https://ucarecdn.com/e4d11c1b-14af-4823-8b5a-a43fdfae5ca0/"
        dummyNews={dummyNews}
      />
    </div>
  );
}

export default MainComponent;