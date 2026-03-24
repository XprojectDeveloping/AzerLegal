"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const VISIBLE = 4;

const Carousel = ({ items = [], autoPlay = true, interval = 2000 }) => {
  const clones = items.slice(0, VISIBLE);
  const extendedItems = [...items, ...clones];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animated, setAnimated] = useState(true);

  const goNext = useCallback(() => {
    setAnimated(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (currentIndex >= items.length) {
      const jump = setTimeout(() => {
        setAnimated(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(jump);
    }
  }, [currentIndex, items.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(goNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goNext]);

  const dragStart = useRef(null);
  const [dragDelta, setDragDelta] = useState(0);
  const isDragging = dragStart.current !== null;

  const onMouseDown = (e) => {
    dragStart.current = e.clientX;
    setDragDelta(0);
  };

  const onMouseMove = (e) => {
    if (dragStart.current === null) return;
    setDragDelta(e.clientX - dragStart.current);
  };

  const onMouseUp = () => {
    if (dragStart.current === null) return;

    const THRESHOLD = 50;

    if (dragDelta < -THRESHOLD) {
      goNext();
    } else if (dragDelta > THRESHOLD) {
      setAnimated(true);
      setCurrentIndex((prev) => (prev <= 0 ? items.length - 1 : prev - 1));
    }

    dragStart.current = null;
    setDragDelta(0);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      dragStart.current = null;
      setDragDelta(0);
    }
  };

  if (items.length === 0) return null;

  const cardWidth = 100 / VISIBLE;
  const indexOffset = currentIndex * cardWidth;
  const dragOffset =
    typeof window !== "undefined" ? (dragDelta / window.innerWidth) * 100 : 0;
  const translateX = indexOffset - dragOffset;

  return (
    <div
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      style={{ userSelect: "none" }}
    >
      <div
        className="flex gap-[2.4rem]"
        style={{
          transform: `translateX(-${translateX}%)`,
          transition:
            animated && !isDragging ? "transform 500ms ease-in-out" : "none",
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item?.id}-${index}`}
            className="flex-shrink-0 px-2 bg-[#F4F6F6] py-[2.4rem]"
            style={{ width: `${cardWidth}%` }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                fill
                alt="partner-img"
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
                className="object-contain"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
