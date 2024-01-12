"use client"

import { FC } from "react";
import Breadcrumbs from "../components/BreadCrumbs";
import { useForm } from "react-hook-form";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = () => {};

  return (
    <div className=" w-[90%] lg:w-[60%] lg:p-12 mx-auto h-[49.5rem]">
      <div className="mt-10 md:mt-0">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: "Contact",
              href: "/contact",
              active: true,
            },
          ]}
        />
      </div>

      <h1 className="text-2xl mb-4 md:mb-6 text-white font-semibold md:text-3xl relative border-b border-zinc-600/40 pb-4 inline-flex gap-1 items-center tracking-tighter text-[clamp(2.5rem,5vw,3rem)] leading-none w-full">
        Let&apos;s build it together
      </h1>

      <div className="flex flex-col gap-2 rounded-md px-6 py-4 md:px-8 md:py-6 border-[1px] border-zinc-500/30 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
        <h3 className="mb-4 text-lg font-medium inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
          Send a message
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="w-full px-3 py-1 border rounded-md border-zinc-500/20 bg-transparent  transition-colors outline-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full px-3 py-1 border rounded-md  border-zinc-500/20  bg-transparent  transition-colors outline-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            />
          </div>
          <textarea name="msg" className="w-full px-3 py-1 border rounded-md border-zinc-500/20 bg-transparent transition-colors outline-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" placeholder="Any ideas/project to discuss" rows={12} />
          <button type="submit" className="flex justify-center items-center gap-2 rounded-md px-3 py-2 bg-[#333333] border border-zinc-500/10 hover:bg-white transition-colors duration-150 text-white hover:text-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full font-normal tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default page;
