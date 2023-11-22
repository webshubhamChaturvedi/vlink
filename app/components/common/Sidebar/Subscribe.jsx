import API_ENDPOINTS from 'app/helpers/apiEndpoint';
import REQUEST from 'app/helpers/http.service';
import { useState } from 'react';
import Card from '../Card'
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export default function Subscribe() {
  const [email, setEmail] = useState(true);
  const Schema = yup.object().shape({
    country: yup.string().required(),
    email: yup.string().email().required("Email is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email: "",
      country: "",
    },
  });
  const toast = useSelector((state) => state?.toast);
  const isValidEmail = (email) =>
    setEmail(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );
  const SubmitHandler = async (data) =>{
    if(email){
    try {
        
      const formData = {
        ...data
      };
      const res = await REQUEST({
      method: "POST",
      url: API_ENDPOINTS.SAVE_SUBSCRIBE,
      data:{ data: formData},
    });
    if (res?.status === 200) {
      toast.success("Submitted successfully");
      reset();
    } else toast.error(res?.data?.error?.message);
  } catch (err) {
    toast.error("failed");
  }
}
}

  return (
    <Card blue={true} containerClass={"shadow-sm overflow-hidden"}>
      <div className="mb-8">
        <h2 className="text-[#000]">Subscribe for Updates</h2>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit(SubmitHandler)}>
        <input
        {...register("email")}
          placeholder="Email"
          name="email"
          type="email"
          className="!bg-white !rounded-[6px] w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem] text-[#000]"
          onChange={(e) => {
            isValidEmail(e.target.value);
          }}
        />
         {errors.email && (
                  <span className="mt-2 font-normal text-sm text-red-700">
                    {errors.email?.message}
                  </span>
                )}
                {!email && (
                  <span className="mt-2 font-normal text-sm text-red-700">
                    {"email must be a valid email"}
                  </span>
                )}
        <select name="country" className="!bg-white !rounded-[6px] w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
        {...register("country")}
        >
          <option selected hidden value="">
            Select Country
          </option>

          <option value="usa"
          >USA</option>

          <option 
          value="india"
          >INDIA</option>

          <option 
          value="uk"
          >UK</option>

        </select>
        {errors.country && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      This field is required
                    </span>
                  )}
        <div className="!mb-4 !mt-8">
          <button className="bg-company text-white text-lg w-full" type='submit'>
            SUBSCRIBE
          </button>
        </div>
      </form>
    </Card>
  )
}
