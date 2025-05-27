'use client'

import * as React from "react";
import { useState } from "react";
import Suspense from "react";
import { LoginForm } from "@/components/sign-in/LoginForm";
import * as Card from "@/components/common/card";
import { Button } from "@/components/common/button";
import { usePathname } from 'next/navigation'


export default function SignInPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <Card.Card className="w-full max-w-md">
                <Card.CardHeader>
                    <Card.CardTitle className="text-center">
                        Sign In
                    </Card.CardTitle>
                    <Card.CardDescription className="text-center">
                        Please enter your credentials to continue.
                    </Card.CardDescription>
                </Card.CardHeader>
                <Card.CardContent>
                    <div className="flex flex-col space-y-2.5 rounded-lg border bg-card p-6 shadow-2xs">
                        <LoginForm />
                    </div>
                </Card.CardContent>
                <Card.CardFooter className="flex justify-center">
                    <Button asChild variant="outline">
                        <a href="/sign-up">Don't have an account? Sign Up</a>
                    </Button>
                </Card.CardFooter>
            </Card.Card>
            
        </main>
    )
}