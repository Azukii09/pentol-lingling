"use client"
// Import necessary dependencies and components
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Button from "@/app/component/util/Button";
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {createLoginSchema, LoginForm} from "@/lib/validation/auth/loginValidationSchema";
import {z} from "zod";
import {useTranslations} from "next-intl";
import {signIn} from "@/app/server/auth";
import {motion} from "framer-motion";

// Login component for user authentication
export default function Login() {
    // Get translations for authentication messages
    const t = useTranslations('auth')

    // State management for loading status and form data
    const [isLoading, setLoading] = useState<boolean>();
    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        password: ''
    });
    
    // State for initial page loading animation
    const [isPageLoading, setIsPageLoading] = useState(true);

    // Effect to control initial loading state
    useEffect(() => {
        // Set loading to false after component mounts
        const timer = setTimeout(() => {
            setIsPageLoading(false);
        }, 500);
        
        return () => clearTimeout(timer);
    }, []);

    // State for form validation errors
    const [errors, setErrors] = useState<Partial<Record<keyof LoginForm, string>>>({});

    // Handle input changes and clear errors on typing
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof LoginForm]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validate form using Zod schema
    const validateForm = () => {
        try {
            const loginSchema = createLoginSchema({
                emailRequired: t('validation.email.required'),
                emailInvalid: t('validation.email.invalid'),
                passwordMin: t('validation.password.minLength', {length: 6}),
                passwordMax: t('validation.password.maxLength', {length: 20}),
            })
            loginSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Partial<Record<keyof LoginForm, string>> = {};
                error.issues.forEach((err) => {
                    if (err.path[0]) {
                        newErrors[err.path[0] as keyof LoginForm] = err.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    // Handle form submission and sign in process
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;
        try {
            setLoading(true);
            await signIn({
                email: formData.email,
                password: formData.password
            });
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error here (show error message, etc.)
        } finally {
            setLoading(false);
        }
    }
    
    // Animation variants for container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };
    
    // Animation variants for individual elements
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };
    
    // Animation variants for form elements with a different delay
    const formItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <>
        {isPageLoading && (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
        )}
            <div className={" global-padding flex justify-center items-center min-h-screen text-quaternary"}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl"
                >
                    <div className="flex flex-col overflow-y-auto md:flex-row">
                        <motion.div
                            variants={itemVariants}
                            className="h-32 md:h-auto md:w-1/2"
                        >
                            <Image
                                aria-hidden="true"
                                className="object-cover w-full h-full"
                                src={"/img/gambar.jpg"}
                                alt="Office"
                                width={800}
                                height={800}
                                priority
                            />
                            <Image
                                aria-hidden="true"
                                className="hidden object-cover w-full h-full"
                                src={"/img/gambar.jpg"}
                                alt="Office"
                                width={800}
                                height={800}
                                priority
                            />
                        </motion.div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <motion.form
                                variants={itemVariants}
                                className="w-full"
                                onSubmit={handleSignIn}
                            >
                                <motion.h1
                                    variants={formItemVariants}
                                    className="mb-4 text-xl font-semibold text-black-text"
                                >
                                    Login
                                </motion.h1>
                                <motion.label
                                    variants={formItemVariants}
                                    className="block text-sm"
                                >
                                    <span className="text-black-text ">Email</span>
                                    <input
                                        className="block w-full mt-1 text-sm focus:ring-2 focus:outline-none focus:shadow-outline-purple p-4 rounded-lg ring-1 ring-tertiary focus:ring-primary"
                                        placeholder="Enter your email"
                                        type="email"
                                        name={"email"}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-danger">{errors.email}</p>
                                    )}
                                </motion.label>
                                <motion.label
                                    variants={formItemVariants}
                                    className="block mt-4 text-sm"
                                >
                                    <span className="text-black-text ">Password</span>
                                    <input
                                        className="block w-full mt-1 text-sm focus:ring-2 focus:outline-none focus:shadow-outline-purple p-4 rounded-lg ring-1 ring-tertiary focus:ring-primary"
                                        placeholder="Enter your password"
                                        type="password"
                                        name={"password"}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-danger">{errors.password}</p>
                                    )}
                                </motion.label>

                                <motion.div variants={formItemVariants}>
                                    <Button
                                        buttonType={"submit"}
                                        variant={"primary"}
                                        buttonName={"login"}
                                        buttonText={isLoading ? "Loading..." : "Login"}
                                        size={"md"}
                                        disabled={isLoading}
                                        customClass={"w-full mt-6"}
                                    />
                                </motion.div>

                                <motion.hr variants={formItemVariants} className="my-8"/>

                                <motion.div
                                    variants={formItemVariants}
                                    className={"flex flex-col gap-4"}
                                >
                                    <Link
                                        href={"/"}
                                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium gap-4 ring-1 ring-tertiary rounded-lg text-primary hover:ring-0 hover:bg-primary hover:text-white"
                                    >
                                        <BsGithub className="size-6"/>
                                        Github
                                    </Link>
                                    <Link
                                        href={"/"}
                                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium gap-4 ring-1 ring-tertiary rounded-lg text-primary hover:ring-0 hover:bg-primary hover:text-white"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-2"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                                            />
                                        </svg>
                                        Twitter
                                    </Link>
                                </motion.div>

                                <motion.p
                                    variants={formItemVariants}
                                    className="mt-4"
                                >
                                    <Link
                                        className="text-sm font-medium text-primary hover:underline"
                                        href={"/"}
                                    >
                                        Forgot your password?
                                    </Link>
                                </motion.p>
                                <motion.p
                                    variants={formItemVariants}
                                    className="mt-1"
                                >
                                    <Link
                                        className="text-sm font-medium text-primary hover:underline"
                                        href={"/register"}
                                    >
                                        Create account
                                    </Link>
                                </motion.p>
                            </motion.form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>

    );
}