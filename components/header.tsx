"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { UserCircle, Plus } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const isLoggedIn = false; // Replace with actual auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">ShareSub</span>
        </Link>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/create">
                  <Plus className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/dashboard">
                  <UserCircle className="h-5 w-5" />
                </Link>
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}