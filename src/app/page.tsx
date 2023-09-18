import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
// import FileUpload from "@/components/FileUpload";
// import { checkSubscription } from "@/lib/subscription";
// import SubscriptionButton from "@/components/SubscriptionButton";
// import { db } from "@/lib/db";
// import { chats } from "@/lib/db/schema";
// import { eq } from "drizzle-orm";

import { cn } from "@/lib/utils";
import { Montserrat, Kanit } from 'next/font/google';

const montserrat = Montserrat ({ weight: '300', subsets: ['latin'] });
const kanit = Kanit ({ weight: '700', subsets: ['latin']});

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  // const isPro = await checkSubscription();
  let firstChat;
  // if (userId) {
  //   firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
  //   if (firstChat) {
  //     firstChat = firstChat[0];
  //   }
  // }
  return (
    <div className="w-screen min-h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className={cn("mr-3 text-5xl font-semibold", kanit.className)}>Converse with any PDF document</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && firstChat && (
              // <Link href={`/chat/${firstChat.id}`}>
                <Button>
                  Go to Chats <ArrowRight className="ml-2" />
                </Button>
            )}
            <div className="ml-3">
              {/* <SubscriptionButton isPro={isPro} /> */} Subscribe button here
            </div>
          </div>

          <p className={cn("max-w-xl mt-1 text-lg text-slate-600", montserrat.className)}>
            Join a vast community of students, researchers, and professionals to promptly address questions and gain insights into research using AI.
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              // <FileUpload />
              <h1>fileuplod</h1>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}