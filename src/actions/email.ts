"use server";

import FooEmail from "@/emails/Foo";
import { render } from "jsx-email";

export const renderEmail = async () => {
  const html = await render(FooEmail({ text: "Hello World" }));
  console.log(html);
};
