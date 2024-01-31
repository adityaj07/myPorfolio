"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Breadcrumbs from "../components/BreadCrumbs";
import { useForm } from "react-hook-form";
import { contactFormSchema, TContactFormSchema } from "../lib/types";
import { sendEmail } from "../utils/sendEmail";
import toast, { Toaster } from "react-hot-toast";
import SocialBadge from "../components/ui/SocialBadge";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: TContactFormSchema) => {
    const resData = await sendEmail(data);

    if (resData.success) {
      reset();
      toast.success(`${resData.message}. Thanks for reaching out!`, {
        style: {
          background: "black",
          border: "1px solid #2F2F32",
          padding: "16px",
          color: "white",
        },
      });
    } else {
      toast.error(resData.message, {
        style: {
          background: "black",
          border: "1px solid #2F2F32",
          padding: "16px",
          color: "white",
        },
      });
    }

    if (resData.errors) {
      const errors = resData.errors;
      if (errors.name) {
        setError("name", {
          type: "server",
          message: errors.name,
        });
      } else if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.message) {
        setError("message", {
          type: "server",
          message: errors.message,
        });
      } else {
        alert("something went wrong");
      }
    }
  };

  return (
    <motion.div
      className=" w-[90%] lg:w-[60%] lg:p-12 mx-auto mb-24 md:mb-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Toaster position="bottom-center" />
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

      <h1 className="text-2xl mb-4 md:mb-6 text-white font-semibold md:text-3xl relative border-b border-zinc-600/40 pb-4 inline-flex flex-col gap-1  tracking-tighter text-[clamp(2.5rem,5vw,3rem)] leading-none w-full">
        Let&apos;s build it together
        <small className=""></small>
      </h1>

      <div className="flex flex-col gap-3 ">
        <SocialBadge
          name="WhatsApp"
          icon={<FaWhatsapp className="w-5 h-5" />}
          link={`https://wa.me/${process.env.MY_NUM}?text=Hello%21%20I%27d%20love%20to%20connect%20and%20discuss%20a%20potential%20collaboration%2Fproject.%20Looking%20forward%20to%20hearing%20from%20you%21`}
          className="bg-[#24D367] hover:text-[#103829] duration-150"
        />
      </div>

      <div className="mt-6 flex flex-col gap-2 rounded-md px-6 py-4 md:px-8 md:py-6 border-[1px] border-zinc-500/30 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#121312]">
        <h3 className="mb-4 text-lg font-medium inline-flex gap-1 items-center tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none">
          Send a message
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 md:gap-4"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-between items-center mb-8">
            <div className="flex flex-col gap-1 w-full relative">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="px-4 py-2 md:px-3 md:py-1 border rounded-md border-zinc-500/20 bg-transparent transition-colors outline-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              />
              <p
                className={`text-red-500 text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs absolute -bottom-5 md:-bottom-6 left-0 w-full ${
                  errors.name ? "visible" : "invisible"
                }`}
              >
                {`${errors.name ? errors.name.message : "\u00A0"}`}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full relative">
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="px-4 py-2 md:px-3 md:py-1 border rounded-md border-zinc-500/20 bg-transparent transition-colors outline-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              />
              <p
                className={`text-red-500 text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs absolute -bottom-5 md:-bottom-6 left-0 w-full ${
                  errors.email ? "visible" : "invisible"
                }`}
              >
                {`${errors.email ? errors.email.message : "\u00A0"}`}
              </p>
            </div>
          </div>
          <div className="relative mb-6">
            <textarea
              {...register("message", { required: true })}
              className="w-full px-4 py-2 md:px-3 md:py-1 border rounded-md border-zinc-500/20 bg-transparent transition-colors outline-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              placeholder="Any ideas/project to discuss"
              rows={12}
            />
            <p
              className={`text-red-500 text-[clamp(.75rem,1.5vw,.875rem)] line-clamp-2 max-w-xs absolute -bottom-5 md:-bottom-6 left-0 w-full ${
                errors.message ? "visible" : "invisible"
              }`}
            >
              {`${errors.message ? errors.message.message : "\u00A0"}`}
            </p>
          </div>

          <button
            type="submit"
            className={`flex justify-center items-center gap-2 rounded-md px-3 py-2 bg-[#333333] border border-zinc-500/10 hover:bg-white transition-colors duration-150 text-white hover:text-black shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-full font-normal tracking-tighter text-[clamp(.875rem,5vw,1.125rem)] leading-none ${
              isSubmitting
                ? "bg-[#333333] hover:bg-[#333333] hover:text-white"
                : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex gap-1 md:gap-2 justify-center items-center">
                <div
                  className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full"
                  role="status"
                  aria-label="loading"
                ></div>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Page;
