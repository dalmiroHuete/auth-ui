// TODO: If user is authenticated, redirect to /home
"use client";

import {Box, Heading, Link, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {useEffect, useState} from "react";
import {useAuth} from "@/app/context/auth-context";
import {useRouter} from "next/navigation";
import {useLogin} from "@/app/hooks/auth-api/mutations/use-login";
import {LOGIN} from "@/app/utils/constants/constants";
import Form from "@/app/components/form/form";
import {FormField} from "@/app/utils/types/form-field.type";
import Feedback from "@/app/components/feedback/feedback";

const loginFields: FormField[] = [
    {name: "email", type: "email", label: "Email", required: true},
    {name: "password", type: "password", label: "Password", required: true}
];

export default function LoginPage() {
    const {login, user} = useAuth();
    const router = useRouter();
    const [formError, setFormError] = useState("");
    const loginMutation = useLogin();

    useEffect(() => {
        if (user) {
            router.replace("/home");
        }
    }, [user, router]);
    if (user) return null;

    const onSubmit = (values: Record<string, unknown>) => {
        setFormError("");
        loginMutation.mutate(values as { email: string; password: string }, {
            onSuccess: (data) => {
                login(data);
                router.push("/home");
            },
            onError: (error: unknown) => {
                setFormError(error instanceof Error ? error.message : "Login failed");
            },
        });
    };

    return (
        <Box maxW="md" mx="auto" mt={20} p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
            <Heading mb={4} textAlign="center">Sign In</Heading>
            <Feedback message={formError} type="error"/>
            <Form
                formDefinition={loginFields}
                type="login"
                onSubmitCallback={onSubmit}
                submitText="Sign In"
            />
            <Text textAlign="center" color="gray.500" mt={4}>
                {LOGIN.DONT_HAVE_ACCOUNT}
                <Link as={NextLink} href="/signup" color="blue.500">Sign Up</Link>
            </Text>
        </Box>
    );
}
