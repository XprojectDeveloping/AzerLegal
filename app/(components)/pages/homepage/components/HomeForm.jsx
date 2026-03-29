"use client";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DropDownInput from "./DropDownInput";
import Image from "next/image";
const HomeForm = ({ formTranslate, formContactData, code }) => {
  const [form, setForm] = useState({
    ad: "",
    number: "",
    service_id: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === `number`) {
      const newValue = value.replace(/[^0-9]/g, "");
      setForm({
        ...form,
        [name]: newValue,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleDropSelect = (selectedValue) => {
    setForm((prevForm) => ({
      ...prevForm,
      service_id: parseInt(selectedValue, 10),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
            service_id: "",
            ad: "",
            number: "",
          });
          setLoading(false);
        }
      })
      .catch(() => {
        Swal.fire(
          `${formTranslate?.error_message}`,
          `${formTranslate?.form_error_message}`,
          "error",
        );
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          type="text"
          name="ad"
          placeholder={formTranslate?.name_fullname}
          id="ad"
          value={form.ad}
          onChange={handleChange}
          className="w-full text-[1.4rem] font-[400] border-[1px] border-[#BFC8CA] rounded-[0.4rem] outline-none py-[1.4rem] pl-[2rem] placeholder:text-[#011E41] mb-[1.6rem]"
        />
        <input
          type="text"
          name="number"
          id="number"
          value={form.number}
          onChange={handleChange}
          placeholder={formTranslate?.phone_number}
          className="w-full text-[1.4rem] font-[400] border-[1px] border-[#BFC8CA] rounded-[0.4rem] outline-none py-[1.4rem] pl-[2rem] placeholder:text-[#011E41]"
        />

        <DropDownInput
          categoriesData={formContactData}
          select_services={formTranslate?.select_services}
          onCategorySelect={handleDropSelect}
        />

        <button className="flex flex-row justify-center items-center gap-[1.2rem] mt-[4rem] w-full bg-[#011E41] py-[1.3rem] text-[#FFFFFF] text-[1.4rem] font-[500] transition hover:bg-[#808080]">
          {loading ? formTranslate?.sending_form : formTranslate?.send_form}
          <Image
            width={24}
            height={24}
            src={"/img/homepage/form/form-button-arrow.svg"}
            alt="form-button"
          />
        </button>
      </div>
    </form>
  );
};

export default HomeForm;
