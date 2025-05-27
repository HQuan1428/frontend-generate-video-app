'use client';
import React, { useState } from 'react';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import { Button } from "@/components/common/button";
import Form from 'next/form';
import {
    EyeClosedIcon,
    EyeOpenIcon,
    PersonIcon,

} from '@radix-ui/react-icons';
import { SeparatorWithText } from '../common/separator';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                <div className="w-32 text-white md:w-36">

                </div>
            </div> 
            <Form action='#' >
                <Label htmlFor='Username'>Username</Label>
                <div className="mb-4">
                    <Input type='text' placeholder='Username' className="w-full" />
                </div>

                <Label htmlFor='Password'>Password</Label>
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            className="w-full pr-20" // Chừa chỗ cho nút Show
                        />
                        <Button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-1 text-sm h-6"
                        >
                            {showPassword ? <EyeOpenIcon/> : <EyeClosedIcon/>}
                        </Button>       
                </div>
                
                </div>
                    
                    <div className="mb-4">
                    <Button type='submit' className="w-full">
                        
                        Sign In
                    </Button>
                </div>
            </Form>
                    
            <SeparatorWithText text="Or continue with" className="mb-4" />
        
            <div className="mb-4 grid gap-2">
                <button
                    // onClick={() => signIn("google")}
                    className="w-full flex justify-center items-center bg-background text-primary px-4 py-2 rounded-md border"
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                    Sign in with Google
                </button>
                <button
                    // onClick={() => signIn("facebook")}
                    className="w-full flex justify-center items-center bg-background text-primary px-4 py-2 rounded-md border"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5 mr-2" />
                    Sign in with Facebook
                </button>
            </div>
        </div>
    );
};

export { LoginForm };