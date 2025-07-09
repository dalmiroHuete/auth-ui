"use client";

import {Box, Heading, Link, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {useEffect, useState} from "react";
import {useAuth} from "@/app/context/auth-context";
import {useRouter} from "next/navigation";
import {useSignup} from "@/app/hooks/auth-api/mutations/use-signup";
import Form from "@/app/components/form/form";
import {FormField} from "@/app/utils/types/form-field.type";
import Feedback from "@/app/components/feedback/feedback";

const signupFields: FormField[] = [
    {name: "firstName", type: "text", label: "First Name", required: true},
    {name: "lastName", type: "text", label: "Last Name", required: true},
    {name: "email", type: "email", label: "Email", required: true},
    {name: "password", type: "password", label: "Password", required: true}
];

export default function SignupPage() {
    const {user} = useAuth();
    const router = useRouter();
    const [formError, setFormError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const signupMutation = useSignup();

    useEffect(() => {
        if (user) {
            router.replace("/home");
        }
    }, [user, router]);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                router.push("/");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage, router]);

    if (user) return null;

    const onSubmit = (values: Record<string, unknown>) => {
        setFormError("");
        setSuccessMessage("");

        signupMutation.mutate(values as { firstName: string; lastName: string; email: string; password: string }, {
            onSuccess: () => {
                setSuccessMessage("Profile created successfully! Redirecting to login...");
            },
            onError: (error: unknown) => {
                setFormError(error instanceof Error ? error.message : "Signup failed");
            },
        });
    };

    return (
        <Box maxW="md" mx="auto" mt={20} p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
            <Heading mb={4} textAlign="center">Sign Up</Heading>
            <Feedback message={formError} type="error"/>
            <Feedback message={successMessage} type="success"/>
            <Form
                formDefinition={signupFields}
                type="signup"
                onSubmitCallback={onSubmit}
                submitText="Sign Up"
            />
            <Text textAlign="center" color="gray.500" mt={4}>
                Already have an account?{' '}
                <Link as={NextLink} href="/" color="blue.500">Sign In</Link>
            </Text>
        </Box>
    );
}
