'use client';
import * as React from 'react';
import { Input } from '@/components/common/input';
import { Label } from '@/components/common/label';
import Form from 'next/form';

const SignupForm = () => {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);

    // Real-time validation when either password field changes
    React.useEffect(() => {
        if (password && confirmPassword && password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError(null);
        }
    }, [password, confirmPassword]);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError(null); // Clear error if passwords match
        // Proceed with form submission (e.g., API call)
        console.log('Form submitted with password:', password);
        // Example: await fetch('/api/signup', { method: 'POST', body: JSON.stringify({ password }) });
    };
    return (
        <div>
            {/* Header with blue background */}
            <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                <div className="w-32 text-white md:w-36"></div>
            </div>

            {/* Form */}
            <Form action="#" onSubmit={handleSubmit} className="mt-4">
                {/* Name Section (First Name and Last Name in two columns) */}
                <div className="mb-4">
                    <Label htmlFor="firstName">Name</Label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Input
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                                className="w-full"
                            />
                        </div>
                        <div>
                            <Input
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* E-mail Field */}
                <div className="mb-4">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        className="w-full"
                        
                    />
                </div>

                {/* Phone Field with Required Indicator */}
                <div className="mb-4">
                    <Label htmlFor="phone">
                        Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="Your Phone Number"
                        className="w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <Label htmlFor="password" >
                        Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <Label htmlFor="confirm-password" >
                        Confirm password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    );
};

export { SignupForm };