import Auth from "@/components/auth";
import { ModeToggle } from "@/components/darkMode";
import InstagramIcon from "@/components/instagram-icon";
import NavLogo from "@/components/nav-logo";
import TwitterIcon from "@/components/twitter-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import YoutubeIcon from "@/components/youtube-icon";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

const testimonials = [
  {
    name: "John Doe",
    initials: "JD",
    image: "/placeholder-user.jpg",
    feedback:
      "GabGenie has been a game-changer for my social media content. The AI-generated captions and descriptions have boosted my engagement and helped me connect with my audience in a more authentic way.",
  },
  {
    name: "Sarah Anderson",
    initials: "SA",
    image: "/placeholder-user.jpg",
    feedback:
      "As a busy content creator, GabGenie has saved me so much time and effort. The app's ability to generate high-quality content for my social channels has been a game-changer.",
  },
  {
    name: "Michael Johnson",
    initials: "MJ",
    image: "/placeholder-user.jpg",
    feedback:
      "I was skeptical about using an AI-powered content generator at first, but GabGenie has exceeded all my expectations. The quality of the content is outstanding, and it's helped me reach a whole new audience.",
  },
];

const services = [
  {
    icon: <YoutubeIcon className="h-6 w-6 text-primary" />,
    title: "YouTube Descriptions",
    description:
      "Craft the perfect YouTube description to hook your viewers and boost engagement.",
  },
  {
    icon: <InstagramIcon className="h-6 w-6 text-primary" />,
    title: "Instagram Captions",
    description:
      "Elevate your Instagram game with captivating captions that resonate with your audience.",
  },
  {
    icon: <TwitterIcon className="h-6 w-6 text-primary" />,
    title: "Tweets",
    description:
      "Craft concise and impactful tweets that stand out in the social media landscape.",
  },
];

export default function Home() {
  const { userId } = auth(); /* 
  if (userId) {
    redirect("/dashboard");
  } */
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <NavLogo />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <ModeToggle/>
          <Link href="/dashboard" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">Dashboard</Link>
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-2 ">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unlock Your Content Potential with GabGenie
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl text-center mx-auto">
                  Effortlessly generate captivating YouTube descriptions,
                  Instagram captions, tweets, and more using the power of Gemini
                  AI.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Try GabGenie
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Unleash Your Content Creativity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  GabGenie&apos;s advanced AI technology can generate unique and
                  engaging content for all your social media needs. From
                  captivating YouTube descriptions to attention-grabbing
                  Instagram captions and concise yet powerful tweets, our app
                  has you covered.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-4 shadow-md"
                  >
                    <div className="flex items-center gap-2 justify-center">
                      {service.icon}
                      <h3 className="text-lg font-bold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real users who have experienced the power of
                  GabGenie.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-4 shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-muted-foreground">
                          &quot;{testimonial.feedback}&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Elevate Your Content?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up for GabGenie and start creating captivating content
                  that resonates with your audience.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">Try GabGenie</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Sign up to get started. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 GabGenie. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
