import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"

const signUpFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.email().trim(),
  password: z.string().min(8, "Password must be at least 8 characters.").max(256),
})
type SignUpFormValues = z.infer<typeof signUpFormSchema>

export const SignUpCard = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: { name: "", email: "", password: "" },
  })

  const submitEvent = (data: SignUpFormValues) => {
    console.log({ data })
  }

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex flex-col items-center justify-center text-center px-7 py-5">
        <CardTitle className="text-2xl">
          New in Zira? Register to becoming <br /> part of us!
        </CardTitle>
        <CardDescription>
          By signing up, you agree to our Terms of Service and{" "}
          <Link href="/privacy">
            <span className="text-blue-700 hover:underline">Privacy Policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            <span className="text-blue-700 hover:underline">Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>

      <div className="px-7">
        <Separator isDotted />
      </div>

      <CardContent className="px-7 py-5">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(submitEvent)}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-y-2">
                      <Label>Full Name</Label>
                      <Input {...field} type="text" placeholder="Enter your name" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button disabled={false} size={"lg"} className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="px-7">
        <Separator isDotted />
      </div>

      <CardContent className="px-7 py-5 flex flex-col gap-y-4">
        <Button variant={"secondary"} size={"lg"} className="w-full" disabled={false}>
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button variant={"secondary"} size={"lg"} className="w-full" disabled={false}>
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
        <p className="w-full text-center mt-4">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-700 hover:underline">
            Sign In
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
