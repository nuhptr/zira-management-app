import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"

const signInFormSchema = z.object({
  email: z.email().trim(),
  password: z.string().min(8, "Password must be at least 8 characters.").max(256),
})
type SignInFormValues = z.infer<typeof signInFormSchema>

export const SignInCard = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: "", password: "" },
  })

  const submitEvent = (data: SignInFormValues) => {
    console.log({ data })
  }

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none tracking-wide">
      <CardHeader className="flex items-center justify-center text-center px-7 py-6">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>

      <div className="px-7">
        <Separator isDotted />
      </div>

      <CardContent className="px-7 py-6">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(submitEvent)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-y-2">
                      <Label>Email</Label>
                      <Input {...field} type="email" placeholder="Enter email address" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-y-2">
                      <Label>Password</Label>
                      <Input {...field} type="password" placeholder="Enter your password" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={false} size={"lg"} className="w-full cursor-pointer">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <Separator isDotted />
      </div>

      <CardContent className="px-7 py-6 flex flex-col gap-y-4">
        <Button variant={"secondary"} size={"lg"} className="w-full" disabled={false}>
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button variant={"secondary"} size={"lg"} className="w-full" disabled={false}>
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>

        <p className="w-full text-center mt-4">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-blue-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
