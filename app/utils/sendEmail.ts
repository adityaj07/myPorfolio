import { TContactFormSchema } from "../lib/types";

export async function sendEmail(data: TContactFormSchema) {
  // TODO: send email
  const apiEndpoint = "/api/email";

  const res = await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await res.json();
  return resData;
}
