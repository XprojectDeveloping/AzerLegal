"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const ServiceForm = ({ formTranslate, formContactData, code }) => {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    number: "",
  });

  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "ad") {
      const cleaned = value.replace(/[^A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]/g, "");
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "soyad") {
      const cleaned = value.replace(/[^A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]/g, "");
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "number") {
      const cleaned = value.replace(/[^\+\d\s\-\(\)]/g, "");
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/${code}/servicehomepage`,
      data: form,
    })
      .then((response) => {
        if (response?.data?.message) {
          Swal.fire({
            icon: "success",
            title: formTranslate?.form_send_message,
            confirmButtonText: formTranslate?.exit,
          });
          setForm({
            ad: "",
            soyAd: "",
            number: "",
          });
        }
      })
      .catch(() => {
        Swal.fire(
          `${formTranslate?.error_message}`,
          `${formTranslate?.form_error_message}`,
          "error",
        );
      })
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col bg-[#D5BA8C] p-[4rem] rounded-[1rem]">
        <div className="mb-[2rem]">
          <h3 className="text-[2.4rem] text-[#FFFFFF] font-[600] mb-[2rem]">
            {formTranslate?.contact_page}
          </h3>
          <p className="text-[1.8rem] text-[#FFFFFF] font-[600]">
            {formTranslate?.contact_us}
          </p>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="ad"
            maxLength={30}
            minLength={2}
            pattern="[A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]+"
            placeholder={formTranslate?.name_fullname}
            id="ad"
            value={form.ad}
            onChange={handleChange}
            className="w-[406px] mb-[2rem] text-[1.4rem] font-[600] py-[1.3rem] px-[1.6rem] rounded-[0.4rem] outline-none placeholder:text-[#011E41]"
          />

          <input
            type="text"
            name="soyad"
            maxLength={30}
            pattern="[A-Za-zА-Яа-яЁёƏəĞğİiIıÖöÜüÇçŞş\s]+"
            id="soyad"
            value={form?.soyad}
            onChange={handleChange}
            placeholder={formTranslate?.form_surname}
            className="w-[406px] mb-[2rem] text-[1.4rem] font-[600] py-[1.3rem] px-[1.6rem] rounded-[0.4rem] outline-none placeholder:text-[#011E41]"
          />

          <input
            type="number"
            name="number"
            attern="[\+\d\s\-\(\)]+"
            maxLength={50}
            id="number"
            value={form?.number}
            onChange={handleChange}
            placeholder={formTranslate?.phone_number}
            className="w-[406px] mb-[2rem] text-[1.4rem] font-[600] py-[1.3rem] px-[1.6rem] rounded-[0.4rem] outline-none placeholder:text-[#011E41]"
          />
        </div>
        <button className="flex flex-row justify-center items-center gap-[1.2rem] w-full bg-[#011E41] py-[1.3rem] text-[#FFFFFF] text-[1.4rem] font-[500] transition rounded-[0.4rem] hover:bg-[#808080]">
          {loading ? formTranslate?.sending_form : formTranslate?.send_form}
          <Image
            width={24}
            height={24}
            src={"/img/homepage/form/form-button-arrow.svg"}
            alt={formTranslate?.xidmetler_page}
          />
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
