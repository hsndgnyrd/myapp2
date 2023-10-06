"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(5, {
      message: "Username must be maximum 5 characters.",
    }),
  password: z
    .string()
    .min(1, { message: "Password field cannot be empty." })
    .max(15),
});

const Loginpage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <div className="flex flex-col items-center gap-5">
      <Image src="/logopng.png" alt="Logo" width={200} height={200} />
      <div className="w-[420px] flex flex-col justify-center h-auto border text-white border-gray-700 py-5 px-10 rounded-lg bg-[#1F2937]">
        <Form {...form}>
          <h2 className="text-3xl mb-10">Sign in to your account</h2>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 flex flex-col"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#374151]"
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#374151]"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <div className="flex items-center gap-2 cursor-pointer">
                <Checkbox className="bg-[#374151]" id="remember" />
                <label className="text-sm " htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="#">
                <span className="text-sm cursor-pointer text-[#1F4EDD] font-bold">
                  Forgot Password?
                </span>
              </a>
            </div>

            <Button className="bg-[#1F4EDD] hover:bg-[#251fdd]" type="submit">
              Login
            </Button>

            <span className="text-sm">
              Don’t have an account yet?{" "}
              <a className="text-[#1F4EDD] font-bold" href="#">
                Sign up
              </a>
            </span>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Loginpage;
