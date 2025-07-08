'use client';

import React, {ReactNode, useEffect, useState} from "react";
import {AuthContext} from "@/app/context/auth-context";
import {User} from "@/app/utils/types/user.type";

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('auth_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (data: { access_token: string; user: User }) => {
        setUser(data.user);
        
        localStorage.setItem('auth_user', JSON.stringify(data.user));
        localStorage.setItem('auth_token', data.access_token);
    };

    const logout = () => {
        setUser(null);

        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
