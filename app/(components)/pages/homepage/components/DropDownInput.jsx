// DropdownInput.jsx

"use client";

import { useEffect, useRef, useState } from "react";

const DropdownInput = ({
  categoriesData,
  onCategorySelect, // Bu prop artık HomeForm'dan geliyor
  placeholder,
  select_services,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const dropdownListRef = useRef(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    if (dropdownOpen && dropdownListRef.current) {
      setContentHeight(dropdownListRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [dropdownOpen, categoriesData]);

  // --- DEĞİŞİKLİK BURADA ---
  // Artık sadece id değil, tüm kategori objesini alıyoruz
  const handleSelectInternal = (category) => {
    // 1. İç state'i güncelle (görsel olarak seçili kalması için)
    setSelectedCategoryId(category.id);

    // 2. Üst component'e seçilen 'title'ı bildir
    if (onCategorySelect) {
      // prop olarak gelen fonksiyonu, seçilen kategorinin başlığı ile çağır
      onCategorySelect(category.id);
    }

    // 3. Dropdown'ı kapat
    setDropdownOpen(false);
  };

  const currentSelection = categoriesData?.find(
    (cur) => cur?.id === selectedCategoryId,
  );

  const displayText = currentSelection
    ? currentSelection.title
    : placeholder || select_services;

  return (
    <div className="relative w-full">
      <div
        className="w-full cursor-pointer rounded-md flex justify-between items-center mt-[16px] placeholder:text-[--blue] text-[--blue] border border-[#bfc8ca]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
        aria-controls="doctors-dropdown-list"
      >
        <h2 className="text-[1.4rem] px-[20px] py-[14px] ">{displayText}</h2>
        <span>
          <img
            src="/img/homepage/form/form-arrow.svg"
            alt="dropdown arrow"
            className={`transition-transform mr-14 duration-300 ease-in-out ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </div>
      <ul
        id="doctors-dropdown-list"
        ref={dropdownListRef}
        style={{
          maxHeight: dropdownOpen ? `${contentHeight}px` : "0px",
        }}
        className={`absolute top-[calc(100%_+_3px)] left-0 right-0 w-full 
                 bg-white border z-[400] rounded-lg shadow-lg
                 overflow-y-scroll transition-all duration-300 ease-in-out h-[400px]
                 ${
                   dropdownOpen
                     ? "opacity-100"
                     : "opacity-0 pointer-events-none"
                 }`}
      >
        {categoriesData &&
          categoriesData?.map((cur) => (
            <li
              key={cur.id === null ? "all-categories" : cur.id}
              className={`px-4 py-2 transition-colors duration-150 ease-in-out hover:bg-[--orange] cursor-pointer
                        ${
                          selectedCategoryId === cur.id
                            ? "bg-[--orange] font-bold text-white"
                            : ""
                        }`}
              onClick={() => handleSelectInternal(cur)}
              role="option"
              aria-selected={selectedCategoryId === cur.id}
            >
              <h2 className="text-[1.4rem] px-[20px] py-[14px] hover:bg-[#011E41] hover:text-[#ffffff]">
                {cur.title}
              </h2>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropdownInput;
