import { createContext, useContext } from "react";
import {User} from "@/app/utils/types/user.type";

export interface AuthContextType {
    user: User | null;
    login: (data: { access_token: string; user: User }) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};


