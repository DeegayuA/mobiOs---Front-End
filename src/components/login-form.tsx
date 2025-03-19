import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6 justify-center items-center", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required  className="max-w-[300px] min-w-[150px] w-100"/>
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" variant='accent' className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
        Login with Google
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40" className="relative top-0 right-0 w-6 h-6">
            <path fill="#8bb7f0" d="M28.229,29.396c1.528-1.345,2.711-3.051,3.438-4.968c0.187-0.491,0.321-0.905,0.423-1.303 l0.16-0.625H20.5v-6h17.662c0.225,1.167,0.338,2.343,0.338,3.5c0,5.005-2.069,9.834-5.692,13.32L28.229,29.396z">
              </path><path fill="#4e7ab5" d="M37.744,17C37.914,18.002,38,19.008,38,20c0,4.719-1.891,9.277-5.216,12.641l-3.802-3.259 c1.385-1.333,2.465-2.964,3.153-4.777c0.192-0.506,0.332-0.937,0.44-1.355L32.897,22h-1.291H21v-5H37.744 M38.57,16H20v7h11.607 c-0.11,0.428-0.252,0.842-0.406,1.25c-0.772,2.034-2.073,3.808-3.744,5.141l5.367,4.6C36.611,30.518,39,25.544,39,20 C39,18.627,38.847,17.291,38.57,16L38.57,16z"></path><path fill="#8bb7f0" d="M32.828,22c-0.501,3.231-2.175,6.075-4.594,8.058l3.825,3.278c3.175-2.873,5.329-6.852,5.828-11.336 H32.828z"></path><path fill="#bae0bd" d="M20,38.5c-6.903,0-13.128-3.773-16.349-9.877l4.957-3.499C10.625,29.626,15.031,32.5,20,32.5 c2.713,0,5.277-0.851,7.439-2.465l4.624,3.963C28.695,36.906,24.434,38.5,20,38.5z"></path><path fill="#5e9c76" d="M8.411,25.875C10.612,30.242,15.035,33,20,33c2.688,0,5.234-0.803,7.413-2.329l3.876,3.322 C28.086,36.585,24.12,38,20,38c-6.57,0-12.509-3.513-15.697-9.225L8.411,25.875 M8.828,24.357l-5.82,4.108 C6.123,34.704,12.552,39,20,39c4.949,0,9.442-1.908,12.823-5.009l-5.367-4.6C25.411,31.023,22.822,32,20,32 C14.911,32,10.573,28.827,8.828,24.357L8.828,24.357z"></path><path fill="#bae0bd" d="M28.234,30.058C25.992,31.896,23.125,33,20,33c-5.407,0-10.041-3.303-12-8l-4.13,2.95 C6.807,33.899,12.917,38,20,38c4.645,0,8.866-1.775,12.059-4.664L28.234,30.058z"></path><path fill="#f78f8f" d="M3.891,10.907C7.177,5.094,13.31,1.5,20,1.5c4.493,0,8.8,1.632,12.186,4.607l-4.212,4.212 C25.757,8.498,22.944,7.5,20,7.5c-4.84,0-9.196,2.763-11.271,7.093L3.891,10.907z"></path><path fill="#c74343" d="M20,2c4.193,0,8.22,1.462,11.449,4.136l-3.515,3.515C25.688,7.935,22.905,7,20,7 c-4.828,0-9.192,2.643-11.445,6.832l-4.01-3.055C7.791,5.342,13.637,2,20,2 M20,1C12.746,1,6.446,5.068,3.245,11.044l5.682,4.329 C10.738,11.043,15.013,8,20,8c3.059,0,5.881,1.116,8,3l4.911-4.911C29.52,2.94,24.992,1,20,1L20,1z"></path><g><path fill="#f78f8f" d="M20,7V2C13.07,2,7.064,5.922,4.056,11.662l4.056,3.09C10.13,10.189,14.689,7,20,7z"></path></g><g><path fill="#ffeea3" d="M3.235,27.789C2.083,25.324,1.5,22.707,1.5,20c0-2.838,0.661-5.66,1.917-8.197l4.905,3.737 C7.776,16.965,7.5,18.463,7.5,20c0,1.435,0.249,2.851,0.74,4.214L3.235,27.789z"></path><path fill="#ba9b48" d="M3.604,12.574l4.121,3.14C7.244,17.09,7,18.528,7,20c0,1.367,0.217,2.717,0.646,4.024l-4.204,3.003 C2.484,24.791,2,22.432,2,20C2,17.441,2.552,14.897,3.604,12.574 M3.245,11.044C1.815,13.713,1,16.76,1,20 c0,3.075,0.747,5.97,2.044,8.54l5.799-4.142C8.305,23.035,8,21.554,8,20c0-1.64,0.331-3.203,0.927-4.627L3.245,11.044L3.245,11.044 z"></path></g><g><path fill="#ffeea3" d="M7,20c0-1.869,0.402-3.642,1.112-5.248l-4.056-3.09C2.749,14.156,2,16.989,2,20 c0,2.858,0.684,5.55,1.869,7.951L8,25C7.357,23.461,7,21.772,7,20z"></path></g>
          </svg>
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
