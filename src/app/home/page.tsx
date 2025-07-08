'use client';

import React, {FC, useEffect} from "react";
import {Button, Container, Heading, VStack} from '@chakra-ui/react';
import {useRouter} from "next/navigation";
import {useAuth} from "@/app/hooks/use-auth";

const HomePage: FC = () => {
    const {user, logout} = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!user) {
            router.replace("/");
        }
    }, [user, router]);
    if (!user) return null;
    return (
        <Container maxW="container.lg" py={10}>
            <VStack spacing={8} align="stretch">
                <Heading>Welcome, {user.email}!</Heading>
                <Button colorScheme="red" onClick={() => {
                    logout();
                    router.push("/");
                }}>
                    Logout
                </Button>
            </VStack>
        </Container>
    );
};

export default HomePage;
