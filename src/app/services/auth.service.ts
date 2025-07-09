const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

// Utility function to get token from localStorage
export const getAuthToken = (): string | null => {
    return localStorage.getItem('auth_token');
};

export class AuthService {
    private static getAuthHeaders(): HeadersInit {
        const token = getAuthToken();
        return {
            'Content-Type': 'application/json',
            ...(token && {'Authorization': `Bearer ${token}`})
        };
    }

    static async login(email: string, password: string) {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        });
        if (!response.ok) {
            const errorData = await response.json();
            // Handle backend error format with message array
            if (errorData.message && Array.isArray(errorData.message)) {
                throw new Error('• ' + errorData.message.join('\n• '));
            } else if (errorData.message) {
                throw new Error(errorData.message);
            } else {
                throw new Error('Invalid credentials');
            }
        }
        return response.json();
    }

    static async signup(firstName: string, lastName: string, email: string, password: string) {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName, lastName, email, password}),
        });
        if (!response.ok) {
            const errorData = await response.json();
            // Handle backend error format with message array
            if (errorData.message && Array.isArray(errorData.message)) {
                throw new Error('• ' + errorData.message.join('\n• '));
            } else if (errorData.message) {
                throw new Error(errorData.message);
            } else {
                throw new Error('Signup failed');
            }
        }
        return response.json();
    }

    // example authenticated request
    static async getProfile() {
        const response = await fetch(`${API_BASE_URL}/auth/profile`, {
            method: 'GET',
            headers: this.getAuthHeaders(),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }
        return response.json();
    }
}


