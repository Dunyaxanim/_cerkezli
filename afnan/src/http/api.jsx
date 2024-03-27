export const storedLanguage = async () => {
    return localStorage.getItem('lang') ?? 'az';
};
